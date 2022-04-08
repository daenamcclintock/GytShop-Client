import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { updateOrder } from '../../api/products'

const CheckoutForm = (props) => {
    const {handleChange, heading, order} = props
    const {user} = props

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     updateOrder(user, order._id)
    //         // Then we send success message
    //         .then( () => {
    //             console.log('Shipping address changed')
    //         })
    //         // if there is an error, we'll send an error message
    //         .catch(console.log('shipping address couldnt be changed'))
    //     console.log('submitted!')
    // }

    return (
        <Container className="justify-content-center">
             <h3>{heading}</h3>
{/* 
            <Form onSubmit={handleSubmit}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    placeholder="Full Name"
                    onChange={handleChange}
                />
                <Form.Label>Shipping Address</Form.Label>
                <Form.Control
                    placeholder="Shipping Address"
                    name='shippingAddress'
                    // value={order.shippingAddress}
                    onChange={handleChange}
                />

                <Link to={`/orders/${user._id}/payment`}>
                    <Button type='submit'> Submit </Button>
                </Link>
            </Form> */}
        </Container>
    )
}

export default CheckoutForm 