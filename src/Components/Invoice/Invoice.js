import React from 'react';
import { useRef ,useState , useEffect} from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import ReactToPrint from 'react-to-print'
const Invoice = () => {
  
    // set date and time
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const [Products, setProducts] = useState([]);
    // ref
    const componentRef = useRef()
    var arr;


    const [name, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("Data");
        const initialValue = JSON.parse(saved);
        arr=[initialValue];
        console.log(arr);
        return arr ;
      });

    



    return (
        <>
            <section className='invoiceMainSec'>
                <Container className='invoiceDiv'>
                    <Row>
                        <Col>
                            <div className='invoiceBtn floataRight'>
                                <ReactToPrint trigger={() => <Button className='me-1' variant="outline-danger">Print</Button>} content={() => componentRef.current} />
                                <a href={componentRef} download='componentRef.pdf'><Button download variant="outline-success">Download</Button></a>
                            </div>
                        </Col>
                    </Row>
                    <div ref={componentRef} className='p-3'>
                        <Row>
                            <Col><h3>INVOICER</h3></Col>
                        </Row>
                        <Row>
                            <Col className='text-center'><h3 className='fw-bold'>BILLING SYSTEM</h3></Col>
                        </Row>
                        <Row>
                            <Col><h4 className='fw-bold'>Burger O'Clock</h4></Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='floataRight'>
                                    <p><span className='fw-bold '>Invoice No: </span>{Math.ceil(Math.random() * 99999)}</p>
                                    <p><span className='fw-bold'>Date: </span>{date}</p>
                                    <p><span className='fw-bold'>Time: </span>{time}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Index</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Total Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {
                                            
                                    arr.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item[index].product_name}</td>
                                        <td>{item[index].price}</td>
                                        <td>{item[index].qty}</td>
                                        <td>{item[index].total}</td>
                                        
                                     
                                    </tr>
                                
                                })
                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col>
                                <div className='floataRight'>
                                    {/* <p className='borderTop'>Sub Total : 1000</p>
                                    <p>GST 17% : 500</p> */}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <p className='borderTopBot text-center'>Grand Total : <span className='floataRight fw-bold'>550</span></p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='text-center'>
                                <h5 className='fw-bold'>Thanks For Shopping!</h5>
                                <p className='fw-bold'>PLEASURE SERVING YOU !!!</p>
                            </Col>
                        </Row>
                    </div>
                    <Button className='floataRight' variant="outline-primary" onClick={() => { window.open("/main", "_self") }}>Done</Button>
                </Container>
            </section>
        </>
    )
}

export default Invoice
