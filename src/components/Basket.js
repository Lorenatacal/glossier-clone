import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './AllProducts.css'
import Checkout from './Checkout'

function Basket() {
  const basketState = useSelector(state => state.basketProducts);
  const totalPriceState = useSelector(state => state.totalPrice)
  const dispatch = useDispatch()
  const [component, setComponent] = React.useState(false)

  return (
    <div className="App">
      <h1 className ="title">Basket:</h1>
      <div className="cards">
        {
          basketState.map(({ id, name, price, image_link, brand, quantity}) => {
            const obj = {
              id,
              name,
              price,
              image_link,
              brand,
              quantity
            }
            return (
                <div className='card'>
                  <p className="productName">{name}</p>
                  <img width="158px" height="184px" src={image_link} alt="Product"/>
                  <p>{brand}</p>
                  <p>Quantity: {quantity} </p>
                  <p>Price: {quantity * price} £</p>
                  <div className="button4">
                    <button className="button3" onClick={() => {
                      if(quantity > 1) {
                        dispatch({ type: 'DECREASE_QUANTITY', payload: {id: obj.id, quantity: obj.quantity} })
                        dispatch({ type: 'INCREASE_NAV_BAR', payload: {id: obj.id, quantity: obj.quantity} })
                        dispatch({type: 'ADD_TOTAL_PRICE' })
                      } else {
                        dispatch({type: 'DELETE_FROM_BASKET', payload: obj.id})
                        dispatch({ type: 'INCREASE_NAV_BAR', payload: {id: obj.id, quantity: obj.quantity} })
                        dispatch({type: 'ADD_TOTAL_PRICE' })
                      }
                    }}>-</button>
                    <p className="edit">{quantity}</p>
                    <button className="button3" onClick={() => {
                      dispatch({ type: 'INCREASE_QUANTITY', payload: {id: obj.id, quantity: obj.quantity} })
                      dispatch({type: 'INCREASE_NAV_BAR'})
                      dispatch({type: 'ADD_TOTAL_PRICE' })
                    }}>+</button>
                  </div>
                  <button className="button4" onClick={() => {
                    dispatch({type: 'DELETE_FROM_BASKET', payload: obj.id})
                    dispatch({type: 'INCREASE_NAV_BAR', payload: {id: obj.id, quantity: obj.quantity}})
                    dispatch({type: 'ADD_TOTAL_PRICE' })
                  }}>Remove</button>
              </div>
            )
          })
        }
      </div>
      <p className ="basket">Basket Total: {totalPriceState}</p>
      <div className="buttonDiv">
        <button className="checkoutButton" onClick={() => {
          setComponent(true)
        }}>Checkout</button>
      </div>

        <div>
          {
            (component)
              ? 
                <>
                  <Checkout />
                </>
              : null
          }
        </div>

    </div>

    


  );

  
  
}

export default Basket;

// {basketState[1].price}