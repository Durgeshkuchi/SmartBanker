import React, { useState } from 'react'
import '../../../styles/RetirementStatementReport.scss'

const RetirementStatementReport = () => {
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const handleGenerate = () => {
    alert(`Generating Retirement Statement\nFrom: ${fromDate}\nTo: ${toDate}`)
  }

  const handleClear = () => {
    setFromDate('')
    setToDate('')
  }

  return (
    <div className="retirement-page">
      <div className="retirement-card">
        <h3>Retirement Statement</h3>

        <div className="section">
          <h4>Members Retired Between Two Dates</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>From:</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="form-group">
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

export default RetirementStatementReport
