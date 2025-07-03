import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import { BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { MdOutlineSavings, MdKeyboardArrowRight } from 'react-icons/md'
import { FiGift } from 'react-icons/fi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import '../styles/Dashboard.scss'

const DashboardHome = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <div className="welcome-block">
          <h2>Welcome, Ram Nallamaneni</h2>
          <span>Last logged in at 03/07/25, 10:57 AM</span>
        </div>
        <div className="offer-box">
          <FiGift className="gift-icon" />
          <span>Special offers for you!</span>
        </div>
      </div>

      <div className="nav-tabs">
        <div className="tab active">
          <MdOutlineSavings className="tab-icon" />
          <div>
            <strong>Accounts</strong>
            <span>Savings, Current etc</span>
          </div>
        </div>
        <div className="tab">Cards</div>
        <div className="tab">FD/RD</div>
        <div className="tab">Loans</div>
        <div className="tab">Invest</div>
        <div className="tab">Insure</div>
      </div>

      <div className="content-row">
        <div className="balance-block">
          <div className="balance-header">
            <span>Show Balance</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="cards-row">
            <div className="feature-card">
              <div className="card-header">
                <span>Savings Accounts</span>
                <MdKeyboardArrowRight />
              </div>
              <div className="card-body">
                <p>XXXXXXXX</p>
                <button className="primary-btn">Get Statement</button>
              </div>
            </div>

            <div className="feature-card purple">
              <div className="card-header">
                <span>Enjoy tax benefits and assured returns</span>
                <MdKeyboardArrowRight />
              </div>
              <div className="card-body">
                <button className="primary-btn">Open PPF Account</button>
              </div>
            </div>

            <div className="feature-card purple">
              <div className="card-header">
                <span>Open Demat & Trading Acc in few clicks</span>
                <MdKeyboardArrowRight />
              </div>
              <div className="card-body">
                <button className="primary-btn">Open Demat Account</button>
              </div>
            </div>
          </div>
        </div>

        <div className="favorites-box">
          <div className="favorites-header">My Favourite Links</div>
          <ul className="favorites-list">
            <li>
              <BsFillFileEarmarkTextFill /> Account Statement{' '}
              <MdKeyboardArrowRight />
            </li>
            <li>
              <BsFillFileEarmarkTextFill /> Open FD <MdKeyboardArrowRight />
            </li>
            <li>
              <BsFillFileEarmarkTextFill /> Download FD Summary{' '}
              <MdKeyboardArrowRight />
            </li>
            <li>
              <BsFillFileEarmarkTextFill /> Sweep-in / OD against FD{' '}
              <MdKeyboardArrowRight />
            </li>
            <li>
              <BsFillFileEarmarkTextFill /> CASA Interest Certificate{' '}
              <MdKeyboardArrowRight />
            </li>
          </ul>
          <div className="edit-links">Add & Edit Links</div>
        </div>
      </div>

      <div className="send-money">
        <div className="send-header">
          <h3>Send Money</h3>
          <div className="payee-action">
            <AiOutlineUserAdd /> Add Payee <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="send-form">
          <select>
            <option>Domestic</option>
          </select>
          <select>
            <option>Own Accounts / Other Accounts</option>
          </select>
          <select>
            <option>Select an A/c</option>
          </select>
          <div className="amount-input">
            <FaRupeeSign className="rupee-icon" />
            <input type="number" placeholder="0.00" />
          </div>
          <button className="primary-btn">Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
