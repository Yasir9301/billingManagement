import React, { useState , useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap'

import {db} from '../../firebase'
import { auth } from '../../firebase';
import { collection, getDocs , addDoc } from '@firebase/firestore';


const AddProduct = () => {
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const ProductCollectionRef=collection(db , "Product");


    // useEffect(() =>{
    //     const getProduct = async () => {
    //          const getData= await getDocs(ProductCollectionRef);
    //          setProducts(getData.docs.map((doc) => ({...doc.data() , id:doc.id})));
    //     };
    //     getProduct()
    // }, [])

    const postData = async () =>{

        await addDoc(ProductCollectionRef,{Name:newName,Price:newPrice});
        alert("Product Added");
        
    };

    return (
        <>
            <div className='bgImg'>
                <h1 className='position'>BILLING SYSTEM</h1>
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                 <div className='mainDiv'>
                          <Form.Group className="mb-3" controlId="formBasicProductName">
                            <Form.Label>Product Name:</Form.Label>
                            <br></br>
                        <input type="text" 
                        onChange={(event) => {setNewName(event.target.value)}}
                        
                        ></input>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price:</Form.Label>
                            <br></br>
                        <input type="number" 
                        onChange={(event) => {setNewPrice(event.target.value)}}
                        ></input>
                        </Form.Group>

                        <Button onClick={postData} className='addBtn' variant="primary">
                            Add Product
                        </Button>
                 
                </div>
            </div>
        </>
    );
}

export default AddProduct;
