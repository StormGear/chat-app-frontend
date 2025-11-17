import type { Message } from "../types/types";
import React  from "react";


interface ConversationMessageProps {
    textmessage: Message;
    isCurrentUser: boolean;
}

export const ConversationMessage: React.FC<ConversationMessageProps> = ({textmessage, isCurrentUser}) => {
    return (
    <div style={{ textAlign: isCurrentUser ? 'right' : 'left' }} className={`my-5 mx-5`}>
      <div className="flex flex-col">
        {!isCurrentUser && <b>{textmessage.sender_id}</b>}
        {textmessage.textmessage}
        <span>
          {new Date(textmessage.created_at).toLocaleTimeString()}
        </span>
      </div>
    </div>
    )
}