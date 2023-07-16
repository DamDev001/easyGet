import React, { useState, useEffect } from 'react';
import { AccessTime, CreditCardOutlined, MoreHorizOutlined, ArrowBackIosNew, HomeOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import "./SetAmount.scss";

export default function SetAmount() {
  const navigateAll = useNavigate();
  const [accountName, setAccountName] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [bankLogo, setBankLogo] = useState('');

  useEffect(() => {
    const storedAccountName = JSON.parse(localStorage.getItem("receiverName"));
    const storedBankName = JSON.parse(localStorage.getItem("bankName"));
    const storedAccountNumber = JSON.parse(localStorage.getItem("accountNumber"));
    const storedBankLogo = JSON.parse(localStorage.getItem("bankLogo"));

    setAccountName(storedAccountName);
    setBankName(storedBankName);
    setAccountNumber(storedAccountNumber);

    if (storedBankName === 'palmpay' && storedBankLogo && storedBankLogo.length > 0) {
      setBankLogo(storedBankLogo[0]);
    } else if (storedBankName === 'paycom' && storedBankLogo && storedBankLogo.length > 1) {
      setBankLogo(storedBankLogo[1]);
    }else if (storedBankName === 'first bank of nigeria' && storedBankLogo && storedBankLogo.length > 1) {
        setBankLogo(storedBankLogo[2]);
    }else if (storedBankName === 'zenith bank' && storedBankLogo && storedBankLogo.length > 1) {
        setBankLogo(storedBankLogo[3]);
    }else if (storedBankName === 'access bank' && storedBankLogo && storedBankLogo.length > 1) {
        setBankLogo(storedBankLogo[4]);
    }else if (storedBankName === 'access bank' && storedBankLogo && storedBankLogo.length > 1) {
        setBankLogo(storedBankLogo[4]);
    }else if (storedBankName === 'united bank for africa' && storedBankLogo && storedBankLogo.length > 1) {
        setBankLogo(storedBankLogo[5]);
    }else if (storedBankName === 'guaranty trust bank' && storedBankLogo && storedBankLogo.length > 1) {
        setBankLogo(storedBankLogo[6]);
    }else if (storedBankName === 'first city monument bank' && storedBankLogo && storedBankLogo.length > 1) {
        setBankLogo(storedBankLogo[7]);
    }
    
  }, []);

  const handleHistory = () => {
    navigateAll('/history');
  };

  const handleHome = () => {
    navigateAll('/dashboard');
  };

  const handleSend = () => {
    navigateAll('/send');
  };

  const handleMe = () => {
    navigateAll('/me');
  };

  const handleBack = () => {
    navigateAll('/dashboard');
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsEmpty(value === '');
  };

  const handleSendMoney = () => {
    const getBalance = JSON.parse(localStorage.getItem("defaultAmount"));

    if (inputValue.trim() === '') {
      alert("Please enter an amount.");
    } else if (Number(inputValue) > getBalance) {
      alert("Insufficient balance!");
    } else {
      const updatedBalance = getBalance - Number(inputValue);
      localStorage.setItem("defaultAmount", JSON.stringify(updatedBalance));
      localStorage.setItem("defaultHistory", JSON.stringify([
        inputValue.trim(),
        accountName 
      ]));
      navigateAll('/successful');
    }
  };

  return (
    <div className='me-container'>
      <div className="container">
        <div className="top">
          <div className="back" onClick={handleBack}>
            <ArrowBackIosNew />
          </div>
          <div className="top-text">
            <h4>Transfer Money</h4>
          </div>
        </div>
        <div className="center">
          <div className="checkDetails">
            <div className="bank_logo">
              {bankLogo && <img src={bankLogo} alt="" />}
            </div>
            <div className="show-account-details">
              <div className="name">{accountName}</div>
              <div className="bankName-accountNumber">
                <span>{bankName}</span>
                <span>({accountNumber})</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sendAmount">
          <span>Amount(₦)</span>
          <div className="inputAmount">
            <input type="number" placeholder='10.00 - 500,000' value={inputValue} onChange={handleInputChange} />
          </div>
        </div>
        <div className="sendButton">
          {isEmpty ? (
            <button disabled style={{ background: '#cacaca' }}>Send</button>
          ) : (
            <button onClick={handleSendMoney}>Send</button>
          )}
        </div>
      </div>
      <div className="bottom-navbar">
        <div className="menu-icon" id='home' onClick={handleHome}>
          <HomeOutlined className='send' />
        </div>
        <div className="menu-icon" id='history' onClick={handleHistory}>
          <AccessTime className='history' />
        </div>
        <div className="menu-icon" id='wallet' onClick={handleSend}>
          <CreditCardOutlined className='wallet' />
        </div>
        <div className="menu-icon" id='me' onClick={handleMe}>
          <MoreHorizOutlined className='me' />
        </div>
      </div>
    </div>
  );
}
