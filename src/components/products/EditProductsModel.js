import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { updateProduct } from '../../api/products'
import ProductForm from '../shared/ProductForm'

<<<<<<< HEAD
const EditProductModel = (props) => {
    const { user, show, handleClose, updateProduct, triggerRefresh } = props
    const [anime, setAnime] = useState(props.anime)
=======
const EditProductsModel = (props) => {
    const { user, show, handleClose, updateProduct, triggerRefresh } = props
    const [product, setProduct] = useState(props.product)
>>>>>>> temp11

    const handleChange = (e) => {
        e.persist()

<<<<<<< HEAD
        setAnime(prevAnime => {
            const name = e.target.name
            let value = e.target.value

            if(name === "onGoing" && e.target.checked){
                value = true
            } else if (name === "onGoing" && !e.target.checked){
                value = false
            }
=======
        setProduct(prevProduct => {
            const name = e.target.name
            let value = e.target.value
>>>>>>> temp11
    
            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }
            const updatedValue = { [name]: value }

<<<<<<< HEAD
            return {...prevAnime, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        updateAnime(user,anime)
=======
            return {...prevProduct, ...updatedValue}
        })
    }



    const handleSubmit = (e) => {
        
        e.preventDefault()
        console.log('here is our user in edit', user)
        updateProduct(user,product)
>>>>>>> temp11
            .then(() => handleClose())
            .then(()=> triggerRefresh())
            .catch(console.error)
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className='bg-dark text-info'>
<<<<<<< HEAD
                <AnimeForm 
                    anime={anime}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit Anime!"
=======
                <ProductForm 
                    product={product}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit Product!"
>>>>>>> temp11
                />
            </Modal.Body>
        </Modal>
    )
}

<<<<<<< HEAD
export default EditAnimesModel
=======
export default EditProductsModel
>>>>>>> temp11
