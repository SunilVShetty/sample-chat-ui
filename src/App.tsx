import React, { useState } from 'react';
import './App.css';
import Login from './login/Login';
import { Route, Routes } from 'react-router-dom';
import ChatContainer from './chat/ChatContainer';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="chat" element={<ChatContainer />} />
            </Routes>
        </div>
    );
}

export default App;
