import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link } from "react-router-dom";
import Products from './components/Products';
import Nav from './components/Nav';
import Basket from './components/Basket'


function App() {

  return (
      <Router>
        <Nav />
          <Switch>
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
