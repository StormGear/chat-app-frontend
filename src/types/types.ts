
export type User = {
    id: string;
    username: string;
} | null;

export interface Message {
    message_id: number;
    conversation_id: number;
    sender_id: number;
    other_username?: string;
    textmessage: string;
    created_at: Date;
}

export interface Conversation {
    conversation_id: number;
    recipient_user_id: number;
    recipient_username: string;
}


//   {
//     "conversation_id": 4,
//     "recipient_user_id": 2,
//     "recipient_username": "ama"
//   }



export type AuthContextType = {
  user: User;
  login: (id: string, username: string) => void;
  logout: () => void;
};