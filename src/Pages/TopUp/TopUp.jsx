import React, { useState, useEffect } from 'react';
import { AccessTime } from '@mui/icons-material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { HomeOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import "./TopUp.scss"

export default function TopUp() {
    const navigateAll = useNavigate()
    const [getAmount, setGetAmount] = useState("")
    const [isEmpty, setIsEmpty] = useState(true);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setGetAmount(JSON.parse(localStorage.getItem('defaultAmount')))

    }, [])

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setIsEmpty(value === '');
    };

    const topUp  = () =>{
        const getDefaultAmount = JSON.parse(localStorage.getItem("defaultAmount"))
        const sum = parseInt(getDefaultAmount) + parseInt(inputValue);
        alert(sum + "Added to you account")
        localStorage.setItem("defaultAmount", JSON.stringify(sum));
        window.location.reload()
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
        <div className='topup-container'>
            <div className="container">
                <div className="top">
                    <div className="back" onClick={handleback}>
                        <ArrowBackIosNewIcon />
                    </div>

                    <div className="top-text">
                        <h4>Top Your Acount</h4>
                    </div>
                </div>

                <div className="center">
                    <div className="current-amount">
                        <span>Current Amount</span>
                        <h1>{getAmount}</h1>
                    </div>
                </div>
                <div className="topUpAmount">
                    <span>Amount(₦)</span>
                    <div className="inputAmount">
                        <input type="number" placeholder='10.00 - 500,000' onChange={handleInputChange} value={inputValue}/>
                    </div>
                </div>
                <div className="topUpButton">
                    {isEmpty ? (
                        <button disabled style={{ background: '#cacaca' }}>Top Up</button>
                    ) : (
                        <button onClick={topUp}>Top Up</button>
                    )}
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
