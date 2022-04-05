import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditReviewModal from './EditReviewModal'
import { removeReview } from '../../api/reviews'

const ShowReview = (props) => {
    // most of these are simply to pass to edit modal
    const {review, product, user, triggerRefresh} = props

    const [showEditModal, setShowEditModal] = useState(false)

    const destroyReview = () => {
        removeReview (user, product._id, review._id)
            .then(() => triggerRefresh())
    }

    
    return (
        <>
            <Card className="m-2">
                <Card.Header>{review.note}</Card.Header>
                <Card.Body>
                    {
                        user && (user.id === product.owner.id) 
                        ?
                            <>
                                <Button variant="warning" onClick={() => setShowEditModal(true)}>
                                    Edit Review
                                </Button>
                                <Button onClick={() => destroyReview()}variant="danger">
                                    Delete Review
                                </Button>
                            </>
                        :
                        null
                    }
                </Card.Body>
            </Card>
            <EditReviewModal 
                user={user}
                product={product}
                review={review}
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                triggerRefresh={triggerRefresh}
            />
        </>
    )
}

export default ShowReview