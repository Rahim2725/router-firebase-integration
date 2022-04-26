import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Plase login </h1>
            <input type="email" name="email" id="" placeholder='Email' />
            <br />
            <input type="password" name="password" id="" placeholder='Password' />
            <br />
            <input type="button" value="Login" />
        </div>
    );
};

export default Login;