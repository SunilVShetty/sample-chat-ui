import React, { HTMLElementType, useState } from 'react';
import './Login.css';
import { createSearchParams, Navigate, useNavigate } from 'react-router-dom';
import { User, Users } from '../static-data/users';
const Login = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function login() {
        let validateUser = Users.find(user => user.email == username);
        if (validateUser) {
            if(validateUser.password == password) {
                navigate({
                    pathname: "/chat",
                    search: createSearchParams({
                        email: username
                    }).toString()
                });
            } else {
                setErrorMsg('Invalid Password')
            }
        } else {
            setErrorMsg('Invalid User')
        }
    }   

    return (
        <div className='login-container'>
            <div className='header'>Login</div>
            <div className='login-fields'>
                <div className='error-msg' style={{textAlign: 'center'}}>{errorMsg}</div>
                <div className='field'>
                    <div className='label'>User Name</div>
                    <input id='username' type='text' aria-label='username' placeholder='User Name' value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className='field'>
                    <div className='label'>Password</div>
                    <input id='password' type='password' aria-label='password' placeholder='Password' value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className='login-actions'>
                <button className='login-btn' type='submit' onClick={() => login()} disabled={!username || !password}>Login</button>
            </div>
        </div>
    )
}

export default Login;