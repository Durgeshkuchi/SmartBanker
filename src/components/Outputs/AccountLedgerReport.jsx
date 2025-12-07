import React, { useState } from 'react'
import '../../styles/AccountLedgerReport.scss'

const AccountLedgerReport = () => {
  const [ledgerType, setLedgerType] = useState('Single Branch')
  const [branchCode, setBranchCode] = useState('')
  const [branchName, setBranchName] = useState('')
  const [memberId, setMemberId] = useState('')
  const [memberName, setMemberName] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Account Ledger Report:\nLedger Type: ${ledgerType}\nBranch: ${branchCode} - ${branchName}\nMember: ${memberId} - ${memberName}\nFrom: ${fromDate}\nTo: ${toDate}`
    )
  }

  const handleClear = () => {
    setLedgerType('Single Branch')
    setBranchCode('')
    setBranchName('')
    setMemberId('')
    setMemberName('')
    setFromDate('')
    setToDate('')
  }

  return (
    <div className="accountledger-page">
      <div className="accountledger-card">
        <h3>Account Ledger - Statement of Accounts</h3>

        {/* Ledger Type Section */}
        <div className="section">
          <h4>Ledger Type</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="ledgerType"
                value="Single Branch"
                checked={ledgerType === 'Single Branch'}
                onChange={(e) => setLedgerType(e.target.value)}
              />
              Single Branch
            </label>
            <label>
              <input
                type="radio"
                name="ledgerType"
                value="Member"
                checked={ledgerType === 'Member'}
                onChange={(e) => setLedgerType(e.target.value)}
              />
              Member
            </label>
          </div>
        </div>

        {/* Branch Details */}
        <div className="section">
          <h4>Branch Details</h4>
          <div className="form-group">
            <label>Branch:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={branchCode}
                onChange={(e) => setBranchCode(e.target.value)}
                disabled={ledgerType !== 'Single Branch'}
              />
              <input
                type="text"
                placeholder="Branch Name"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                disabled={ledgerType !== 'Single Branch'}
              />
            </div>
          </div>
        </div>

        {/* Member Details */}
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
                disabled={ledgerType !== 'Member'}
              />
              <input
                type="text"
                placeholder="Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                disabled={ledgerType !== 'Member'}
              />
            </div>
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

        {/* Action Buttons */}
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

export default AccountLedgerReport
