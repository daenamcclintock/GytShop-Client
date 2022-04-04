import React, { useState, useEffect } from 'react'
import { getAllClothing } from '../../api/products'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ClothingProducts = (props) => {
    const [products, setProducts] = useState(null)

    
    useEffect(() => {
        getAllClothing()
            .then(res => {
                setProducts(res.data.clothing)
            })
            .catch(console.error)
    }, [])

    if (!products) {
        return <p>loading...</p>
    }
    else if (products.length === 0) {
        return <p>Add a Clothing Item</p>
    }

    let productCards

    if(products.length > 0) {
        productCards = products.map(product => 
            (
                <Card key={product._id} style={{ width: '30%' }} className="m-2">
                    <Card.Img variant="top" src="" />
                    <Card.Title className='m-2'>{product.name}</Card.Title>
                    <Card.Body>
                        <Card.Text>Seller: {product.owner.username}</Card.Text>
                        <Link to={`/products/${product._id}`}>
                            <Card.Img
                            src={product.image}
                            alt='product image'
                            width='200px'
                            height='400px'
                            />
                        </Link>
                        <Card.Text>
                            <Button href={`/products/${product._id}`}>View {product.name}</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        )
    }

    return (
        <>
            <h3>Browse Clothing Products</h3>
            <div style={cardContainerLayout}>
                {productCards}
            </div>
        </>
    )
}

export default ClothingProducts