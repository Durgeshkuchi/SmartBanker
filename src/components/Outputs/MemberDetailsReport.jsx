import React, { useState } from 'react'
import '../../styles/MemberDetailsReport.scss'

const MemberDetailsReport = () => {
  const [rangeType, setRangeType] = useState('all')
  const [fromMemberId, setFromMemberId] = useState('')
  const [toMemberId, setToMemberId] = useState('')
  const [balance, setBalance] = useState('0.00')

  const handleGenerateReport = () => {
    if (rangeType === 'range' && (!fromMemberId || !toMemberId)) {
      alert('Please enter both From and To Member IDs.')
      return
    }
    alert(
      `Generating Member Account Details Report\nRange Type: ${rangeType}\nFrom: ${fromMemberId}\nTo: ${toMemberId}\nBalance: ${balance}`
    )
  }

  const handleClear = () => {
    setRangeType('all')
    setFromMemberId('')
    setToMemberId('')
    setBalance('0.00')
  }

  return (
    <div className="memberdetails-page">
      <div className="memberdetails-card">
        <h3>Member Account Details</h3>

        <div className="range-section">
          <span className="section-title">Range</span>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="rangeType"
                value="range"
                checked={rangeType === 'range'}
                onChange={(e) => setRangeType(e.target.value)}
              />
              Range
            </label>
            <label>
              <input
                type="radio"
                name="rangeType"
                value="all"
                checked={rangeType === 'all'}
                onChange={(e) => setRangeType(e.target.value)}
              />
              All
            </label>
          </div>
        </div>

        <div className="memberid-section">
          <span className="section-title">Member ID</span>
          <div className="id-fields">
            <div className="field">
              <label>From:</label>
              <input
                type="text"
                value={fromMemberId}
                onChange={(e) => setFromMemberId(e.target.value)}
                disabled={rangeType === 'all'}
                placeholder="Enter from ID"
              />
            </div>
            <div className="field">
              <label>To:</label>
              <input
                type="text"
                value={toMemberId}
                onChange={(e) => setToMemberId(e.target.value)}
                disabled={rangeType === 'all'}
                placeholder="Enter to ID"
              />
            </div>
            <div className="field balance-field">
              <label>Balance:</label>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                step="0.01"
              />
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="btn-primary" onClick={handleGenerateReport}>
            Generate Report
          </button>
          <button className="btn-secondary" onClick={handleClear}>
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default MemberDetailsReport
