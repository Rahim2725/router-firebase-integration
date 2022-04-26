import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './header.css'

const Header = () => {
    const {user, singOutWithGoogle} = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/register">Register</Link>
                <span>{user?.displayName }</span>
              {
                    user?.uid ?
                    <a onClick={singOutWithGoogle}>Sing Out</a>
                      : 
                      <Link to="/login">Login</Link>
              }
            </nav>
        </div>
    );
};

export default Header;