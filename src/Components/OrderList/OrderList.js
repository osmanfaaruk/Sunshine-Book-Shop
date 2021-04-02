import React from 'react';
import './OrderList.css';

const OrderList = (props) => {
    const {imageURL, authorName, bookName,bookPrice, date, email, name} = props.orderList;

   
    return (
           <div className="card mb-3 container orderList-container " >
         <div className="row g-0">
        <div className="col-md-3 order-img">
        <img src={imageURL} alt=""/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h4 className="card-title">{bookName}</h4>
        <p className="card-text">Author of this book: {authorName}</p>
        <br/>
        <h5>${bookPrice}</h5>
        <h6>Book Ordered at: {date}</h6>
        <p>Check your mail for more information about ordered book <br/> {email}</p>
        <button type="button" class="btn btn-danger">Cancel Order</button>
        </div>
        </div>
        </div>
       </div>
    );
};

export default OrderList;