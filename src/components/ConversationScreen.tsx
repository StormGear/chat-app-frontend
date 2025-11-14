import React, { useRef, useEffect, useState } from 'react';
import type { Message } from '../types';
import { ConversationMessage } from './ConversationMessage';
import { mockMessages } from '../mockData';

interface ConversationScreenProps {
  currentConversationId: string;
  currentUserId: number;
}




const ConversationScreen: React.FC<ConversationScreenProps> = ({ currentConversationId, currentUserId }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>(mockMessages);

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
  }, [currentConversationId]);


  return (
    <div>
      {messages.map((message) => (
        <ConversationMessage key={message.message_id} textmessage={message} isCurrentUser={message.sender_id === currentUserId} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ConversationScreen;
