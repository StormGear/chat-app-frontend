import UserListView from './UsersList';
import GroupListView from './GroupsList';
import type { ChatData, TabProps } from '../pages/Home';

interface SidebarProps {
  activeTab: TabProps['activeTab'];
  onSelectChat: (chat: ChatData | null) => void;
  selectedChat: ChatData | null;
}
  

const Sidebar = ({ activeTab, onSelectChat, selectedChat } : SidebarProps) => {
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

  return (
    <div className="w-80 bg-white shadow-lg border-r flex flex-col">
      <div className="p-4 border-b bg-gray-50">
        {activeTab === 'dm' ? (
          <button
            className="w-full bg-amber-500 text-black font-semibold py-2 rounded"
            onClick={() => onSelectChat(null)}
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
    </div>
  );
};

export default Sidebar;
