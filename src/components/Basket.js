import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './AllProducts.css'
import { createUpdateData } from '../redux';

function Basket() {
  const basketState = useSelector(state => state.basketProducts)
  console.log(basketState);
  return (
    <div className="App">
      <h1>Basket:</h1>
      <div className="cards">
        {
          basketState.map(({ name, price, image_link, brand}) => {
            return (
                <div className='card'>
                  <p>{name}</p>
                  <img src={image_link} alt="Product"/>
                  <p>{brand}</p>
                  <p>{price} £</p>
                  <button>Edit</button>
                  <button>Remove</button>
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