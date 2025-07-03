import React, { useState } from 'react'
import '../styles/Login.scss'
import { useNavigate } from 'react-router-dom'
import smartBankerIcon from '../assets/smartBankerIcon.png'
import { hashPassword } from '../utils/hashPassword'

// Store dummy hashed passwords for simulation
const dummyUsers = {
  admin: '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', // hash of admin123
}

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const hashedInput = await hashPassword(password)
    console.log(hashedInput)
    if (dummyUsers[username] && dummyUsers[username] === hashedInput) {
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('username', username)
      navigate('/dashboard')
    } else {
      alert('Invalid username or password')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">
          <img src={smartBankerIcon} alt="Logo Icon" />
          <h1>
            <span className="smart">SMART</span>{' '}
            <span className="banker">BANKER</span>
          </h1>
        </div>

        <h2 className="login-title">Login to your account</h2>
        <p className="login-subtext">
          Please use your official credentials (SSO)
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username/email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
