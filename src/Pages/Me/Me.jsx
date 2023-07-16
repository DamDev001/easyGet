import React, { useState, useEffect } from 'react';
import { AccessTime } from '@mui/icons-material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { HomeOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import "./Me.scss"

export default function Me() {
    const navigateAll = useNavigate()
    const [getUsername, setGetUsername] = useState('')
    const [getPassword, setPassword] = useState('')
    const [getEmail, setGetEmail] = useState('')
    
    const [usernameUpdate, setUsernameUpdate] = useState("")
    const [passwordUpdate, setPasswordUpdate] = useState("")
    const [emailUpdate, setEmailUpdate] = useState("")

    useEffect(() => {
        const username = JSON.parse(localStorage.getItem("username"))
        const password = JSON.parse(localStorage.getItem("password"))
        const email = JSON.parse(localStorage.getItem("email"))
        setGetUsername(username)
        setGetEmail(email)
        setPassword(password)

    }, [])

    const handleSave = () =>{
        localStorage.setItem("username", JSON.stringify(usernameUpdate))
        localStorage.setItem("password", JSON.stringify(passwordUpdate))
        localStorage.setItem("email", JSON.stringify(emailUpdate))

        alert("Changes Updated")
    }


    const handleHistory = () => {
        return navigateAll('/history')
    }
    const handleHome = () => {
        return navigateAll('/dashboard')
    }
    const handleSend = () => {
        return navigateAll('/send')
    }
    const handleMe = () => {
        return navigateAll('/me')
    }
    const handleback = () => {
        return navigateAll('/dashboard')
    }
    return (
        <div className='me-container'>
            <div className="container">
                <div className="top">
                    <div className="back" onClick={handleback}>
                        <ArrowBackIosNewIcon />
                    </div>

                    <div className="top-text">
                        <h4>Settting</h4>
                    </div>
                </div>

                <div className="profileEdit">
                    <form>
                        <span>
                            <label>Change Username</label>
                            <input type="text" placeholder={getUsername} onChange={e => setUsernameUpdate(e.target.value)}/>
                        </span>

                        <span>
                            <label>Change Email</label>
                            <input type="text" placeholder={getEmail} onChange={e => setEmailUpdate(e.target.value)}/>
                        </span>

                        <span>
                            <label>Change Password</label>
                            <input type="text" placeholder={getPassword} onChange={e => setPasswordUpdate(e.target.value)}/>
                        </span>

                    </form>
                    <button className='update' onClick={handleSave}>Save</button>
                </div>
            </div>


            <div className="bottom-navbar">
                <div className="menu-icon" id='home' onClick={handleHome} >
                    <HomeOutlined className='send' />
                </div>
                <div className="menu-icon" id='history' onClick={handleHistory}>
                    <AccessTime className='history' />
                </div>
                <div className="menu-icon" id='wallet' onClick={handleSend}>
                    <CreditCardOutlinedIcon className='wallet' />
                </div>
                <div className="menu-icon" id='me' onClick={handleMe}>
                    <MoreHorizOutlinedIcon className='me' />
                </div>
            </div>
        </div>
    )
}
