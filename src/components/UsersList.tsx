import { mockUsers } from "../mockData";
import type { ChatData } from "../pages/Home";
import type { User } from "../types/types";

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

  const handleSelect = (u: User) => {
    const chat: ChatData = {
      type: 'dm',
      data: {
        conversation_id: u?.id,
        other_user_id: u?.id,
        username: u?.username,
      },
    };
    onSelect?.(chat);
    onChatSelect?.(chat);
  };


  return (
    <>
      {users.map((u: User) => {
        const isActive =
          activeUserId !== null && Number(activeUserId) === u?.id;

        return (
          <div
            key={u?.id}
            role="button"
            tabIndex={0}
            onClick={() => handleSelect(u)}
            className={`p-4 cursor-pointer flex items-center border-b ${
              isActive ? 'bg-amber-200' : 'hover:bg-gray-100'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                isActive ? 'bg-amber-600 text-white' : 'bg-amber-500 text-black'
              }`}
            >
              {u?.username?.charAt(0)?.toUpperCase() ?? '?'}
            </div>

            <div className="ml-3">
              <p className="font-semibold">{u?.username ?? 'Unknown'}</p>
              <p className="text-xs text-gray-500">Tap to chat</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UsersList;
