
export type User = {
    id: number;
    username: string;
} | null;

export interface Message {
    sender_id : number;
    content: string;
    created_at: Date;
    username: string;
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
  login: (id: number, username: string) => void;
  logout: () => void;
};