import { useState } from "react";
import type { ChatData } from "../pages/Home";
import { useAuth } from "../contexts/AuthContext";


const MessageInput: React.FC<{selectedChat: ChatData | null}> = ({selectedChat})=> {
    const [text, setText] = useState('');
    const { user } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            handleSendMessage(selectedChat);
        }
    };

    const handleSendMessage = async (selectedChat : ChatData | null) => {
            try {
              const response = await fetch(`http://localhost:8080/chat/messages/send`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  "conversationId" : selectedChat?.data.conversation_id,
                  "senderId" : user?.id,
                  "content" : text
                }),
              });
              if (!response.ok) {
                const errorInfo = await response.json();
                throw new Error(errorInfo || 'Login failed');
              }
              const data = await response.json();
              console.log('Message successful: ', data);
                if (data.success) {
                  console.log("Messages sent successfully!");
                  setText("");
                  // load the messages
                } else {
                    alert("Message sending failed, please try again");
                }
            } catch (error) {
              console.error('Message sending failed', error);
            }
  }

return (
    <form onSubmit={handleSubmit} className="flex p-5">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="shadow appearance-none border rounded flex-1 p-2.5 mr-2.5 focus:outline"
      />
      <button type="submit"className="py-2.5 px-3 cursor-pointer border border-black rounded">Send</button>
    </form>
  );
}

export default MessageInput;