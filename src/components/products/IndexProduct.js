import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../../api/products'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexProducts = (props) => {
    const [products, setProducts] = useState(null)
    
    useEffect(() => {
        getAllProducts()
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(console.error)
    }, [])

    if (!products) {
        return <p>loading...</p>
    }
    else if (products.length === 0) {
        return <p>Add a product.</p>
    }

    let productCards

    if(products.length > 0) {
        productCards = products.map(product => (
            <Card key={product.id} style={{ width: '30%' }} className="m-2">
                <Card.Header>{product.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Link to={`/products/${product.id}`}>View {product.name}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <>
            <h3>Browse Some Products</h3>
            <div style={cardContainerLayout}>
                {productCards}
            </div>
        </>
    )
}

export default IndexProducts