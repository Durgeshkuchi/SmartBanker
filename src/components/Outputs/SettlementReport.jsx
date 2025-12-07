import React, { useState } from 'react'
import '../../styles/SettlementReport.scss'

const SettlementReport = () => {
  const [settlementType, setSettlementType] = useState('Retirement')
  const [isListChecked, setIsListChecked] = useState(false)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [memberId, setMemberId] = useState('')
  const [memberName, setMemberName] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Settlement Report:\nType: ${settlementType}\nList: ${
        isListChecked ? 'Yes' : 'No'
      }\nFrom: ${fromDate}\nTo: ${toDate}\nMember ID: ${memberId} - ${memberName}`
    )
  }

  const handleClear = () => {
    setSettlementType('Retirement')
    setIsListChecked(false)
    setFromDate('')
    setToDate('')
    setMemberId('')
    setMemberName('')
  }

  return (
    <div className="settlement-page">
      <div className="settlement-card">
        <h3>Settlement Report</h3>

        {/* Settlement Options */}
        <div className="section">
          <h4>Settlement</h4>
          <div className="settlement-options">
            <label>
              <input
                type="radio"
                name="settlementType"
                value="Retirement"
                checked={settlementType === 'Retirement'}
                onChange={(e) => setSettlementType(e.target.value)}
              />
              Retirement
            </label>
            <label>
              <input
                type="radio"
                name="settlementType"
                value="Death"
                checked={settlementType === 'Death'}
                onChange={(e) => setSettlementType(e.target.value)}
              />
              Death
            </label>
            <label>
              <input
                type="checkbox"
                checked={isListChecked}
                onChange={(e) => setIsListChecked(e.target.checked)}
              />
              List
            </label>
          </div>
        </div>

        {/* Date Range */}
        <div className="section">
          <h4>Date Range</h4>
          <div className="form-dates">
            <div className="date-field">
              <label>From:</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="date-field">
              <label>To:</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Member Info */}
        <div className="section">
          <h4>Member Details</h4>
          <div className="form-group">
            <label>Member ID:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
              />
              <input
                type="text"
                placeholder="Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="actions">
          <button className="btn-primary" onClick={handleGenerate}>
            Report
          </button>
          <button className="btn-secondary" onClick={handleClear}>
            Cancel
          </button>
          <button
            className="btn-secondary"
            onClick={() => window.history.back()}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettlementReport
