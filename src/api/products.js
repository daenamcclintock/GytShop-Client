import apiUrl from '../apiConfig'
import axios from 'axios'

// GET -> Index function
export const getAllProducts = () => {
    return axios(`${apiUrl}/products`)
}

//GET -> MINE index
export const getMyProducts = (user) => {
    return axios({
        url:`${apiUrl}/products/mine`,
        method: 'GET',
        headers: {
            Authorization:`Token token=${user.token}`
        }
    })
}

// GET -> Electronics category
export const getAllElectronics = () => {
    return axios(`${apiUrl}/products/electronics`)
}

// GET -> Collectibles category
export const getAllCollectibles = () => {
    return axios(`${apiUrl}/products/collectibles`)
}

// GET -> Clothing category
export const getAllClothing = () => {
    return axios(`${apiUrl}/products/clothing`)
}

// GET -> Checkout
export const getAllCheckoutItems = (userId) => {
    return axios(`${apiUrl}/checkout/${userId}`)
}

// GET -> Show function
export const getOneProduct = (productId) => {
    return axios(`${apiUrl}/products/${productId}`)
}

// POST -> Create function
export const createProduct = (user, newProduct) => {
    return axios({
        url: `${apiUrl}/products`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { product: newProduct }
    })
}

// PATCH -> Update function
export const updateProduct = (user, updatedProduct) => {
    return axios({
        url: `${apiUrl}/products/${updatedProduct.id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { product: updatedProduct }
    })
}

// DELETE -> Remove function
export const removeProduct = (user, productId) => {
    return(axios({
        url: `${apiUrl}/products/${productId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { product: '' }
    }))
}


// *************** SHOPPING CART AXIOS CALLS ***************

// GET -> Shopping Cart
export const getAllCartItems = (userId) => {
    return axios(`${apiUrl}/orders/${userId}`)
}

// POST -> Add to Cart
export const addToCart = (productId, user, addProduct) => {
    return(axios({
        url: `${apiUrl}/orders/${productId}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { product: addProduct }
    }))
}

// PATCH -> Update cart
export const updateCart = (user, updatedProduct) => {
    return axios({
        url: `${apiUrl}/products/${updatedProduct.id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { product: updatedProduct }
    })
}

// DELETE -> Remove Cart Product
export const removeCartProduct = (user, productId) => {
    return(axios({
        url: `${apiUrl}/products/${productId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { product: '' }
    }))
}