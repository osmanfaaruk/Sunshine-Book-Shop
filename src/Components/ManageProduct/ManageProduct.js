import React, { useEffect, useState } from 'react';
import './ManageProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const ManageProduct = () => {

    const [manageBooks, setManageBooks] = useState([]);
    const [manageBook, setManageBook] = useState([]);

    const handleDeleteBook = id =>{
        fetch(`https://secret-plateau-74341.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => setManageBook(data))
    }
// onClick={()=> handleDeleteBook(book._id)}
    useEffect(()=>{
        fetch('https://secret-plateau-74341.herokuapp.com/books')
        .then(res=> res.json())
        .then(data=> setManageBooks(data))
    },[manageBooks])
    return (
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Book Name</th>
      <th scope="col">Author Name</th>
      <th scope="col">Book Price</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
            {
                manageBooks.map((list)=> (
                    <tr>
                 {/* <th scope="row">1</th> */}
                <td>{list.bookName}</td>
                <td>{list.authorName}</td>
                <td>${list.bookPrice}</td>
                <td><button className="btn btn-success">
                <FontAwesomeIcon icon={faEdit} />
                    </button></td>
                <td><button className="btn btn-danger" onClick={()=> handleDeleteBook(list._id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                </tr>
                ))
            }
  </tbody>
</table>
    );
};

export default ManageProduct;