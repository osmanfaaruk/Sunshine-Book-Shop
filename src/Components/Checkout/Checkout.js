import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Checkout.css';

const Checkout = () => {
    const {bookId} = useParams();
    const [checkoutBook, setCheckoutBook] = useState({});


    useEffect(()=>{
        const url = `http://localhost:4000/books/${bookId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCheckoutBook(data))
    },[bookId])
    return (
        <div className="container">
            <h1 style={{textAlign:'center', marginTop:'10px'}}>Checkout Form <span style={{color:'#ff5252'}}>SUNSHINE</span></h1>
        <div className="checkout-bar">
        <div className="card" style={{width: "18rem"}}>
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

            <button type="button" class="btn btn-primary">Checkout</button>

        </div>
        </div>
        </div>
    );
};

export default Checkout;