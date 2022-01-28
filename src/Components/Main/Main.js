import React from 'react'
import { Form, Button, Table } from 'react-bootstrap'
import { useState, createRef , useEffect } from 'react';
import { db } from '../../firebase'
//import { auth } from '../../firebase';
import { collection, getDocs } from '@firebase/firestore';

export default function AddProduct() {
    // state
    let initialValue = [];
    const [products, setProducts] = useState(initialValue);
    const [Product, setProduct] = useState([]);
    const ProductCollectionRef = collection(db, "Product");


    useEffect(() => {
        const getProduct = async () => {
            const getData = await getDocs(ProductCollectionRef);
            setProduct(getData.docs.map((doc) => ({...doc.data() , id:doc.id})));
            console.log();
        };
        getProduct()
    }, [])

    
    // ref
    const formData = createRef();
    // add product handler method

    var totalPrice=0;
    var arr=[];
    const add = (event) => {
        event.preventDefault();
    
        const newProduct = {
            product_name: formData.current.product_name.value,
            price: Number(formData.current.price.value),
            qty: Number(formData.current.qty.value),
            total: formData.current.price.value * formData.current.qty.value,
             
        }
        // add a new product inside product array
        setProducts([...products, newProduct]);
        arr.push(newProduct);
        console.log(arr);
        if(localStorage.getItem(`Data`) == null){

            localStorage.setItem(`Data`,'[]');
        }
        var old_data=JSON.parse(localStorage.getItem('Data'));
        old_data.push(newProduct);

        localStorage.setItem('Data',JSON.stringify(old_data));
        
    }
    // increment qty value by 1
    const increQty = (event) => {
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        // const total = formData.current.price.value * formData.current.qty.value;
        products[indexOfArray].total = products[indexOfArray].price * products[indexOfArray].qty;
        setProducts([...products]);
    }
    // decrement qty value by 1
    const decreQty = (event) => {
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        products[indexOfArray].total = products[indexOfArray].total - products[indexOfArray].price;
        setProducts([...products]);
    }

    const DataTransfer = (props) => {
        const tab=document.getElementById("tableId").value;
        console.log(props);
        window.open("/invoice","self")
    }


    return (
        <>
            <section className='mainBgImg'>
                <div className='mainDiv'>
                    <h1>BILLING SYSTEM</h1>
                    <Form onSubmit={add} ref={formData}>
                        <Form.Group className="mb-3" controlId="formBasicProductName">
                            <Form.Label>Product Name:</Form.Label>
                            <br/>
                        <select className="form-control" name="product_name">
                           {Product.map((item, index) => {
                                    return <option key={index}>
                                      {item.Name}   </option>
                                        })
                                    }

                        </select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price:</Form.Label>
                            
                            <Form.Control type="number" placeholder="Enter Price in Rupees" name="price" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicQty">
                            <Form.Label>Quantity:</Form.Label>
                            <Form.Control type="number" placeholder="How many: Quantity" name="qty" />
                        </Form.Group>
                        <Button className='addBtn' variant="primary" type="submit">
                            Add to Inventory
                        </Button>
                    </Form>

                    <Table striped bordered hover variant="dark" id="tableId" >
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total Price</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.total}</td>
                                        <td>
                                            <Button variant='success' onClick={event => increQty(event)} value={index}>+</Button>
                                            <Button variant='danger' onClick={event => decreQty(event)} value={index}>-</Button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                    
                    <Button className='floataRight' variant='secondary' onClick={DataTransfer}>Generate Invoice</Button>
                </div>
            </section>
        </>
    );
}
