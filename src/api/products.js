import apiUrl from '../apiConfig'
import axios from 'axios'

// GET -> Index function
export const getAllProducts = () => {
    return axios(`${apiUrl}/products`)
}

// GET -> Show function
export const getOneProduct = (productId) => {
    return axios(`${apiUrl}/products/${productId}`)
}

// POST -> Create function
export const createProduct = (newProduct) => {
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
export const updateProduct = (updatedProduct) => {
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
export const removeProduct = (productId) => {
    return(axios({
        url: `${apiUrl}/products/${productId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { product: '' }
    }))
}

