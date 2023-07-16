import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useNavigate } from 'react-router-dom';
import "./SignIn.scss"
import Dashboard from '../Dashboard/Dashboard';

export default function SignIn() {
  const [getEmail, setGetEmail] = useState("")
  const [getPassword, setGetPassword] = useState("")
  const navigate = useNavigate()

  const HandleSubmit = (event) => {
    event.preventDefault()

    if (typeof (Storage) !== "undefined") {
      const email = JSON.parse(localStorage.getItem("email"))
      const password = JSON.parse(localStorage.getItem("password"))
 
      if(getEmail.trim() === ""){
        alert("Enter Your registered email")
      }else{
        if(getEmail.trim() === ""){
          alert("Your Password Please")
        }else{
          if(getEmail === email){
            if(getPassword === password){
              alert("sucessful")
              return navigate('/dashboard')
            }else{
              alert("incorrect password")
            }
          }else{
            alert("incorrect email")
          }
        }
      }
    }
  }


  return (
    <div className='signIp-container'>
      <div className="container">
        <div className="back-arrow">
          <Link to="/"><ArrowBackIosNewIcon /></Link>
        </div>
        <div className="signIn-hero-image">
          <img src="./Images/securityOn-amico1.png" alt="vault" />
        </div>

        <div className="form-container">
          <h2>Sign in</h2>

          <form action={<Dashboard/>} onSubmit={HandleSubmit}>
            <span>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='example@gmail.com' id='email' onChange={(e) => setGetEmail(e.target.value)} />
            </span>
            <span>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='••••••••' id='password'
                onChange={(e) => setGetPassword(e.target.value)} />
            </span>
            <span className='forgot'>
              <p>Forgot Password?</p>
            </span>
            <span>
              <input type="submit" name="submit" id="submit" />
            </span>
          </form>

          <p>Don't have an account, <Link to="/signUp">Create One!!!.</Link></p>
        </div>
      </div>
    </div>
  )
}
