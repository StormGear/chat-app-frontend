import type { Message } from "../types";
import React  from "react";


interface ConversationMessageProps {
    textmessage: Message;
    isCurrentUser: boolean;
}

export const ConversationMessage: React.FC<ConversationMessageProps> = ({textmessage, isCurrentUser}) => {
    return (
    <div style={{ textAlign: isCurrentUser ? 'right' : 'left', margin: '5px 0' }}>
      <div
      >
        {!isCurrentUser && <b>{textmessage.sender_id}</b>}
        {textmessage.textmessage}
        <span>
          {new Date(textmessage.created_at).toLocaleTimeString()}
        </span>
      </div>
    </div>
    )
}