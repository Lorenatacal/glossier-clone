import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link } from "react-router-dom";
import Products from './components/Products';
import Nav from './components/Nav';
import Basket from './components/Basket';
import LipsProducts from './components/LipsProducts';
import EyelinerProducts from './components/EyelinerProducts';
import FoundationProducts from './components/FoundationProducts';
import NailPolish from './components/NailPolish';


function App() {

  return (
      <Router>
        <Nav />
          <Switch>
          <Route path="/LipsProducts">
              <LipsProducts />
            </Route>
          <Route path="/EyelinerProducts">
            <EyelinerProducts />
          </Route>
          <Route path="/FoundationProducts">
            <FoundationProducts />
          </Route>
          <Route path="/NailPolish">
            <NailPolish />
          </Route>
          <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/Basket">
              <Basket />
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
