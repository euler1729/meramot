import { useState, useRef, useEffect } from "react";
import sendIcon from "./res/sendIcon.svg";
import CloseIcon from '@mui/icons-material/Close';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import "./Chat.css";

const generateMessage = () => {
    const words = ["The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"];
    const text = [];
    let x = 7;
    while (--x) text.push(words[Math.floor(Math.random() * words.length)]);
    return text.join(" ");
}

function Chat() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleChat() {
        setIsOpen(!isOpen);
    }
    const messageEl = useRef(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, [])

    useEffect(() => {
        const generateDummyMessage = () => {
            setInterval(() => {
                setMessages(prevMsg => [...prevMsg, generateMessage()]);
            }, 10000);
        }
        generateDummyMessage();
    }, []);


    return (
        <div className="popup-chat">
            <div className={`chat-modal ${isOpen ? 'open' : ''}`}>
                <div className="head">
                    <h3>Expart</h3>
                    <CloseIcon onClick={toggleChat} style={{ cursor: "pointer" }} />
                </div>
                <div className="messages" ref={messageEl}>
                    {messages.map((m, i) =>
                        <div key={i} className={`msg${i % 2 !== 0 ? ' dark' : ''}`}>
                            {m}
                        </div>)}
                </div>
                <div className="footer">
                    <input type="text" placeholder="Type here..." />
                    <img alt="send" src={sendIcon} />
                </div>
            </div>
            <button id="floating-button" onClick={toggleChat}>
                <ChatBubbleIcon />
            </button>
        </div>
    );
}

export default Chat;
