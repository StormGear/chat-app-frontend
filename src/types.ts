
export interface User {
    id: number;
    username: string;
}

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