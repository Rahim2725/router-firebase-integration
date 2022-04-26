import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {singInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>Plase login </h1>
            <input type="email" name="email" id="" placeholder='Email' />
            <br />
            <input type="password" name="password" id="" placeholder='Password' />
            <br />
            <input type="button" value="Login" />
            <br />
            <input onClick={singInWithGoogle}  type="button" value="Google Sing in" />
        </div>
    );
};

export default Login;