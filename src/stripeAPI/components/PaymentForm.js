import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

// Function to get rid of the underline under the link
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

// Creates the carts
const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

// Function to set up the payment form
// Destructures user from props
export default function PaymentForm(props) { 
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const { user, totalPrice, orderId } = props
    const navigate = useNavigate()

    // Function to handle the submit of the payment and render the payment method type
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        })

        
    // If no error,
    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:8000/payment", { 
                amount: totalPrice * 100,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }
            // else {
            //     console.log("Failed payment")
            // }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

console.log('this is the ORDERID', orderId)

const confirmation = () => {
    navigate(`/orders/${orderId.orderId}/confirmation`)
}

console.log('this is the USER', user)
    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            {/* <Link to={`/orders/${user._id}/confirmation`} style={linkStyle}> */}
            <button id='paybutton'>Pay</button>
            {/* {!success ?
                <h2>Payment Failed</h2>
            :
                <p></p>
            } */}
            {/* </Link> */}
        </form>
        :
        <div>
            {/* <h2>Payment Successful!</h2> */}
            <script>{confirmation()}</script>
       </div>
        }

      </>
    )
}