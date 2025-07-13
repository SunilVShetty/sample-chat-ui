import React, { useEffect, useState } from "react";
import './Message.css';

interface MessagesProps {
    loginUsername: string
    conversesionsKey: string
}
const Messages: React.FC<MessagesProps> = ({loginUsername, conversesionsKey}) => {
    const [messages, setMessages] = useState<any>([]);

    function fetchMsgs() {
        setMessages([]);
        const storedMsgs = localStorage.getItem('messages');
        let msgs: any = storedMsgs ? JSON.parse(storedMsgs) : {};
        if (msgs[conversesionsKey]?.message) {
            msgs[conversesionsKey]?.message.map((msg: any) => {
                setMessages((prevState: any) => [
                    ...prevState,
                    msg
                ])
            })
        }
    }

    useEffect(() => {
        fetchMsgs();
        window.addEventListener("storage", fetchMsgs);
    }, [])

    return (
        <div>
            {messages.map((msg: any, index: number) => {
                return <div key={index} style={{padding: '1rem'}}
                    className={`${msg.from == loginUsername ? 'login-user-msg' : ''}`}
                    >
                        <div className="message-item">
                            <span className="msg">{msg.msg}</span>
                            <div className="msg-date-time">{msg?.dateTime}</div>
                        </div>
                </div>
            })}
        </div>
    )
}

export default Messages;