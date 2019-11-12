import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import './AllProducts.css'
import { createUpdateData } from '../redux';

function AllProducts() {
    const [data, setData] = React.useState(useSelector(state => state.data));
    const dispatch = useDispatch()

  
    React.useEffect(() => {
      axios
      .get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => {
        setData(response.data)
        dispatch(createUpdateData(response.data))
      });
    }, [])
  
    return (
      <div className="App">
        <h1 className="title">Shop All Products</h1>
        <div className='cards'>
          {data && data.map(({ name, brand, price, image_link, description }) => {
            const obj = {
                  name,
                  price,
                  image_link,
                  brand
                }
            console.log(data, 'data')
            return (      
                <div className='card'>
                  <p>{name}</p>
                  <img src={image_link} alt="Product"/>
                  <p>{brand}</p>
                  <p>{price} £</p>
                  <button onClick={() => {
                    dispatch({type: 'ADD_TO_BASKET', payload: obj})
                  }}
                  >
                    Add To Basket</button>
                </div>
            )
          })}
        </div>
      </div>
    );
  }
  
  export default AllProducts;