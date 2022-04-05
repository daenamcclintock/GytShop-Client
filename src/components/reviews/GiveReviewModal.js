import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import ReviewForm from '../shared/ReviewForm'
import {giveReview} from '../../api/reviews'

const GiveReviewModal = (props) => {
    const { user,product, show, handleClose, triggerRefresh } = props
    const [review, setReview] = useState({})

    const handleChange = (e) => {
        // e === event
        e.persist()

        setReview(prevReview => {
            const name = e.target.name
            let value = e.target.value

            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }


            return {...prevReview, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        console.log('the review:' ,review)
        giveReview(user, product.id, review)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <ReviewForm
                    review={review}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Give a Review!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default GiveReviewModal