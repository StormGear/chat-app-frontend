import type { User, Conversation, Message} from "./types/types";


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
        other_username: "papa",
        textmessage: "Hello Akua",
        created_at: new Date(),
    },
    {
        message_id: 2,
        conversation_id: 1,
        sender_id: 1,
        other_username: "akua",
        textmessage: "How is it?",
        created_at: new Date(),
    }
]

export const mockUsers: User[] = [
    {
        id: 1,
        username: "papa"
    },
    {
        id: 2,  
        username: "akua"
    },
    {
        id: 3,
        username
: "kofi"
    }
]

export const mockGroups = [
    {
        group_id: 1,
        group_name: "Family"
    },
    {
        group_id: 2,
        group_name: "Friends"
    },
    {
        group_id: 3,
        group_name: "Work"
    }
]