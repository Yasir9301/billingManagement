import React, { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { NavLink } from 'react-router-dom';

import { auth } from '../../firebase';
const Login = () => {
    const [LoginEmail, setUserId] = useState("");
    const [Loginpassword, setPassword] = useState("");
    const [userIdClass, setUserIdClass] = useState("");
    const [passwordClass, setPasswordClass] = useState("");


    const RegisterUser = (e) => {
        e.preventDefault();
        try {
            window.open("/Register","self");

        } catch (error) {
            console.log(error.message)
        }




    }



    const submitForm = (e) => {
        e.preventDefault();
        try {

            signInWithEmailAndPassword(auth, LoginEmail, Loginpassword)
                .then((res) => {
                    alert("Login successful");
                    // localStorage.setItem("Email",LoginEmail);
                    window.open("/Dashboard","self");
                })
                //console.log(user);

        } catch (error) {
            console.log(error.message)
        }




    }

    return (
        <>
            <div className='bgImg'>
                <h1 className='position'>BILLING SYSTEM</h1>
                <div className='mainBody'>
                    <h1>LOGIN</h1>
                    <input type={"text"} className={userIdClass} autoComplete='off' value={LoginEmail} onChange={e => setUserId(e.target.value)} /><br />
                    <input type={"password"} className={passwordClass} autoComplete='off' value={Loginpassword} onChange={e => setPassword(e.target.value)} />
                    <div className='btnDiv'>
                        <button className='btnhover' onClick={RegisterUser}>Register</button>
                        <button onClick={submitForm} className='btnhover'>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login
