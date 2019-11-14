import React from "react";
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return(
        <div className="topnav">
            <img className="navbarLogo" src="https://png2.cleanpng.com/sh/9335e2e5be1916dc536449f854b7fc05/L0KzQYm3V8A4N51sgJH0aYP2gLBuTfxwb5CyeuRqbnSwfbLCgvVtdJpzfZ8AYkSzdobrUMFkQGI4SJCCNUG3Roe3VsE2O2EAUKUDOEi0QYeBTwBvbz==/kisspng-logo-brand-maybelline-5b40f5d01c8130.7514660615309838881168.png" alt="Maybelline" />
            <Link className="elements" to="/"></Link>
            <Link className="elements" to="/products">Products</Link>
            <Link className="elements" to="/basket">Basket</Link>
        </div>
    )
    
}

export default Nav;