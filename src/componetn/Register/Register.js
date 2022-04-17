import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h1>Place Register</h1>
            <form action="">
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email' />
                <br />
                <input type="password" placeholder='Password' />
            </form>
        </div>
    );
};

export default Register;