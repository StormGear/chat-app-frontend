import React, { useRef, useEffect, useState } from 'react';
import type { Message } from '../types/types';
import { ConversationMessage } from '../components/ConversationMessage';
import { mockMessages } from '../mockData';
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import MessageInput from '../components/MessageInput';




const ConversationScreen: React.FC = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { conversationId } = useParams();
  console.log(useLocation().state.mockUser);
  const currentUserId: number = 1;

  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleSend = () => {

  }

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`http://localhost:8080/chat/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Message[] = await response.json();
        setMessages(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, [conversationId]);


  return (
    <div>
      <NavBar title={useLocation().state.mockUser.username.toString()} />
      {messages.map((message) => (
        <ConversationMessage key={message.message_id} textmessage={message} isCurrentUser={message.sender_id === currentUserId} />
      ))}
      <div ref={messagesEndRef} />
      <MessageInput />
    </div>
  );
};

export default ConversationScreen;
