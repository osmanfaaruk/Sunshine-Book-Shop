import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';
import './Order.css';

const Orders = () => {
    const [orders, setOrders] = useState([])
    document.title="Order";
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://secret-plateau-74341.herokuapp.com/orderList?email='+loggedInUser.email)
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