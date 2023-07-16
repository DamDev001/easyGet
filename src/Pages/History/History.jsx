import React from 'react'
import { AccessTime } from '@mui/icons-material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { HomeOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';


import "./History.scss"

export default function History() {
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
    const handleback = () => {
        return navigateAll('/dashboard')
    }
    return (
        <div className='history-container'>
            <div className="container">
                <div className="top">
                    <div className="back" onClick={handleback}>
                        <ArrowBackIosNewIcon />
                    </div>

                    <div className="top-text">
                        <h4>Transaction History</h4>
                    </div>
                </div>

                <div className="transaction-history">
                    <div className="defaultHistory">
                        <h3>No transaction history yet</h3>
                    </div>
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
