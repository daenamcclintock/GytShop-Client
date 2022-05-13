// import React, { Component } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Metamask from '../metamask/Metamask'
import MetamaskFox from '../metamask/MetamaskFox'

const SignUp = (props) => {
 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const navigate = useNavigate()

	const onSignUp = (event) => {
		event.preventDefault()

		const { msgAlert, setUser } = props

        const credentials = {username, password, passwordConfirmation}

		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign Up Success',
					message: messages.signUpSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
                setUsername('')
                setPassword('')
                setPasswordConfirmation('')
				msgAlert({
					heading: 'Sign Up Failed with error: ' + error.message,
					message: messages.signUpFailure,
					variant: 'danger',
				})
			})
	}


    return (
        <container className='signinBox'>
            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    <h3 className='topText'>Sign Up</h3>
                    <Form onSubmit={onSignUp}>
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
                        <Form.Group controlId='passwordConfirmation'>
                        <div className='userNameT'>
                            <Form.Label>Password Confirmation</Form.Label>
                        </div>
                        <div className='userName'>
                            <Form.Control
                                required
                                name='passwordConfirmation'
                                value={passwordConfirmation}
                                type='password'
                                placeholder='Confirm Password'
                                onChange={e => setPasswordConfirmation(e.target.value)}
                            />
                        </div>
                        </Form.Group>
                        
                            <button className='signInB' type='submit'>
                                Submit
                        </button>
                        
                    </Form>
                </div>
            </div >
            <div className='metamask-button'>
                <Metamask />
                <MetamaskFox />
            </div>
        </container>
    )

}

export default SignUp