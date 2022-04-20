import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = 'pk_test_51KlisSJAF3e1vqKy7ZLXdEvIvsvojWCUTJp5Vrd5JB8lchrTU15ZtDU0XrtTWdN8E3re3BF1YJDF4fEXGOuEzcsf00Mz7Dv0zi'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(props) {
	const { user, totalPrice, orderId } = props
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm user={user} totalPrice={totalPrice} orderId={orderId}/>
		</Elements>
	)
}
