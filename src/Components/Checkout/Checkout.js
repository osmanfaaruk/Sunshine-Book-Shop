import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Checkout.css';
import {UserContext} from '../../App';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { getTime } from 'date-fns/esm';
import { Link } from 'react-router-dom';


const Checkout = () => {
    document.title="Checkout";
    const {bookId} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [checkoutBook, setCheckoutBook] = useState({});
    
    const handleCheckout = () => {
        const newCheckout = ({
            name: loggedInUser.name,
            email: loggedInUser.email,
            bookName: checkoutBook.bookName,
            bookPrice:  checkoutBook.bookPrice,
            authorName: checkoutBook.authorName,
            imageURL: checkoutBook.imageURL,
            date: (new Date().toDateString("dddd, mmmm, yyyy"))
        })
        fetch('https://secret-plateau-74341.herokuapp.com/orders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCheckout)
        })
        .then(res => res.json())
        .then(data=> console.log(data))
    }


    useEffect(()=>{
        const url = `https://secret-plateau-74341.herokuapp.com/books/${bookId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCheckoutBook(data))
    },[bookId])
    return (
        <div className="container">
            <h1 style={{textAlign:'center', marginTop:'10px'}}>Checkout Form <span style={{color:'#ff5252'}}>SUNSHINE</span></h1>
        <div className="checkout-bar">
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: "18rem"}}>
        <img src={checkoutBook.imageURL} className="card-img-top" alt=""/>
        </div>
        <div className="checkout-details">
           <h3>{checkoutBook.bookName}</h3>
            <h6> Author of this book: {checkoutBook.authorName}</h6>
            <br/>
            <br/>
            <h3>Price: ${checkoutBook.bookPrice}</h3>
            <h4>Quantity: 1 </h4>
            <br/> 
        <br/>
        <Link to="/orders">
        <button onClick={handleCheckout} type="button" class="btn btn-primary">Checkout </button>
        </Link>

        </div>
        </div>
        </div>
    );
};

export default Checkout;