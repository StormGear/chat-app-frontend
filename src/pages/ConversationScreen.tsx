import React, { useRef, useEffect, useState } from 'react';
import type { Message } from '../types/types';
import { ConversationMessage } from '../components/ConversationMessage';
import MessageInput from '../components/MessageInput';
import type { ChatData } from './Home';
import { useAuth } from '../contexts/AuthContext';




const ConversationScreen: React.FC<{selectedChat: ChatData | null}> = ({selectedChat}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();


  const [messages, setMessages] = useState<Message[]>();


   useEffect(() => {
     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, [messages]);
  
  
  useEffect(() => {
    if (!selectedChat) {
      setMessages([]); 
      return;
    }

    const fetchMessages = async () => {
      try {
        const url =
          selectedChat.type === 'dm'
            ? `http://localhost:8080/chat/messages/${selectedChat.data.conversation_id}`
            : `http://localhost:8080/chat/group/${
                selectedChat.data.conversation_id ?? selectedChat.data.conversation_id
              }`;

        const response = await fetch(url);
        if (!response.ok) {
          console.log("Failed to load messages")
          return;
        }
        const data: Message[] = await response.json();
        setMessages(data);
        console.log("messages", data);
      } catch (err) {
        console.error('Failed to load messages for selected chat', err);
      }
    };

    fetchMessages();
  }, [selectedChat]);

  

   

  if (!selectedChat) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select a user or group to start chatting
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b shadow bg-white">
        <h2 className="text-2xl font-bold">
          {selectedChat.type === 'dm'
            ? selectedChat.data.username
            : selectedChat.data.group_name}
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages?.length === 0 ? (
          <div className="text-gray-500">No messages yet.</div>
        ) : (
          messages?.map((m) => (
            <ConversationMessage
              key={String(m.created_at)}
              textmessage={m.content}
              isCurrentUser={m.sender_id === user?.id}
              created_at={m.created_at}
              recipient_username={m.username}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4 bg-white">
        <MessageInput selectedChat={selectedChat}/>
      </div>
    </div>
  );
};

export default ConversationScreen;
