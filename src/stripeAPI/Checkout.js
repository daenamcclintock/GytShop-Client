import { useState } from 'react';
import './Stripe.css';
import StripeContainer from './components/StripeContainer';

const Checkout = (props) => {
	const [showItem, setShowItem] = useState(false);
	const { user } = props
	return (
		<div className='App'>
			<h1>GytShopping Cart Checkout</h1>
			{showItem ? (
				<StripeContainer user={user} />
			) : (
				<>
					<h3>Price Total</h3>
					<button id='paybutton' onClick={() => setShowItem(true)}>Pay Now</button>
				</>
			)}
		</div>
	);
}

export default Checkout;