import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css'
import image from "./logo1.png";
const Login = () => {
    const signIn = () => {
        //sign in
        auth.signInWithPopup(provider).catch((error)=> alert(error.message));
    };

return (
    <div className='login'>
        <div className="login_logo">
            <img src={image} alt="" />
        </div>
        <Button onClick={signIn}>Sign In</Button>
    </div>
);
};

export default Login;