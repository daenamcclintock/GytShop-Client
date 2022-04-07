import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<> 
        <container className='signinBox'>
            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    <h2 className='topText'>Are you sure you want to sign out?</h2>
                    <h6 className='smallText'>We hate to see you go...</h6>
                    <ButtonGroup>
                        <div>
                            <button className='signInB' variant='danger' onClick={onSignOut}>
                                Sign Out
                            </button>
                        </div>
                        <div >
                            <button className='signInB' variant='warning' onClick={onCancel}>
                                Cancel
                            </button>
                        </div>
                    </ButtonGroup>
                </div>
            </div>
        </container>
		</>
	)
}

export default SignOut
