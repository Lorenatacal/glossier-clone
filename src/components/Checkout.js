import React from 'react';

function Checkout() {
    return(
        <div className="formConatiner">
            <form className="form">
                <p>Please complete your details bellow:</p>
                <label>
                    <input className="inputForm" type="text" placeholder="Name:"/>
                </label>
                <label>
                    <input className="inputForm" type="text" placeholder="Delivery Address:"/>
                </label>
                <label>
                    <input className="inputForm" id="zip" name="zip" type="number" placeholder="Post Code:"/>
                <br />
                </label>
                
                <label>
                <br />
                    <input className="inputForm" id="zip" name="zip" type="number" placeholder="Credit Card Details:"/>
                </label>
                <label>
                    <input className="inputForm" type="text" placeholder="Expiring Date:"/>
                </label>
                <label>
                    <input className="inputForm" type="text" placeholder="CVC:"/>
                </label>
                    <br />
                <button className="checkoutButton">Submit your order</button>
        </form>
      </div>
    )
    
}

export default Checkout;
