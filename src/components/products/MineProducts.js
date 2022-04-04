import React, { useState, useEffect } from 'react'
import { Card, Dropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getMyProducts } from '../../api/products'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const MineProducts = (props) => {
    const [myProducts, setMyProducts] = useState(null)
    const {user} = props
    

    useEffect(() => {
        getMyProducts(user)
            .then(res => {
                setMyProducts(res.data.products)
            })
            .catch(console.error)
    }, [])

    if (!myProducts) {
        return <p>loading...</p>
    }
    else if (myProducts.length === 0) {
        return <p>Add a product.</p>
    }

    let productCards

    if(myProducts.length > 0) {
        productCards = myProducts.map(product => (
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
                        <Link to={`/products/${product._id}`}><Button>View {product.name}</Button></Link>
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
                    <Link to = {`/products/clothing`} style={{textDecoration:'none' , color:'black'}}>Clothing</Link><br/>
                    <Link to = {`/products/collectibles`} style={{textDecoration:'none', color:'black' }}>Collectibles</Link><br/>
                    <Link to = {`/products/electronics`} style={{textDecoration:'none', color:'black'}}> Electronics </Link>
                </Dropdown.Menu>
            </Dropdown>
            <div style={cardContainerLayout}>
                {productCards}
            </div>
        </>
    )
}

export default MineProducts