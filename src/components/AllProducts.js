import React from 'react';
import axios from 'axios';
import './AllProducts.css'

function AllProducts() {
    const [data, setData] = React.useState();
  
    React.useEffect(() => {
      axios
      .get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => {
        setData(response.data)
      });
    }, [])
  
    return (
      <div className="App">
        <h1 className="title">Shop All Products</h1>
        <div className='cards'>
          {data && data.map(({ name, brand, price, image_link, description }) => {
            console.log(data, 'data')
            return (
                <div className='card'>
                  <p>{name}</p>
                  <img src={image_link} alt="Book"/>
                  <p>{brand}</p>
                  <p>{price} £</p>
                  <button>Add To Basket</button>
                </div>
            )
          })}
        </div>
      </div>
    );
  }
  
  export default AllProducts;