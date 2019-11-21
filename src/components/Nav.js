import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    const totalQuantityState = useSelector(state => state.totalQuantity)

    return(
        <>
            <div className="topnav">
                <img className="navbarLogo" src="https://media.giphy.com/media/1msHd8oSl4tBndkeek/giphy.gif" alt="Glossier" />
                <Link className="elements" to="/"></Link>
                <Link className="elements" to="/products">Products</Link>
                <Link className="elements" to="/basket">Basket {totalQuantityState}</Link>
            </div>
            <div className="lowernav">
                <Link className="elements" to="/LipsProducts">Lips</Link>
                <Link className="elements" to="/EyelinerProducts">Eyeliner</Link>
                <Link className="elements" to="/FoundationProducts">Foundation</Link>
                <Link className="elements" to="/NailPolish">Nail Polish</Link>
            </div>
        </>
    )
    
}

export default Nav;