import React, { useState } from 'react'
import { AccessTime } from '@mui/icons-material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { HomeOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import "./Send.scss"

export default function Send() {
    const [accountNumber, setAccountNumber] = useState("")
    const [bankValue, setBankValue] = useState("")
    const [error, setError] = useState(null)
    const [correct, setCorrect] = useState(null)


    const fetchBankDetail = () => {
        try {
            fetch(`https://maylancer.org/api/nuban/api.php?account_number=${accountNumber}&bank_code=${bankValue}`)
                .then(res => res.json())
                .then(data => {
                    setCorrect(data)
                    setError(data.message)
                })
        } catch (data) {
            console.log(data)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchBankDetail()
    }
    const navigateAll = useNavigate()

    const handleHistory = () => {
        return navigateAll('/history')
    }
    const handleHome = () => {
        return navigateAll('/dashboard')
    }
    const handleback = () => {
        return navigateAll('/dashboard')
    }
    const handleSend = () => {
        return navigateAll('/send')
    }
    const handleMe = () => {
        localStorage.setItem("bankLogos", JSON.stringify(["https://e444xom72ti.exactdn.com/wp-content/uploads/2022/11/image-32.png?strip=all&lossy=1&ssl=1"]))
        return navigateAll('/me')
    }
    const handleNext = () => {
        if (accountNumber.trim() === "") {
            alert("bruh!!!, Do the necessary Stuff Fill Form")
        } else {
            alert("Click on verify for better exprience")
            localStorage.setItem("receiverName", JSON.stringify(correct.account_name))
            localStorage.setItem("bankName", JSON.stringify(correct.Bank_name))
            localStorage.setItem("accountNumber", JSON.stringify(correct.account_number))
            localStorage.setItem("bankLogo", JSON.stringify(["https://e444xom72ti.exactdn.com/wp-content/uploads/2022/11/image-32.png?strip=all&lossy=1&ssl=1","https://waynbo.com/wp-content/uploads/2022/11/Opay.png", "https://e7.pngegg.com/pngimages/594/192/png-clipart-first-bank-of-nigeria-central-bank-of-nigeria-financial-institution-bank-text-logo.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwwY3BO22PMnmNVb4Bn2oODgt-uygZoLMMUV7fMvjcA&s","https://cfo.co.za/wp-content/uploads/2022/10/Access-Bank-1.png", "https://www.ubagroup.com/wp-content/uploads/2018/09/UBA-logo-4.gif","https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/GTBank_logo.svg/768px-GTBank_logo.svg.png","https://leadership.ng/wp-content/uploads/2022/06/fcmb-logo-first-city-monument-bank-png-bank-750x785.png"]))
            return navigateAll("/setamount")
        }
    }
    return (
        <div className='send-container'>
            <div className="container">
                <div className="top">
                    <div className="back" onClick={handleback}>
                        <ArrowBackIosNewIcon />
                    </div>

                    <div className="top-text">
                        <h4>Transfer Money</h4>
                    </div>
                </div>

                <div className="center">
                    <div className="sending-details-request">
                        <p>Receiver Account</p>

                        <form>
                            <input type="number" name="accountNumber" id="accountNumber" placeholder='Account No' onChange={e => setAccountNumber(e.target.value)} />
                            <select name="bank-name" id="bank-name" onChange={e => setBankValue(e.target.value)}>

                                <option value="Select bank name">Select bank name</option>
                                <option value="011">First Bank</option>
                                <option value="057">Zenith Bank</option>
                                <option value="044">Access Bank</option>
                                <option value="063">Access Bank (Diamond)</option>
                                <option value="033">United Bank For Africa</option>
                                <option value="058">Guaranty Trust Bank</option>
                                <option value="214">First City Monument Bank</option>
                                <option value="999992">Opay</option>
                                <option value="999991">PalmPay</option>
                            </select>
                            <button onClick={handleSubmit}>Verify Account</button>
                        </form>
                    </div>

                    <div className="account-details-container">
                        <div className="error-message">
                            {error && <div className="error container">
                                <CancelIcon className='cancel' />
                                <p>{error}</p>
                            </div>}
                        </div>
                        <div className="account-detail">
                            {correct && <div className="account-details">
                                <div className="detail">
                                    <span className='bank-name'>{correct.Bank_name}</span>
                                    <p className='className'>{correct.account_name}</p>
                                    <p className='className'>{correct.account_number}</p>
                                </div>
                            </div>}
                        </div>
                    </div>

                    <div className="next">
                        <button className='next' onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>

            <div className="bottom-navbar">
                <div className="menu-icon" id='home'>
                    <HomeOutlined className='send' onClick={handleHome} />
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
