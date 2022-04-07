import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import CheckoutForm from '../shared/CheckoutForm'

const CheckoutModal = (props) => {
    const { user, show, handleClose, updateProduct, triggerRefresh } = props
    const [order, setOrder] = useState(props.order)

    const handleChange = (e) => {
        e.persist()

        setOrder(prevOrder => {
            const name = e.target.name
            let value = e.target.value

            const updatedValue = { [name]: value }

            return {...prevOrder, ...updatedValue}
        })
    }



    const handleSubmit = (e) => {
        
        e.preventDefault()
        console.log('here is our user in edit', user)
        // updateProduct(user,order)
        //     .then(() => handleClose())
        //     .then(()=> triggerRefresh())
        //     .catch(console.error)
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className='bg-dark text-info'>
                <CheckoutForm 
                    order={order}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Check-out!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default CheckoutModal