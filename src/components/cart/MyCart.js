import React, { useState, useEffect } from 'react'
import { getAllCartItems, removeCartProducts, removeOneCartProduct,updateCart } from '../../api/products'
import { Card, Button } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import CheckoutModal from './CheckoutModal'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const MyCart = (props) => {
    const [products, setProducts] = useState(null)
    const [updated, setUpdated] = useState(false)
    const [order, setOrder] = useState(null)
    const {userId} = useParams()
    const {user, msgAlert, triggerRefresh} = props
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        getAllCartItems(userId, user)
            .then(res => {
                console.log('res: ', res)
                setProducts(res.data.orders)
            })
            .catch(console.error)
    }, [userId])

    console.log('this is the user id: ', userId)
    console.log('these are the products', products)
    console.log('this is the user\'s token', user.token)

    const clearCart = () => {
        removeCartProducts(user, userId)
            .then(() => 
                msgAlert({
                    heading: 'Products removed',
                    message: 'All products removed from cart',
                    variant: 'success'
            }))
        .then(() => navigate(`/`))
            .catch(() => 
                msgAlert({
                    heading: 'Something Went Wrong!',
                    message: 'please try again',
                    variant: 'danger'
            }))
    }


    const removeOneProduct = (e) => {
        removeOneCartProduct(user, userId)
            .then(() => 
                msgAlert({
                    heading: 'Products removed',
                    message: "The Product has been Removed" ,
                    variant: 'success'
            }))
        .then(() => navigate(`/orders/${userId}`))
            .catch(() => 
                msgAlert({
                    heading: 'Something Went Wrong!',
                    message: 'please try again',
                    variant: 'danger'
            }))
    }
    
    

    // If products is null
    if (!products) {
        return <p>Loading...</p>
    }
    // If there are no products in cart
    else if (products.length === 0) {
        return <p>Shopping Cart is Empty. Add an item!</p>
    }

    // Gets the total cost of all the products in the cart
    let totalPrice = 0
    for(let i = 0; i < products.length; i++)
    {
        totalPrice += products[i].price
    }
    console.log('total price: ', totalPrice)

    let productCards

    if(products.length > 0) {
        productCards = products.map(product => 
            (
                <Card key={product._id} style={{ width: '30%' }} className="m-2">
                    <Card.Img variant="top" src="" />
                    <Card.Title className='m-2'>{product.name}</Card.Title>
                    <Card.Body>
                        <Card.Text>Seller: {!product.owner ? null : product.owner.username}</Card.Text>
                        <Card.Text>$ {product.price}</Card.Text>   
                        <Link to={`/products/${product._id}`}>
                            <Card.Img
                                src={product.image}
                                alt='product image'
                                width='200px'
                                height='400px'
                            />
                        </Link>
                        <Card.Text>
                            <Link to={`/products/${product._id}`}><Button>View {product.name}</Button></Link>
                            <Button 
                                onClick ={()=> removeOneCartProduct(user, product)}
                                triggerRefresh={() => setUpdated(prev => !prev)}
                                variant="danger"
                                >Remove
                            </Button>
                        </Card.Text>      
                    </Card.Body>
                </Card>
            )
        )
    }

    return (
        <>
            <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                Check Out
            </Button>
            <h3>My Shopping Cart</h3>
            <h5>Quantity: {products.length}</h5>
            <div style={cardContainerLayout}>
                {productCards}
            </div>
            <p style={cardContainerLayout}>Total: ${totalPrice}</p>
            <Button 
                onClick={() => clearCart()} 
                triggerRefresh={() => setUpdated(prev => !prev)}
                variant="danger"
                >Empty Cart
            </Button>
            <CheckoutModal 
                order={order}
                show={modalOpen}
                user={user}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateCart={updateCart}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default MyCart