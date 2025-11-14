import type { User, Conversation, Message} from "./types";


export const mockUser: User = {
    id: 1,
    username: "papa"
}

export const mockConversations: Conversation[] = [
    {
        conversation_id: 1
    },
    {
        conversation_id: 2
    },
    {
        conversation_id: 3
    }
]

export const mockMessages: Message[] = [
    {
        message_id: 1,
        conversation_id: 1,
        sender_id: 2,
        textmessage: "Hello Akua",
        created_at: new Date(),
    },
    {
        message_id: 2,
        conversation_id: 1,
        sender_id: 1,
        textmessage: "How is it?",
        created_at: new Date(),
    }
]