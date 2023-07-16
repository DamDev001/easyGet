import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./SignUp.scss"

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("");
  const [sucessError, setSucessError] = useState("hello wpelr")

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof (Storage) !== "undefined") {

      if (username.trim() === '' || email.trim() === '' || phone.trim() === '' || password.trim() === '') {
        alert('All form must be filled');
        setSucessError("setSucessError")
      } else {
        localStorage.setItem("username", JSON.stringify(username))
        localStorage.setItem("email", JSON.stringify(email))
        localStorage.setItem("phone", JSON.stringify(phone))
        localStorage.setItem("password", JSON.stringify(password))
        setSucessError("setSucessError")
        localStorage.setItem("defaultAmount", JSON.stringify("50000"))
        localStorage.setItem("defaultHistory", JSON.stringify("No transaction history yet"))
        alert("sucessful, Click on Log in to continue")
      }

      // if(){
      //   alert('User input is empty');
      // }else{

      // }
    }
  }

  return (
    <div className='signup'>
      <div className="container">
        <div className="back-arrow">
          <Link to="/"><ArrowBackIosNewIcon /></Link>
        </div>
        <div className="form-container">
          <h2>Create an account</h2>

          <form action="#" onSubmit={handleSubmit}>
            <span>
              <label htmlFor="username">Username</label>
              <input type="name" placeholder='e.g damdev' id='username' onChange={(e) => setUsername(e.target.value)} />
            </span>
            <span>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='example@gmail.com' id='email' onChange={(e) => setEmail(e.target.value)} />
            </span>
            <span>
              <label htmlFor="number">Phone </label>
              <input type="number" placeholder='e.g +234913938939' id='number' onChange={(e) => setPhone(e.target.value)} />
            </span>
            <span>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='••••••••' id='password'
                onChange={(e) => setPassword(e.target.value)} />
            </span>

            <span><p>Agree to all term and conditions</p></span>
            <span>
              <input type="submit" name="submit" id="submit" />
            </span>
          </form>

          <p>Alread have an account, <Link to="/signIn">Login!!!.</Link></p>
        </div>

        <div className="successful_error">
          <p>{sucessError}</p>
        </div>
      </div>
    </div>
  )
}
