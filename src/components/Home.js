import IndexProducts from './products/IndexProduct'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	const {user, msgAlert} = props

	return (
		<>
			<IndexProducts user={user} />
		</>
	)
}

export default Home
