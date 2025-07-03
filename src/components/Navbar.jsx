import React, { useEffect, useState } from 'react'
import '../styles/Navbar.scss'
import { FaSearch, FaBell, FaSignOutAlt, FaClock } from 'react-icons/fa'
import userIcon from '../assets/user.png'
import { useNavigate } from 'react-router-dom'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const Navbar = () => {
  const [time, setTime] = useState('')
  const [timezone, setTimezone] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour12: false }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    setTimezone(userTimeZone)
  }, [])

  const handleToggle = () => {
    setDarkMode((prev) => !prev)
    document.body.classList.toggle('dark-mode')
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('username')
    navigate('/')
  }

  return (
    <div className="navbar">
      <div className="left">
        <div className="time-box">
          <div className="clock-line">
            <FaClock />
            <span className="clock">{time}</span>
          </div>
          <span className="date">
            {new Date().toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}{' '}
            ({timezone})
          </span>
        </div>
      </div>

      <div className="right">
        <div className="theme-toggle" onClick={handleToggle}>
          <MdLightMode className="icon" />
          <div className={`switch ${darkMode ? 'dark' : ''}`}>
            <div className="knob" />
          </div>
          <MdDarkMode className="icon" />
        </div>

        <div className="search">
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>

        <div className="icon-button">
          <FaBell />
        </div>

        <div className="user-section">
          <img src={userIcon} alt="user" />
          <div className="user-details">
            <span className="name">Ram Nallamaneni</span>
            <span className="role">Manager</span>
          </div>
        </div>

        <div className="icon-button logout" onClick={handleLogout}>
          <FaSignOutAlt />
        </div>
      </div>
    </div>
  )
}

export default Navbar
