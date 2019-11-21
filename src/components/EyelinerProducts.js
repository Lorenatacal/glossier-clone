import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import './AllProducts.css'
import { createUpdateData } from '../redux';

function EyelinerProducts() {
    const [data, setData] = React.useState(useSelector(state => state.data));
    const dispatch = useDispatch()

  
    React.useEffect(() => {
      axios
      .get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyeliner')
      .then(response => {
        setData(response.data)
        dispatch(createUpdateData(response.data))
      });
    }, [])
  
    return (
      <div className="App">
        <h1 className="title">Shop Eyeliner Products</h1>
        <div className='cards'>
          {data && data.map(({ id, name, brand, price, image_link, description }) => {
            const obj = {
                  id,
                  name,
                  price,
                  image_link,
                  brand,
                  quantity: 1
                }
            return (      
                <div className='card'>
                  <p className="productName">{name}</p>
                  <img width="158px" height="184px" src={image_link} alt="Product"/>
                  <p>{brand}</p>
                  <p>{price} £</p>
                  <button onClick={() => {
                    dispatch({type: 'ADD_TO_BASKET', payload: obj})
                    dispatch({type: 'INCREASE_NAV_BAR'})
                    dispatch({type: 'ADD_TOTAL_PRICE' })
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
  
  export default EyelinerProducts;