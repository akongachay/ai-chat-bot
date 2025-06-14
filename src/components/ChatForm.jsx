import {useRef} from "react";
const ChatForm=({chatHistory,setChatHistory,generateBotResponse})=>{
    const inputRef=useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage=inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value="";

        //Update chat history with the user 's message
        setChatHistory((history)=>[...history,{role:"user",text:userMessage}]);

        //Delay 600ms before showing "Thinking... " and generating response
        setTimeout(() => {
            //Add a "Thinking..." placeholderrrrr for the bot's response
            setChatHistory((history) => [...history, {role: "model", text:"Thinking..."}]);
             
            //Call the function to generate the bot's response
            generateBotResponse([...chatHistory, {role: "user",text: "Message"}]);
        },600);
    };
    return(
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input type="text" ref={inputRef} placeholder="Message..." required className="message-input" />
            <button className="material-symbols-outlined">keyboard_arrow_down</button>
        </form>
    )
}
export default ChatForm;