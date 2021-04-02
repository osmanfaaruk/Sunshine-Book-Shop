import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand header-name" style={{userSelect:'none',color:'#2d3436'}} to="/home">Sunshine Book Shop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse header-component" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/orders">Orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/dashboard">Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Deals</Link>
              </li>
              <li className="nav-item">
               {
                 loggedInUser ?  <Link className="nav-link active" to="/login" >{loggedInUser.name} Login </Link> : <button> LogOut  </button>
               }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;