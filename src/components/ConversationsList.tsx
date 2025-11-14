import { useState } from "react";
import { mockConversations, mockUser } from "../mockData"

import type { Conversation } from "../types";


const ConversationsList = () => {
  // return all users the current user is in a conversation with
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);

  return (
    <div className="center">
      <div style={{marginBottom: "10px"}}>
        <b>Conversations</b>
      </div>
      <div style={{marginBottom: "10px"}}>
        <b>
            Current user: {mockUser.username}
        </b>
      </div>
      <ul>
        {
        conversations.map((conversation) => (
            <li key={conversation.conversation_id}>
            <a href="">
                <div>
                    <p>{conversation.conversation_id}</p>
                </div>
            </a>
        </li>
        ))
      }
      </ul>
    </div>
  )
}

export default ConversationsList