import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createProduct } from '../../api/products'
import ProductForm from '../shared/ProductForm'
import { useNavigate } from 'react-router-dom'


const CreateProduct = (props) => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name:'', price:'', description:'', category:'', stock:'',
    })
    const {user} = props

    const handleChange = (e) => {
        e.persist()

        setProduct(prevProduct => {
            const name = e.target.name
            let value = e.target.value
            
            const updatedValue = {[name]:value}

            return {...prevProduct, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        createProduct(user,product)
            .then(res => {
                navigate(`/products/${res.data.product.id}`)
            })
            .catch(console.error)
    }

    return (
        <div>
            <ProductForm
                product={product}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                heading="Add A New Product"
            />
        </div>
    )



}

export default CreateProduct