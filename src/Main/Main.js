import React from 'react'
import { Form, Button, Table } from 'react-bootstrap'
import { useState, createRef } from 'react';

export default function AddProduct() {
    // state
    let initialValue = [];
    const [products, setProducts] = useState(initialValue);

    const [product, setProduct] = useState({
        product_name: "",
        price: "",
        qty: "",
    })

    // ref
    const formData = createRef();
    // add product handler method

    //

    //
    //
    //
    //
    let name, value;
    const getProductData = (event) => {
        name = event.target.name;
        value = event.target.value;
       // console.log(setProducts);
       
        setProduct({ ...product, [name]: value });
    }

    const postData = (event) => {
        event.preventDefault();
        const { product_name, price, qty } = product;
        
        // const res =  fetch("https://billingsystem-de3b5-default-rtdb.firebaseio.com/billing.json", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         product_name,
        //         price,
        //         qty,
        //     }

        //     )
        // });
    }
    //
    const add = (event) => {
        event.preventDefault();
        const newProduct = {
            product_name: formData.current.product_name.value,
            price: Number(formData.current.price.value),
            qty: Number(formData.current.qty.value),
            total: formData.current.price.value * formData.current.qty.value
        }
        // add a new product inside product array
        setProducts([...products, newProduct]);
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
    return (
        <>
            <section className='mainBgImg'>
                <div className='mainDiv'>
                    <h1>BILLING SYSTEM</h1>
                    <Form onSubmit={add} ref={formData}>
                        <Form.Group className="mb-3" controlId="formBasicProductName">
                            <Form.Label>Product Name:</Form.Label>
                            <Form.Control onChange={getProductData} value={product.name} type="text" placeholder="Enter Product Name" name="product_name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control onChange={getProductData} value={product.price} type="number" placeholder="Enter Price in Rupees" name="price" />
                        </Form.Group>

                        <Button onClick={postData} className='addBtn' variant="primary" type="submit">
                            Add to Inventory
                        </Button>
                    </Form>

                            </div>
            </section>
        </>
    );
}
