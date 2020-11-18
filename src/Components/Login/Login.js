import Navbar from '../Navbar/Navbar';
import React, { useContext } from 'react';
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const Login = () => {
    const signInLogo = [{
        googleLogo: "https://i.ibb.co/92DQtQV/google.png"
    }]

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const userInfo = {
                name: displayName,
                email: email,
                image: photoURL
            }
            setLoggedInUser(userInfo);
            alert("Logged in successfully");
        }).catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
        });
    }
    return (
        <div>
            <Navbar></Navbar>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <div class="mx-auto d-block" style={{ height: '160px', width: '370px', border: '1px solid grey', padding: '100px', marginTop: "10px" }}>
                    <h2 style={{ textAlign: "center" }}>Login With </h2>
                    <div class="mx-auto d-block" onClick={handleGoogleSignIn} style={{ height: '50px', width: '400x', borderRadius: '40px', border: '1px solid black', textAlign: 'center', padding: '8px', cursor: 'pointer', marginLeft: '50px', marginTop: "10px" }}> <img style={{ borderRadius: "50%", height: '30px', width: '30px' }} src={signInLogo[0].googleLogo} alt="" /> Continue with Google</div>
                    <p style={{ textAlign: "center", padding: "10px" }}>Don't have an account? <a href="#">Create an account</a> </p>
                </div>
            </Grid>
        </div>
    );
};

export default Login;