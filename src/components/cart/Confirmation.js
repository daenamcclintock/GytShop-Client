import React, { useState } from 'react'

const Confirmation = (props) => {
    const [order, setOrder] = useState(null)

    let orderNum = []
    const generateOrderNumber = () => {
        for (let i = 0; i < 10; i++) {
            return (Math.random() * 10)
        }
    }
}