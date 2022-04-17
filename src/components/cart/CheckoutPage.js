import React, { useState, useEffect } from 'react'
import { getAllCartItems } from '../../api/products'
import { Card, Button, ListGroup, Form } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { updateAddress } from '../../api/products'
import Checkout from '../../stripeAPI/Checkout'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const CheckoutPage = (props) => {
    const [products, setProducts] = useState(null)
    const [order, setOrder] = useState({firstName: '', lastName: '', shippingAddress: ''})
    const {user, msgAlert} = props
    const userId = user._id
    const orderId = useParams()

    console.log('ORDER ID: ', orderId)

    useEffect(() => {
        getAllCartItems(userId, user)
            .then(res => {
                setProducts(res.data.orders.productsOrdered)
            })
            .catch(console.error)
    }, [])

    const handleChange = (e) => {
        e.persist()

        setOrder( prevOrder => {
            const name = e.target.name
            let value = e.target.value
            
            const updatedValue = { [name]: value }

            console.log('prevOrder', prevOrder)
            console.log('updatedValue', updatedValue)

            return {...prevOrder, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('ORDER ID IN CLIENT:', orderId.orderId)
        updateAddress(user, order, orderId.orderId)
            // If create is successful, we should navigate to the show page
            // .then( res => {navigate(`/pets/${res.data.pet.id}`)})
            // Then we send success message
            .then( () =>
                msgAlert({
                    heading: 'Shipping address updated successfully!',
                    message: 'Shipping address updated successfully!',
                    variant: 'success',
                }))
            // if there is an error, we'll send an error message
            .catch( () =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Shipping address did not update.',
                    variant: 'danger',
                }))
    }

    if (!products) {
        return <p>Loading...</p>
    }

    // Gets the total cost of all the products in the cart
    let totalPrice = 0
    for(let i = 0; i < products.length; i++)
    {
        totalPrice += products[i].price
    }

    let productItems

    if(products.length > 0) {
        productItems = products.map(product => 
            (
                <ListGroup.Item>{product.name} - ${product.price}</ListGroup.Item>
            )
        )
    }

    return (
        <>
            <h3>Checkout</h3>
            <div style={cardContainerLayout}>
                <p>Items ordered:</p>
                <Card style={{ width: '36rem' }}>
                    <ListGroup variant="flush">
                        {productItems}
                    </ListGroup>
                </Card>
                <br />
                <p>Total: ${totalPrice}</p>
            </div>
            <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter first name"
                        name="firstName"
                        onChange={handleChange}    
                    />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter last name" 
                        name="lastName"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formShippingAddress">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Enter shipping address' 
                        name="shippingAddress"
                        onChange={handleChange}    
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
            <Checkout firstName={order.firstName} lastName={order.lastName} shippingAddress={order.shippingAddress} totalPrice={totalPrice}/>
        </>
    )
}

export default CheckoutPage