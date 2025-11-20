import React  from "react";


interface ConversationMessageProps {
    textmessage: string;
    isCurrentUser: boolean;
    created_at: Date;
    recipient_username: string;
}

export const ConversationMessage: React.FC<ConversationMessageProps> = ({textmessage, isCurrentUser, created_at, recipient_username}) => {
    return (
    <div style={{ textAlign: isCurrentUser ? 'right' : 'left' }} className={`my-5 mx-5 p-5`}>
      <div className="flex flex-col">
        {!isCurrentUser && <b>{recipient_username}</b>}
        {textmessage}
        <span>
          {new Date(created_at).toLocaleTimeString()}
        </span>
      </div>
    </div>
    )
}