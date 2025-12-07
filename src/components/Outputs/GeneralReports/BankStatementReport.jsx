import React, { useState } from 'react'
import '../../../styles/BankStatementReport.scss'

const BankStatementReport = () => {
  const [bankName, setBankName] = useState('')
  const [accountNo, setAccountNo] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Bank Statement Report\n` +
        `Bank: ${bankName}\nAccount No: ${accountNo}\nFrom: ${fromDate}\nTo: ${toDate}`
    )
  }

  const handleClear = () => {
    setBankName('')
    setAccountNo('')
    setFromDate('')
    setToDate('')
  }

  return (
    <div className="bankstatement-page">
      <div className="bankstatement-card">
        <h3>Bank Statement Report</h3>

        <div className="form-grid">
          {/* Bank */}
          <div className="form-group">
            <label>Bank:</label>
            <input
              type="text"
              placeholder="Enter bank name"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
            <button className="lookup-btn">L</button>
          </div>

          {/* Account No */}
          <div className="form-group">
            <label>Account No:</label>
            <input
              type="text"
              placeholder="Enter account number"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
            />
          </div>

          {/* Date Range */}
          <div className="form-group">
            <label>From Date:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>To Date:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="btn-primary" onClick={handleGenerate}>
            Report
          </button>
          <button className="btn-secondary" onClick={handleClear}>
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default BankStatementReport
