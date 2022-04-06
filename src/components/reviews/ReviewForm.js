import { Modal } from 'bootstrap'
import React, { useState, useEffect } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { addReview, removeReview } from '../../api/reviews'

const ReviewForm = (props) => {
    
    const { product,show, heading, triggerRefresh, user,handleClose} = props
    const [review, setReview] = useState("")



    const handleChange = (e) => {
        // e === event
        e.persist()

        setReview(prevReview => {
            const name = e.target.name
            let value = e.target.value

            const updatedValue = { [name]: value }


            return {...prevReview, ...updatedValue}
        })
    }

    const clearField = () => {
        setReview({note: ""})
    }

    const destroyReview =() => {
        removeReview(user, product._id, review._id)
        .then(()=> triggerRefresh())
        .catch(console.error)
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        addReview(user, product._id, review)
            .then(()=> clearField())
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }

    return (
        <Container className="justify-content-center">
        <h3>{heading}</h3>
        <Form onSubmit={handleSubmit}>
            
            <Form.Label >Leave an Anonymous Review</Form.Label>
            <Form.Control as='textarea' 
                placeholder="Leave a Review"        
                value={review.note}
                name='note'
                onChange={handleChange}
            />
            <Button type='submit' >Submit</Button>
        </Form>
        </Container> 
    )
}

export default ReviewForm