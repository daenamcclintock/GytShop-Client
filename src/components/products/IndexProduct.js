import React, { useState, useEffect } from 'react'
import { Card, Dropdown } from 'react-bootstrap'
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
        ))
    }

    return (
        <>
            <h3>Browse Some Products</h3>
            <Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Categories
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="/products/electronics">electronics</Dropdown.Item>
					<Dropdown.Item href="/products/collectibles">collectibles</Dropdown.Item>
					<Dropdown.Item href="/products/clothing">clothing</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
            <div style={cardContainerLayout}>
                {productCards}
            </div>
        </>
    )
}

export default IndexProducts