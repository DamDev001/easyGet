import React, { useState } from 'react'
import "./Dashboard.scss"
import { HomeOutlined } from '@mui/icons-material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { AccessTime } from '@mui/icons-material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Dashboard() {
    const [username, setUsername] = useState(JSON.parse(localStorage.getItem("username")))
    const [defaultAmount, setDefaultAmount] = useState(JSON.parse(localStorage.getItem("defaultAmount")))
    const [defaultTransaction, setDefaultTransaction] = useState(JSON.parse(localStorage.getItem("defaultHistory"))) 
    const navigateAll = useNavigate()

    const handleHistory  = () =>{
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
    const handleTopUp = () =>{
        return navigateAll('/topup')
    }
  return (
    <div className='dashboard'>
        <div className="container">
            <div className="top">
                <div className="user-small-detail">
                    <AccountCircleIcon className='user-profile'/>
                    <div className="text">
                        <h3>{username}</h3>
                        <p>Trial 1</p>
                    </div>
                </div>
                <div className="right">
                <NotificationsNoneOutlinedIcon className='notification'/>
                </div>
            </div>

            <div className="center">
                <div className="center-container">
                    <div className="center-top">
                        <span>Total Balance </span>
                        <h1>₦<span className='balance'>{defaultAmount}</span></h1>
                    </div>

                    <div className="center-bottom">
                        <div className='icon' id="send"  onClick={handleSend}>
                            <img src="Images/send-money 1.png" alt="" />
                        </div>

                        <div className='icon' id="recieve" onClick={handleTopUp}>
                            <img src="Images/send-money 2.png" alt="" />
                        </div>

                        <div className='icon' id="recieve">
                            <img src="Images/bill 1.png" alt="" />
                        </div>

                        <div className='icon' id="recieve">
                            <img src="Images/payment 1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="transaction-history">
                <div className="example">
                    <h3>{defaultTransaction}</h3>
                </div>
            </div>
        </div>
        

        <div className="bottom-navbar">
            <div className="menu-icon" id='home' onClick={handleHome} >
                <HomeOutlined className='send'/>
            </div>
            <div className="menu-icon" id='history' onClick={handleHistory}>
                <AccessTime className='history'/>
            </div>
            <div className="menu-icon" id='wallet' onClick={handleSend}>
                <CreditCardOutlinedIcon className='wallet' />
            </div>
            <div className="menu-icon" id='me' onClick={handleMe}>
                <MoreHorizOutlinedIcon className='me'/>
            </div>
        </div>
    </div>
  )
}