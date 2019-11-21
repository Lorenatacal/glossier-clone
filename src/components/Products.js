import React from 'react';
import AllProducts from './AllProducts';
import LipsProducts from './LipsProducts';
import EyelinerProducts from './EyelinerProducts';
import FoundationProducts from './FoundationProducts';
import NailPolish from './NailPolish';
import { useSelector } from 'react-redux'

function Products() {

  return (
    <div className="App">
      <AllProducts />
      <LipsProducts />
      <EyelinerProducts />
      <FoundationProducts />
      <NailPolish />
    </div>
  );
}

export default Products;