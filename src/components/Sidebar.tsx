import UserListView from './UsersList';
import GroupListView from './GroupsList';
import type { ChatData, TabProps } from '../pages/Home';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import type { User } from '../types/types';

interface SidebarProps {
  activeTab: TabProps['activeTab'];
  onSelectChat: (chat: ChatData | null) => void;
  selectedChat: ChatData | null;
}
  

const Sidebar = ({ activeTab, onSelectChat, selectedChat }: SidebarProps) => {
  const [showStartModal, setShowStartModal] = useState(false);
  const [otherUsers, setOtherUsers] = useState<User[] | null>([
    {
      id: 2,
      username: 'chris',
    },
    {
      id: 3,
      username: 'alex',
    },
  ]);
  const { user } = useAuth();
  const activeUserId =
    selectedChat && selectedChat.type === 'dm'
      ? selectedChat.data.other_user_id ??
        selectedChat.data.conversation_id ??
        null
      : null;

  const activeGroupId =
    selectedChat && selectedChat.type === 'group'
      ? selectedChat.data.conversation_id ?? null
      : null;
  
  const openStartModal = () => {
    setShowStartModal(true);
  }
  
  const closeStartModal = () => {
    setShowStartModal(false);
  }

   const handleStartWithUser = (u: User) => {
     const chat: ChatData = {
       type: 'dm',
       data: {
         other_user_id: u?.id,
         username: u?.username,
       },
     };
     onSelectChat(chat);
     closeStartModal();
   };

  

  return (
    <div className="w-80 bg-white shadow-lg border-r flex flex-col">
      <div className="p-4 border-b bg-gray-50">
        {activeTab === 'dm' ? (
          <button
            className="w-full bg-amber-500 text-black font-semibold py-2 rounded"
            onClick={openStartModal}
            title="Start a new conversation"
          >
            Start Conversation
          </button>
        ) : (
          <button
            className="w-full bg-amber-500 text-black font-semibold py-2 rounded"
            onClick={() => onSelectChat(null)}
            title="Create a new group"
          >
            Create Group
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'dm' ? (
          <UserListView
            onSelect={(chat) => onSelectChat(chat)}
            onChatSelect={(chat) => onSelectChat(chat)}
            activeUserId={activeUserId}
          />
        ) : (
          <GroupListView
            onSelect={(chat) => onSelectChat(chat)}
            onChatSelect={(chat) => onSelectChat(chat)}
            activeGroupId={activeGroupId}
          />
        )}
      </div>

      {showStartModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={closeStartModal}
          />
          <div className="relative w-[92%] max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Start a conversation</h3>
              <button
                onClick={closeStartModal}
                aria-label="Close"
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            <div className="p-4 max-h-80 overflow-y-auto">
              {otherUsers && otherUsers.length > 0 ? (
                otherUsers
                  .filter((u: User) => !user || u?.id !== user.id)
                  .map((u: User) => (
                    <button
                      key={u?.id}
                      onClick={() => handleStartWithUser(u)}
                      className="w-full text-left p-3 rounded hover:bg-gray-100 flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-semibold">
                        {u?.username?.charAt(0)?.toUpperCase() ?? '?'}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">
                          {u?.username}
                        </div>
                        <div className="text-xs text-gray-500">
                          Tap to open DM
                        </div>
                      </div>
                    </button>
                  ))
              ) : (
                <div className="text-gray-500">No registered users found.</div>
              )}
            </div>

            <div className="p-3 border-t flex justify-end">
              <button
                onClick={closeStartModal}
                className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
