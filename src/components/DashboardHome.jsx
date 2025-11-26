import React from 'react'
import {
  MdOutlineGroups,
  MdOutlineSavings,
  MdKeyboardArrowRight,
} from 'react-icons/md'
import { FiCalendar, FiGift } from 'react-icons/fi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsFillFileEarmarkTextFill } from 'react-icons/bs'
import '../styles/Dashboard.scss'

const DashboardHome = () => {
  return (
    <div className="dashboard-wrapper">
      {/* ===== HEADER ===== */}
      <div className="dashboard-header">
        <div className="welcome-block">
          <h2>Welcome, Ram Nallamaneni</h2>
          <span>Last logged in at 26/11/25, 10:57 AM</span>
        </div>
        <div className="offer-box">
          <FiGift className="gift-icon" />
          <span>New features added to Member Services!</span>
        </div>
      </div>

      {/* ===== NAVIGATION TABS ===== */}
      <div className="nav-tabs">
        <div className="tab active">
          <MdOutlineGroups className="tab-icon" />
          <div>
            <strong>Members</strong>
            <span>View & Manage Members</span>
          </div>
        </div>
        <div className="tab">
          <MdOutlineSavings className="tab-icon" />
          <div>
            <strong>Deposits</strong>
            <span>Recurring / Fixed / MBF</span>
          </div>
        </div>
        <div className="tab">Loans</div>
        <div className="tab">Dividends</div>
        <div className="tab">Reports</div>
        <div className="tab">Utilities</div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="content-row">
        {/* === MEMBER OVERVIEW / DEPOSITS === */}
        <div className="balance-block">
          <div className="balance-header">
            <span>Show Member Stats</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="cards-row">
            {/* === Total Members === */}
            <div className="feature-card">
              <div className="card-header">
                <span>Total Members</span>
                <MdKeyboardArrowRight />
              </div>
              <div className="card-body">
                <p>2,485</p>
                <button className="primary-btn">View Members</button>
              </div>
            </div>

            {/* === Total Deposits === */}
            <div className="feature-card purple">
              <div className="card-header">
                <span>Member Deposits Summary</span>
                <MdKeyboardArrowRight />
              </div>
              <div className="card-body">
                <p>₹1.28 Cr</p>
                <button className="primary-btn">View Deposits</button>
              </div>
            </div>

            {/* === Total Loans === */}
            <div className="feature-card purple">
              <div className="card-header">
                <span>Loans & Advances Overview</span>
                <MdKeyboardArrowRight />
              </div>
              <div className="card-body">
                <p>₹78.6 L</p>
                <button className="primary-btn">Manage Loans</button>
              </div>
            </div>
          </div>
        </div>

        {/* === NOTICES / EVENTS / QUICK LINKS === */}
        <div className="favorites-box">
          <div className="favorites-header">Notices & Announcements</div>
          <ul className="favorites-list">
            <li>
              <FiCalendar /> AGM scheduled for Dec 20th <MdKeyboardArrowRight />
            </li>
            <li>
              <BsFillFileEarmarkTextFill /> Monthly Statement released{' '}
              <MdKeyboardArrowRight />
            </li>
            <li>
              <BsFillFileEarmarkTextFill /> New Member Policy Update{' '}
              <MdKeyboardArrowRight />
            </li>
            <li>
              <BsFillFileEarmarkTextFill /> Festival Advance Window Open{' '}
              <MdKeyboardArrowRight />
            </li>
          </ul>
          <div className="edit-links">View All Notices</div>
        </div>
      </div>

      {/* === MEMBER UTILITIES === */}
      <div className="send-money">
        <div className="send-header">
          <h3>Quick Member Utilities</h3>
          <div className="payee-action">
            <AiOutlineUserAdd /> Add New Member <MdKeyboardArrowRight />
          </div>
        </div>

        <div className="send-form">
          <select>
            <option>Select Member Type</option>
            <option>Regular</option>
            <option>Associate</option>
          </select>
          <select>
            <option>Choose Service</option>
            <option>Loan Application</option>
            <option>Deposit Update</option>
            <option>Member Transfer</option>
          </select>
          <input type="text" placeholder="Enter Member ID" />
          <button className="primary-btn">Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
