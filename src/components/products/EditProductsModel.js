import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { updateProduct } from '../../api/products'
import ProductForm from '../shared/ProductForm'

const EditProductModel = (props) => {
    const { user, show, handleClose, updateProduct, triggerRefresh } = props
    const [anime, setAnime] = useState(props.anime)

    const handleChange = (e) => {
        e.persist()

        setAnime(prevAnime => {
            const name = e.target.name
            let value = e.target.value

            if(name === "onGoing" && e.target.checked){
                value = true
            } else if (name === "onGoing" && !e.target.checked){
                value = false
            }
    
            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }
            const updatedValue = { [name]: value }

            return {...prevAnime, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        updateAnime(user,anime)
            .then(() => handleClose())
            .then(()=> triggerRefresh())
            .catch(console.error)
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className='bg-dark text-info'>
                <AnimeForm 
                    anime={anime}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit Anime!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditAnimesModel