import React, { createContext, useContext, useState } from 'react';
import type { Conversation, MessagingContextType} from '../types/types';

const MessagingContext = createContext<MessagingContextType | undefined>(undefined);

export const MessagingProvider = ({ children }: { children: React.ReactNode }) => {
   const [conversations, setConversations] = useState<Conversation[]>([]);

  
  return (
    <MessagingContext.Provider value={{ conversations, setConversations }}>
      {children}
    </MessagingContext.Provider>
  );
};

export const useMessaging = () => {
  const context = useContext(MessagingContext);
  if (!context) {
    throw new Error('no MessagingContext');
  }
  return context;
};
