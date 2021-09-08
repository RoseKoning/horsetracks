import { useState } from 'react'
import './Login.js'

import authenticateUser from '../logic/authenticate-user'

export default function (props) {
    const [error, setError] = useState()

    async function handleSubmit(event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            const token = await authenticateUser(email, password)

            sessionStorage.token = token

            props.onLogin()
        } catch (error) {
            setError(error.message)
        }
    }

    return <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button className="btn btn-primary btn-block" >Login</button>
            </form>
    
    
}