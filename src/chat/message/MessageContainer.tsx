import { MessagePort } from 'node:worker_threads';
import React, { useEffect, useState } from 'react';
import Messages from './Messages';
import { timeStamp } from 'node:console';

interface MessageContainerProps {
    selectedContact: string
    loginUsername: string
}

// interface  {
//     username: string;
//     messages: 
// }

const MessageContainer: React.FC<MessageContainerProps> = ({loginUsername, selectedContact}) => {
    const [message, setMessage] = useState<string>('');
    const [refresh, setRefresh] = useState<boolean>(true);
    const [conversesionsKey, setConversionsKey] = useState<string>('');

    function sendMessage () {
        const storedMessages = localStorage.getItem('messages');
        let messages: any = storedMessages ? JSON.parse(storedMessages) : {};
        if (!messages[conversesionsKey]) {
            messages = {...messages, [conversesionsKey] : {message : []}}
        }

        messages[conversesionsKey].message = [
            ...messages[conversesionsKey]?.message,
            {
                msg: message,
                from: loginUsername,
                to: selectedContact,
                dateTime: new Date()
            }
        ]

        localStorage.setItem('messages', JSON.stringify(messages));
        setMessage('');
        setRefresh(false);
        setTimeout(() => {
            setRefresh(true);
        }, 100)
    }

    useEffect(() => {
        const storedMessages = localStorage.getItem('messages');
        let messages: any = storedMessages ? JSON.parse(storedMessages) : {};
        setConversionsKey(messages[`${loginUsername}&${selectedContact}`] ? `${loginUsername}&${selectedContact}` :
            (messages[`${selectedContact}&${loginUsername}`] ? `${selectedContact}&${loginUsername}` : `${loginUsername}&${selectedContact}`));
    }, [])

    return (
        <div>
            <div style={{height: '84vh', overflow: 'scroll'}}>
                {conversesionsKey && refresh && <Messages loginUsername={loginUsername} conversesionsKey={conversesionsKey}/>}
            </div>
            <div style={{display: 'flex'}}>  
                <input type='text' value={message} onChange={(event) => setMessage(event.target.value)}/>
                <button type='submit'  onClick={() => sendMessage()}>Send</button>
            </div>            
        </div>
    )
}

export default MessageContainer;