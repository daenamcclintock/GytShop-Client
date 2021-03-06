import { useState } from 'react';
import './Stripe.css';
import StripeContainer from './components/StripeContainer';

const Checkout = (props) => {
	const [showItem, setShowItem] = useState(false);
	const { user, firstName, lastName, shippingAddress, totalPrice, orderId } = props

	return (
		<div className='App'>
			{showItem ? (
				<StripeContainer user={user} firstName={firstName} lastName={lastName} shippingAddress={shippingAddress} totalPrice={totalPrice} orderId={orderId}/>
			) : (
				<>
					<button id='paybutton' onClick={() => setShowItem(true)}>Pay Now</button>
				</>
			)}
		</div>
	);
}

export default Checkout;