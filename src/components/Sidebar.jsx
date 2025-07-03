import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Sidebar.scss'
import {
  FaRupeeSign,
  FaThLarge,
  FaExchangeAlt,
  FaClipboardCheck,
  FaTools,
  FaQuestionCircle,
} from 'react-icons/fa'
import SmartBankerIcon from '../assets/smartBankerIcon.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={SmartBankerIcon} alt="Smart Banker Icon" />
        <h2>
          <span className="smart">SMART</span>
          <br />
          <span className="banker">BANKER</span>
        </h2>
      </div>

      <div className="nav-links">
        <NavLink to="/dashboard" end>
          <FaThLarge /> Dashboard
        </NavLink>
        <NavLink to="/dashboard/ac-opening">
          <FaRupeeSign /> A/C Opening
        </NavLink>
        <NavLink to="/dashboard/transactions">
          <FaExchangeAlt /> Transactions
        </NavLink>
        <NavLink to="/dashboard/approvals">
          <FaClipboardCheck /> Approvals
        </NavLink>
        <NavLink to="/dashboard/utilities">
          <FaTools /> Utilities
        </NavLink>
        <NavLink to="/dashboard/queries">
          <FaQuestionCircle /> Queries
        </NavLink>
      </div>

      <div className="sidebar-footer">Copyrights @SmartBanker</div>
    </div>
  )
}

export default Sidebar
