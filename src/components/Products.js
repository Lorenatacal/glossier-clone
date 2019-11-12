import React from 'react';
import AllProducts from './AllProducts';
import { useSelector } from 'react-redux'

function Products() {
  return (
    <div className="App">
      <AllProducts />
    </div>
  );
}

export default Products;