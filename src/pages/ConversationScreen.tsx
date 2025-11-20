import React, { useRef, useEffect, useState } from 'react';
import type { Message } from '../types/types';
import { ConversationMessage } from '../components/ConversationMessage';
import { mockMessages } from '../mockData';
import MessageInput from '../components/MessageInput';
import type { ChatData } from './Home';




const ConversationScreen: React.FC<{selectedChat: ChatData | null}> = ({selectedChat}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);


  const [messages, setMessages] = useState<Message[]>(mockMessages);


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
          setMessages(
            mockMessages.filter(
              (m: Message) =>
                String(m.conversation_id) ===
                String(selectedChat.data.conversation_id)
            )
          );
          return;
        }
        const data: Message[] = await response.json();
        setMessages(data);
      } catch (err) {
        console.error('Failed to load messages for selected chat', err);
        setMessages(
          mockMessages.filter(
            (m: Message) =>
              String(m.conversation_id) ===
              String(selectedChat.data.conversation_id)
          )
        );
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
        {messages.length === 0 ? (
          <div className="text-gray-500">No messages yet.</div>
        ) : (
          messages.map((m) => (
            <ConversationMessage
              key={m.message_id}
              textmessage={m}
              isCurrentUser={m.sender_id === 1}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4 bg-white">
        <MessageInput />
      </div>
    </div>
  );
};

export default ConversationScreen;
