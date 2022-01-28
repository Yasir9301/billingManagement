import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap'
import add from '../../Assests/addproduct.png'
import { db } from '../../firebase'
import { NavLink } from 'react-router-dom';
import './Dashboard.css'
import { collection, getDocs } from '@firebase/firestore';
import { text } from 'dom-helpers';
const Dashboard = () => {
    const [Products, setProducts] = useState([]);
    const ProductCollectionRef = collection(db, "Product");


    useEffect(() => {
        const getProduct = async () => {
            const getData = await getDocs(ProductCollectionRef);
            setProducts(getData.docs.map((doc) => ({...doc.data() , id:doc.id})));
            console.log();
        };
        getProduct()
    }, [])

    const Logout = ()=>{
        localStorage.clear();
        window.open("/","self");
    }


    return (
        <>
            <div className='container'>
            <h1>Dashboard</h1>
                <button className="col-md-3" onClick={Logout}> Logout</button>
                <div className = "row"> 
                <div className = "col-md-4"> 
                
                <NavLink to="/AddProduct">Add Product</NavLink>                 
                
                </div>
                <div className="col-md-4">
                             
                <NavLink to="/ViewProduct">View Product</NavLink>
                </div>
                <div className="col-md-4">
                             
                             <NavLink to="/main">Main</NavLink>
                             </div>


                </div>
                
    
            </div>
        </>
    );
}

export default Dashboard;
