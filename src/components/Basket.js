import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './AllProducts.css'
import { createUpdateData } from '../redux';

function Basket() {
  const basketState = useSelector(state => state.basketProducts)
  const dispatch = useDispatch()

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
                  <img src={image_link} alt="Product"/>
                  <p>{brand}</p>
                  <p>Quantity: {quantity} </p>
                  <p>Price: {quantity * price} £</p>
                  <button className="button4" onClick={() => {
                    dispatch({ type: 'EDIT_QUANTITY', payload: {id: obj.id, quantity: obj.quantity} })
                  }}>Edit</button>
                  <button className="button4" onClick={() => {
                    dispatch({type: 'DELETE_FROM_BASKET', payload: obj.id})
                  }}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Basket;

// {basketState[1].price}