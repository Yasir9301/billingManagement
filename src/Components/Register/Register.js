import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
const Register = () => {
    const [RegisterEmail, setUserId] = useState("");
    const [Registerpassword, setPassword] = useState("");
    const [userIdClass, setUserIdClass] = useState("");
    const [passwordClass, setPasswordClass] = useState("");



    const submitForm = (e) => {
        e.preventDefault();
        try {

            createUserWithEmailAndPassword(auth, RegisterEmail, Registerpassword)
                .then((res) => {
                    alert("Registration successful");
                    localStorage.setItem("Email", RegisterEmail);
                    window.open("/Dashboard", "self");
                })
        } catch (error) {
            console.log(error.message)
        }




    }

    return (
        <>
            <div className='bgImg'>
                <h1 className='position'>BILLING SYSTEM</h1>
                <div className='mainBody'>
                    <h1>REGISTER</h1>
                    <input type={"text"} className={userIdClass} autoComplete='off' value={RegisterEmail} onChange={e => setUserId(e.target.value)} /><br />
                    <input type={"password"} className={passwordClass} autoComplete='off' value={Registerpassword} onChange={e => setPassword(e.target.value)} />
                    <div className='btnDiv'>
                        <button className='btnhover' onClick={submitForm} >Register</button>
                        {/* // <button onClick={submitForm} className='btnhover'>Login</button> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register
