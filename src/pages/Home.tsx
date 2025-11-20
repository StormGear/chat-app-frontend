import { useState } from "react";
import ConversationScreen from "./ConversationScreen";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";

export interface TabProps {
  activeTab: 'dm' | 'group';
}

export interface ChatData {
  type: 'dm' | 'group';
  data: {
    conversation_id?: number;
    other_user_id?: number;
    username?: string;
    group_name?: string;
  };
}

const Home = () => {
    const [activeTab, setActiveTab] = useState<TabProps['activeTab']>('dm');
    const [selectedChat, setSelectedChat] = useState<ChatData | null>(null);

    return (
      <div className="h-screen flex flex-col">
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            activeTab={activeTab}
            onSelectChat={setSelectedChat}
            selectedChat={selectedChat}
          />

          <div className="flex-1">
            <ConversationScreen selectedChat={selectedChat} />
          </div>
        </div>
      </div>
    );
}


export default Home;