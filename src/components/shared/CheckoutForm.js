import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const CheckoutForm = (props) => {
    const {handleChange, handleSubmit, heading, order} = props

    return (
        <Container className="justify-content-center">
             <h3>{heading}</h3>

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
                    onChange={handleChange}
                />

                <Link to={`/orders/${user._id}/payment`}>
                    <Button type='submit'> Submit </Button>
                </Link>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default CheckoutForm 