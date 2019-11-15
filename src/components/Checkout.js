import React from 'react';

function Checkout() {
console.log('some')
    return(
        <form className="checkoutButton">
            <p>Name:</p>
                <input
                    type="text"
                />
            <p>Delivery Address</p>
            <input
                    type="text"
            />
            <p>Credit Card Details:</p>
                <input
                    type="text"
                />
            <p>Expiring Date:</p>
                <input
                    type="text"
            />
            <p>CVC:</p>
                <input
                    type="text"
                />
                <br />
            <button className="checkoutButton">Submit your order</button>
      </form>
    )
    
}

export default Checkout;
