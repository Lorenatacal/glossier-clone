import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
    return(
        <div>
            <Link to="/"></Link>
            <Link to="/products">Products</Link>
            <Link to="/basket">Basket</Link>
        </div>
    )
    
}

export default Nav;