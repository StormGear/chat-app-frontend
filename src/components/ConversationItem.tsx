
interface ConversationItemProps {
    name: string;
    conversation_id: number;
}

const ConversationItem = ({name, conversation_id}: ConversationItemProps) => {
   return (
           <div className="bg-gray-400 py-2 my-5">
                {name}
            </div>
            
    )
}


export default ConversationItem;