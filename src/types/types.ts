
export type User = {
    id: number;
    username: string;
} | null;

export interface Message {
    message_id: number;
    conversation_id: number;
    sender_id: number;
    textmessage: string;
    created_at: Date;
}

export interface Conversation {
    conversation_id: number;
}



export type AuthContextType = {
  user: User;
  login: (id: number, username: string) => void;
  logout: () => void;
};