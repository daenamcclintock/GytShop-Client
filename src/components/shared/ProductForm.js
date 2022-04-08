import React, { useState } from 'react'
import { Form, Container, Button, Dropdown } from 'react-bootstrap'


const ProductForm = (props) => {
    const {product, handleChange, handleSubmit, heading} = props

    return(
        <div className='userNameT'>
        <Container className="justify-content-center">
             <h3>{heading}</h3>

            <Form onSubmit={handleSubmit}>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                    placeholder="Product name"
                    value={product.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Description of Product</Form.Label>
                <Form.Control as='textarea'
                    placeholder="Product description"
                    value={product.description}
                    name='description'
                    onChange={handleChange}
                />
                <Form.Label>Price of Product</Form.Label>
                <Form.Control
                    type='number'
                    placeholder="Price of Product"
                    value={product.price}
                    name='price'
                    onChange={handleChange}
                />
                <Form.Label>Current Stock</Form.Label>
                <Form.Control
                    type='number'   
                    placeholder="Number in Stock"
                    value={product.stock}
                    name='stock'
                    onChange={handleChange}
                />
                <Form.Label>Image of Product</Form.Label>
                <Form.Control
                    placeholder="Image of Product"
                    value={product.image}
                    name='image'
                    onChange={handleChange}
                />
                <Form.Group controlId="forBasicSelect">
                <Form.Label>Category of Product</Form.Label>
                <Form.Control as='select'
                    placeholder="Category"
                    value={product.category}
                    name='category'
                    onChange={handleChange}
                >
                    <option></option>
                    <option value="collectibles">Collectibles</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                </Form.Control>
                </Form.Group>
                <button className='signInB' type='submit'>Submit</button>
            </Form>
        </Container>
        </div>
    )
}

export default ProductForm