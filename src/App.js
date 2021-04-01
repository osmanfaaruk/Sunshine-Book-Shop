import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Checkout/Checkout";
import Deals from "./Components/Deals/Deals";
import Error from "./Components/Error/Error";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";


function App() {
  return (
    
      <Router>
      <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/orders">
           <Orders/>
          </Route>
          <Route path="/admin">
           <Admin/>
          </Route>
          <Route path="/deals">
           <Deals/>
          </Route>
          <Route path="/checkout/:bookId">
            <Checkout/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
           <Error/>
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
