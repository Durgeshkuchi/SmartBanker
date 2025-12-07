import React, { useState } from 'react'
import '../../styles/StatementOfAccount.scss'

const StatementOfAccount = () => {
  const [memberCode, setMemberCode] = useState('')
  const [memberName, setMemberName] = useState('')
  const [isMBFPayment, setIsMBFPayment] = useState(false)
  const [isAllMembers, setIsAllMembers] = useState(false)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Statement Of Accounts:\nMember ID: ${memberCode} - ${memberName}\nMBF(DRB): ${isMBFPayment}\nAll Members: ${isAllMembers}\nFrom: ${fromDate}\nTo: ${toDate}`
    )
  }

  const handleClear = () => {
    setMemberCode('')
    setMemberName('')
    setIsMBFPayment(false)
    setIsAllMembers(false)
    setFromDate('')
    setToDate('')
  }

  return (
    <div className="statement-page">
      <div className="statement-card">
        <h3>Statement Of Accounts</h3>

        {/* Member Details */}
        <div className="section">
          <h4>Member Details</h4>
          <div className="form-group">
            <label>Member ID:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={memberCode}
                onChange={(e) => setMemberCode(e.target.value)}
                disabled={isAllMembers}
              />
              <input
                type="text"
                placeholder="Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                disabled={isAllMembers}
              />
            </div>
            <label className="checkbox-inline">
              <input
                type="checkbox"
                checked={isMBFPayment}
                onChange={() => setIsMBFPayment(!isMBFPayment)}
              />
              MBF(DRB) Payments
            </label>
          </div>
        </div>

        {/* Filters */}
        <div className="section">
          <div className="form-row">
            <label className="checkbox-inline">
              <input
                type="checkbox"
                checked={isAllMembers}
                onChange={() => setIsAllMembers(!isAllMembers)}
              />
              All Members
            </label>

            <div className="date-range">
              <label>From:</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <label>To:</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="actions">
          <button className="btn-primary" onClick={handleGenerate}>
            OK
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

export default StatementOfAccount
