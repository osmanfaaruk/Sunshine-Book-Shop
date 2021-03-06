import React, { useContext } from 'react';
// import * as firebase from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Login.css';



const Login = () => {
    document.title="Login";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);

        }).catch(function(error) {
            console.log(error);
          });
    }

    return (
        <div>
            <div className="login-btn"> 
            <Button   className="btn" variant="contained" onClick={handleGoogleSignIn} color="secondary">Sign In with Google
            </Button></div>
        </div>
    );
};

export default Login;