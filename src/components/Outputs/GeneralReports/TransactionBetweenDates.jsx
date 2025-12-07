import React, { useState } from 'react'
import '../../../styles/TransactionBetweenDates.scss'

const TransactionBetweenDates = () => {
  const [glType, setGlType] = useState('')
  const [glTypeName, setGlTypeName] = useState('')
  const [isAccountEnabled, setIsAccountEnabled] = useState(false)
  const [accountCode, setAccountCode] = useState('')
  const [accountName, setAccountName] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating GL Account Statement:\nGL Type: ${glType} - ${glTypeName}\nAccount Code: ${accountCode} - ${accountName}\nFrom: ${fromDate}\nTo: ${toDate}`
    )
  }

  const handleClear = () => {
    setGlType('')
    setGlTypeName('')
    setIsAccountEnabled(false)
    setAccountCode('')
    setAccountName('')
    setFromDate('')
    setToDate('')
  }

  return (
    <div className="transactions-page">
      <div className="transactions-card">
        <h3>GL Account Statement</h3>

        <div className="section">
          <h4>A/c Transactions</h4>

          {/* GL Type */}
          <div className="form-group">
            <label>GL Type:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={glType}
                onChange={(e) => setGlType(e.target.value)}
              />
              <input
                type="text"
                placeholder="GL Type Name"
                value={glTypeName}
                onChange={(e) => setGlTypeName(e.target.value)}
              />
            </div>
          </div>

          {/* Account Code */}
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={isAccountEnabled}
                onChange={(e) => setIsAccountEnabled(e.target.checked)}
              />
              &nbsp;A/c Code:
            </label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={accountCode}
                onChange={(e) => setAccountCode(e.target.value)}
                disabled={!isAccountEnabled}
              />
              <input
                type="text"
                placeholder="Account Name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                disabled={!isAccountEnabled}
              />
            </div>
          </div>

          {/* Dates */}
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

        {/* Buttons */}
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

export default TransactionBetweenDates
