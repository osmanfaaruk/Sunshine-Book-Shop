import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const {imageURL, authorName, bookPrice, bookName, _id } = props.book;
    return (
        
        <div className="card book-cart" style={{width: '18rem'}}>
         <div className="cart-img">
         <img src={imageURL} className="card-img-top" alt=""/>
         </div>
         <div className="card-body">
        <div>
        <h5 className="card-title">{bookName}</h5>
        <p>{authorName}</p>
        </div>
        <div className="cost-part">
        <h4> ${bookPrice}</h4>
        <Link className="btn btn-primary buy-btn" to={`/checkout/${_id}`}>Buy Now</Link>
        </div>
        </div>
        </div>

    );
};

export default Cart;