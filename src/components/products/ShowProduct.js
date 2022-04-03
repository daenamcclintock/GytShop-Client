import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../api/products";
import { Spinner, Container, Card, Button } from "react-bootstrap";

const ShowProduct = () => {
    const [product, setProduct] = useState(null)
    const {productId} = useParams()

    console.log('product ID', productId)

    useEffect( () => {
        getOneProduct(productId)
            .then( res => setProduct(res.data.product))
            .catch(console.error)
    }, [productId])

    console.log('product: ', product)

    if(!product)
    {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        )
    }

    return(
        <>
            <Container>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <Button className="m-2" variant="primary">Add To Cart</Button>
            </Container>
        </>
    )
}

export default ShowProduct