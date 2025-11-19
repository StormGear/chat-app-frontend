import { useState } from "react";
import { mockConversations, mockUser } from "../mockData"

import type { Conversation } from "../types/types";
import ConversationItem from "./ConversationItem";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


const ConversationsList = () => {
  // return all users the current user is in a conversation with
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
  const { user } = useAuth();

  return (
    <div className="center">
      <div className="my-10">
        <b>
            Current user: {user?.username.toUpperCase()}
        </b>
      </div>
      <ul className="justify-center">
        {
        conversations.map((conversation) => (
        <Link to="/chat/conversation_id" 
        state={{mockUser}}>
          <li key={conversation.conversation_id}>
              <ConversationItem name="here" conversation_id={conversation.conversation_id} />
          </li>
        </Link>
        ))
      }
      </ul>
    </div>
  )
}

export default ConversationsList