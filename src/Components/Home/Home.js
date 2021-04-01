import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/books')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])

    return (
        <div className="home-cart">
            {
                books.map(items => <Cart book={items}></Cart>)
            }
        </div>
    );
};

export default Home;