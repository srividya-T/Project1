import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

const Header = ({cartItems}) => {
  return (
    <div>
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">
                        Mobiles Shop
                    </Link>
                </h1>
            </div>
            <div className="hearder-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>                    
                </ul>
                <ul>
                    <li>
                        <Link to="/signup">Signup</Link>

                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                            <i className="fas fa-shopping-cart"/>
                            <span className="cart-length">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header