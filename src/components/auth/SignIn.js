import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignIn = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

	const onSignIn = (event) => {
		event.preventDefault()
        console.log('the props', props)
		const { msgAlert, setUser } = props

        const credentials = {username, password}

		signIn(credentials)
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign In Success',
					message: messages.signInSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
                setUsername('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

    return (
    <div className='backgroundColor'>
     <container className='signinBox'>
        <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3 className='topText'>Sign In</h3>
                <Form onSubmit={onSignIn}>
                    <Form.Group controlId='email'>
                        <div className='userNameT'>
                            <Form.Label>Username</Form.Label>
                         </div>
                         <div className='userName'>
                            <Form.Control
                                required
                                type='text'
                                name='username'
                                value={username}
                                placeholder='Enter username'
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <div className='userNameT'>
                            <Form.Label>Password</Form.Label>
                        </div>
                        <div className='userName'>
                            <Form.Control
                                required
                                name='password'
                                value={password}
                                type='password'
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </Form.Group>
                    <div>
                        <button className='signInB'  type='submit'>
                            Submit
                        </button>
                    </div>
                    
                </Form>
            </div>
        </div>
      </container> 
    </div>   
    )
}

export default SignIn
