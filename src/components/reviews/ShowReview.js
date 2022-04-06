import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { removeReview } from '../../api/reviews'

const ShowReview = (props) => {
    // most of these are simply to pass to edit modal
    const {review, user, product, triggerRefresh} = props

    const [reviewOwner, setReviewOwner] = useState(null)





    const destroyReview = () => {
        removeReview(user, product._id, review._id)
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }

const username= user.username
// console.log('here is our review owner', review.owner) 
// console.log('here is our review owner username', review.owner.username) 
console.log('user', )

    return (
        <>
            <Card className="m-2">
                <Card.Body>
                    <small>{review.note}</small><br/>
                </Card.Body>
            </Card>
        </>
    )
}

export default ShowReview