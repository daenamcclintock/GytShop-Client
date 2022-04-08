import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createProduct } from '../../api/products'
import ProductForm from '../shared/ProductForm'
import { useNavigate } from 'react-router-dom'


const CreateProduct = (props) => {
    const [product, setProduct] = useState({ name:'', price:'', description:'', category:'', stock:'', image:''})
    const {user, msgAlert} = props
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.persist()

        setProduct(prevProduct => {
            const name = e.target.name
            let value = e.target.value
            
            const updatedValue = { [name]:value }

            return {...prevProduct, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        createProduct(user, product)
            .then(res => {navigate(`/products/${res.data.product._id}`)})
            // .then(res => console.log('product id: ', res.data.product.))
            // Then we send success message
            .then( () =>
                msgAlert({
                    heading: 'Product Added! Success!',
                    message: 'Product added',
                    variant: 'success',
            }))
            // if there is an error, we'll send an error message
            .catch( () =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Product could not be added',
                    variant: 'danger',
            }))
    }

    return (
        <container className='createB'>
        <div>
            <ProductForm
                product={product}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                heading="Add A New Product"
            />
        </div>
        </container>
    )
}

export default CreateProduct