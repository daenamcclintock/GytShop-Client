import { useState } from 'react';
import './Stripe.css';
import StripeContainer from './components/StripeContainer.js';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>GytShopping Cart Checkout</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>Price Total</h3>
					<button id='paybutton' onClick={() => setShowItem(true)}>Pay Now</button>
				</>
			)}
		</div>
	);
}

export default App;