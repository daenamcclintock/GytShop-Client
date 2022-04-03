import React, { useState, useEffect } from 'react'
import { getAllCollectibles } from '../../api/products'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const CollectibleProducts = (props) => {
    const [products, setProducts] = useState(null)
    
    useEffect(() => {
        getAllCollectibles()
            .then(res => {
                setProducts(res.data.collectibles)
            })
            .catch(console.error)
    }, [])

    if (!products) {
        return <p>loading...</p>
    }
    else if (products.length === 0) {
        return <p>Upload a Collectibles Product</p>
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
                        <Card.Text>
                            <Link to={`/products/${product._id}`}>View</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        )
    }

    return (
        <>
            <h3>Browse Collectibles Products</h3>
            <div style={cardContainerLayout}>
                {productCards}
            </div>
        </>
    )
}

export default CollectibleProducts