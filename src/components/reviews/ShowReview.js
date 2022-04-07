import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { removeReview } from '../../api/reviews'
import EditProductsModel from '../products/EditProductsModel'
import EditReviewModal from './EditReviewModal'

const ShowReview = (props) => {
    // most of these are simply to pass to edit modal
    const {review, user, product, triggerRefresh} = props
    const [reviewOwner, setReviewOwner] = useState(null)
    const [showEditModal ,setShowEditModal] = useState(false)
    const [showResults, setShowResults] = React.useState(false)



    const destroyReview = () => {
        removeReview(user, product._id, review._id)
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }


// console.log('here is our review owner', review.owner) 
// console.log('here is our review owner username', review.owner.username) 

    return (
        <>
            <Card className="m-2">
                <Card.Body>
                        <h4>{review.note}<br/></h4>
                    {
                        user && (user.id === product.owner.id)
                        ?
                        <>
                    <Button onClick={()=> destroyReview()}variant="outline-danger" size='sm'>
                        Delete Review    
                    </Button>
                    <Button onClick={()=> setShowEditModal(true)}variant="outline-warning" size='sm'>
                        Edit Review    
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