import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './Admin.css';

const Admin = () => {
    document.title="Admin Panel";
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    
    const onSubmit = data => {
        const bookData = {
            bookName: data.bookName,
            authorName: data.authorName,
            bookPrice: data.bookPrice,
            imageURL: imageURL,
        };
        const url = `https://secret-plateau-74341.herokuapp.com/addBook`
        
        // console.log(bookData)
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => console.log('Server site response', res));
    };
    const handleUploadBook = event => {
        const imageData = new FormData();
        imageData.set('key', 'f0e5379e7b202c83aeeaa508d9778b70');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="admin-container">
            <div className=" container upload-part">
        <div className="upload-form">
        <form onSubmit={handleSubmit(onSubmit)}>
           <h6>Book Name</h6>
        <input name="bookName" placeholder="Enter Name" className="btn btn-dark"  ref={register} />
        <br/> <br/> 
        <h6>Author Name</h6>
         <input name="authorName" className="btn btn-dark" placeholder="Enter Name" ref={register({ required: true })} />
         <br/> <br/> 
             <h6>Add price</h6>
         <input name="bookPrice" className="btn btn-dark"  placeholder="Enter Price" ref={register({ required: true })} />
         <br/> <br/> 
         <h6>Add Book Cover Photo</h6> 
         <input name="bookPhoto" className="btn btn-secondary" type="file" onChange={handleUploadBook} />
         <br/> <br/> 
        <input type="submit" value="Add Book" className="btn btn-primary" />
         </form>
        </div>
            </div>
        </div>
    );
};

export default Admin;