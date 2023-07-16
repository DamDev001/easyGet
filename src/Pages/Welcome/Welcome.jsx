import { Link } from 'react-router-dom'

import React from 'react'
import "./Welcome.scss"

export default function Welcome() {
    return (
        <div className='welcome'>
            <div className="welcome-container">
                <div className="welcome-image">
                    <img src="./Images/Vault-amico 1.png" alt="vault" />
                </div>

                <div className="welcome-content">
                    <h1>Let’s get started</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna </p>
                </div>

                <div className="button">
                    <Link to="/signIn">Sign In</Link>
                    <Link to="/signUp">Create an account</Link>
                </div>
                <span className='needHelp'>Need Help?</span>
            </div>

            <h1 className='alert'>This web app is not available on big screen</h1>
        </div>
    )
}
