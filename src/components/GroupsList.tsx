import { mockGroups } from "../mockData";
import type { ChatData } from "../pages/Home";

interface GroupsListProps {
  onSelect?: (chat: ChatData) => void;
  onChatSelect?: (chat: ChatData) => void;
  activeGroupId?: number | null;
}

const GroupList = ({ onSelect, onChatSelect, activeGroupId }: GroupsListProps) => {

  const groups = mockGroups;

    const handleSelect = (g: { group_id: number; group_name: string }) => {
      const chat: ChatData = {
        type: 'group',
        data: {
          conversation_id: g.group_id,
          group_name: g.group_name,
        },
      };
      onSelect?.(chat);
      onChatSelect?.(chat);
    };

  return (
    <>
      {groups.map((g: { group_id: number; group_name: string }) => {
        const isActive =
          activeGroupId !== null && Number(activeGroupId) === g.group_id;

        return (
          <div
            key={g.group_id}
            role="button"
            tabIndex={0}
            onClick={() => handleSelect(g)}
            className={`p-4 cursor-pointer flex items-center border-b ${
              isActive ? 'bg-amber-200' : 'hover:bg-gray-100'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                isActive ? 'bg-black text-white' : 'bg-gray-800 text-white'
              }`}
            >
              G
            </div>

            <div className="ml-3">
              <p className="font-semibold">{g.group_name ?? 'Unnamed Group'}</p>
              <p className="text-xs text-gray-500">Tap to open group</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GroupList;