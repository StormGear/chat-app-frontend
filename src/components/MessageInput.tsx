import { useState } from "react";


const MessageInput = () => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            //todo: send the message
        }
    };

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