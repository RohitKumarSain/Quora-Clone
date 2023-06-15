import React from 'react'
import "../pagescss/register.css";
import { Link } from 'react-router-dom';
function Register() {
    return (
        <div className='container-register'>

            <div className="register-container">
                <div className="heading">
                    <h1>Register</h1>
                </div>
                <div className="instruction">
                    <p>Please fill in the fields below:</p>
                </div>

                <div className="input-section">
                    <div className="first-input">
                        <input type="text" placeholder='First name' />
                    </div>
                    <div className="first-input">
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div className="first-input">
                        <input type="text" placeholder='E-mail' />
                    </div>
                    <div className="second-input">
                        <input type="password" placeholder='Password' />

                    </div>

                    <div className="btn-register">
                        <button className='btn btn-danger'>CREATE ACCOUNT</button>
                    </div>
                    <div className="new-custumer">
                        <span>Already have an account ? </span><Link to="/login">Login</Link>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Register