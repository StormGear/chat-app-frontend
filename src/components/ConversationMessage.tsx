import React  from "react";


interface ConversationMessageProps {
    textmessage: string;
    isCurrentUser: boolean;
    created_at: Date;
    recipient_username: string;
}

export const ConversationMessage: React.FC<ConversationMessageProps> = ({textmessage, isCurrentUser, created_at, recipient_username}) => {
    return (
      <div
        className={`flex my-3 mx-3 p-2 rounded-lg ${
          isCurrentUser ? ' justify-end' : ' justify-start'
        }`}
      >
        <div
          className={`max-w-[70%] p-3 rounded-lg shadow-sm wrap-break-word ${
            isCurrentUser
              ? 'bg-amber-400 text-white rounded-br-md rounded-tl-md'
              : 'bg-white text-gray-900 rounded-bl-md rounded-tr-md'
          }`}
        >
          {!isCurrentUser && (
            <b className="text-sm font-semibold text-gray-700 mb-1">
              {recipient_username}
            </b>
          )}
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {textmessage}{' '}
          </div>
          <div
            className={`mt-2 text-xs ${
              isCurrentUser ? 'text-amber-100' : 'text-gray-500'
            } text-right font-bold`}
          >
            {new Date(created_at).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </div>
    );
}