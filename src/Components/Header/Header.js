import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand header-name" style={{userSelect:'none',color:'#2d3436'}} to="/home">Sunshine Book Shop</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse header-component" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/orders">Orders</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/admin">Admin</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/deals">Deals</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/login" >Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;