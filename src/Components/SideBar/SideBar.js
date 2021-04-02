import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTasks, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    return (
        <div>
           <div className="selection-part"> 
           <br/>
           <br/>
            <div>
                <Link style={{textDecoration:"none", color:"white"}} to="/dashboard/manageBooks">
                <button class="btn btn-secondary" type="button">
                <FontAwesomeIcon icon={faTasks} /> {" "}
                Manage Books</button>
                </Link>
           <br/>
           <br/>
               <Link style={{textDecoration:"none", color:"white"}} to="/dashboard/admin">
                <button class="btn btn-secondary" type="button">
                <FontAwesomeIcon icon={faPlus} />{" "}Add Books</button>
                </Link>
           <br/>
           <br/>
               <Link style={{textDecoration:"none", color:"white"}} to="/dashboard/manageBooks">
                <button class="btn btn-secondary" type="button">
                <FontAwesomeIcon icon={faEdit} />{" "}
                Edit Books</button>
                </Link>
            </div>
           </div>
        </div>
    );
};

export default SideBar;