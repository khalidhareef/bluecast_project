import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Forms() {
   const [cardValue,setCardValue] = useState({
    name:"",
    cardNumber:"",
    month:"",
    year:"",
    cvc:""
   })
   
   
   const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(cardValue);
   }

    return (
        <div className='d-flex align-items-center justify-content-center my-5'>
            <div className='d-flex align-items-center justify-content-center font-monospace ' style={{width:'300px'}}>
                <Form onSubmit={(e)=>handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>CARDHOLDER NAME</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" onChange={(e)=>setCardValue({...cardValue, name:e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>CARD NUMBER</Form.Label>
                        <Form.Control type="number" placeholder="Enter card Number" onChange={(e)=>setCardValue({...cardValue, cardNumber:e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div className='d-flex justify-content-between'>
                            <div className=''>
                                <Form.Label>EXP.DATE (MM/YY)</Form.Label> 
                                <div className='d-flex justify-content-between'>
                                <Form.Control type="number" placeholder="MM" onChange={(e)=>setCardValue({...cardValue, month:e.target.value})}/>
                                <Form.Control type="number" placeholder="YY" className='ms-2' onChange={(e)=>setCardValue({...cardValue, year:e.target.value})}/>
                                </div>                              
                            </div>
                            <div className='ms-3'>
                                <Form.Label>CVC</Form.Label>
                                <Form.Control type="number" placeholder="eg : 123" onChange={(e)=>setCardValue({...cardValue, cvc:e.target.value})}/>
                            </div>
                        </div>
                    </Form.Group>
                    <Button variant="dark" type="submit" className='w-100' >
                        Confirm
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Forms