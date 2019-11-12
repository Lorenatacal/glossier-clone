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
          basketState.map(({ id, name, price, image_link, brand}) => {
            const obj = {
              id,
              name,
              price,
              image_link,
              brand
            }
            return (
                <div className='card'>
                  <p className="productName">{name}</p>
                  <img src={image_link} alt="Product"/>
                  <p>{brand}</p>
                  <p>Quantity 1 </p>
                  <p>Price: {price} £</p>
                  <button>Edit</button>
                  <button onClick={() => {
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