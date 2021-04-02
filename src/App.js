import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Admin from "./Components/Admin/Admin";
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Checkout from "./Components/Checkout/Checkout";
import Deals from "./Components/Deals/Deals";
import Error from "./Components/Error/Error";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from './Components/Login/Login';
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute.js/PrivateRoute";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/dashboard">
           <AdminDashboard/>
          </PrivateRoute>
          <Route path="/deals">
           <Deals/>
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <PrivateRoute path="/orders">
           <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:bookId">
            <Checkout/>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
           <Error/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
