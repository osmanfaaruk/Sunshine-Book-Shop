import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';
import './Order.css';

const Orders = () => {
    const [orders, setOrders] = useState([])
    document.title="Order";
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:4000/orderList?email='+loggedInUser.email)
        .then(response => response.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            {
                orders.map((order => <OrderList orderList={order}></OrderList>))
            }
        </div>
    );
};

export default Orders;