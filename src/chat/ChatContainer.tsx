import React, { useState } from "react";
import './ChatContainer.css'
import ContactCotainer from "./contact/ContactContainer";
import MessageContainer from "./message/MessageContainer";
import { useSearchParams } from "react-router-dom";

function ChatContainer () {
    const [searchParams] = useSearchParams();
    const username = searchParams.get('email') ?? '';
    const [selectedContact, setSelectedContact] = useState('');

    function handleSelect(email: string) {
        setSelectedContact(email);
    }

    return (
        <div>
            <div>
                <div className="app-header">
                    <span className="app-title">Sample Chat App</span>
                </div>
            </div>
            <div className="chat-container">
                <div className="contact-section">
                    <ContactCotainer username={username} handleSelect={handleSelect}/>
                </div>  
                <div className="msg-section">
                    {selectedContact && <MessageContainer selectedContact={selectedContact} loginUsername={username}/>}
                </div>
            </div>
        </div>
    )
}

export default ChatContainer;