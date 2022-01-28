import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap'

import { db } from '../../firebase'
//import { auth } from '../../firebase';
import { collection, getDocs } from '@firebase/firestore';
const ViewProduct = () => {
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



    return (
        <>
            <div className='bgImg'>
                <h1 className='position'>BILLING SYSTEM</h1>
                <div className=''>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Product Name</th>
                                <th>Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                    Products.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Price}</td>
                                        
                                     
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default ViewProduct;
