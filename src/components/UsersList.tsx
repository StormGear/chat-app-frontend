import { useEffect, useState } from 'react';
import { mockUsers } from '../mockData';
import type { ChatData } from '../pages/Home';
import type { Conversation, User } from '../types/types';
import { useAuth } from '../contexts/AuthContext';
import { useMessaging } from '../contexts/MessagingContext';

interface UsersListProps {
  onSelect?: (chat: ChatData) => void;
  onChatSelect?: (chat: ChatData) => void;
  activeUserId?: number | null;
}

const UsersList: React.FC<UsersListProps> = ({
  onSelect,
  onChatSelect,
  activeUserId = null,
}) => {
  const users = mockUsers;
  const { user } = useAuth();
  const { conversations, setConversations} = useMessaging();

  useEffect(() => {
    const fetchDirectMessages = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/chat/conversations/get-direct-messages?userId=${user?.id}`
        );

        if (!response.ok) {
          const errorInfo = await response.json();
          throw new Error(errorInfo || 'Failed to get direct messages');
        }
        const data = await response.json();
        console.log('Retrieved dms ', data);
        setConversations(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDirectMessages();
    return () => setConversations([]);
  }, [user]);

  const handleSelect = (c: Conversation) => {
    const chat: ChatData = {
      type: 'dm',
      data: {
        conversation_id: c?.conversation_id,
        other_user_id: c?.recipient_user_id,
        username: c?.recipient_username,
      },
    };
    onSelect?.(chat);
    onChatSelect?.(chat);
  };

  return (
    <>
      {conversations.map((c: Conversation) => {
        const isActive =
          activeUserId !== null &&
          Number(activeUserId) === c?.recipient_user_id;

        return (
          <div
            key={c?.conversation_id}
            role="button"
            tabIndex={0}
            onClick={() => handleSelect(c)}
            className={`p-4 cursor-pointer flex items-center border-b ${
              isActive ? 'bg-amber-200' : 'hover:bg-gray-100'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                isActive ? 'bg-amber-600 text-white' : 'bg-amber-500 text-black'
              }`}
            >
              {c?.recipient_username?.charAt(0)?.toUpperCase() ?? '?'}
            </div>

            <div className="ml-3">
              <p className="font-semibold">
                {c?.recipient_username ?? 'Unknown'}
              </p>
              <p className="text-xs text-gray-500">Tap to chat</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UsersList;
