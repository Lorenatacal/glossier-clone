import React from "react";
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return(
        <div className="topnav">
            <Link className="elements" to="/"></Link>
            <Link className="elements" to="/products">Products</Link>
            <Link className="elements" to="/basket">Basket</Link>
        </div>
    )
    
}

export default Nav;