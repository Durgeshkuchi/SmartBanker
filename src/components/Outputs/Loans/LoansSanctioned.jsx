import React, { useState } from 'react'
import '../../../styles/LoansSanctioned.scss'

const LoansSanctioned = () => {
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [loanTypeCode, setLoanTypeCode] = useState('')
  const [loanTypeName, setLoanTypeName] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Loans Sanctioned Report:\nFrom: ${fromDate}\nTo: ${toDate}\nLoan Type: ${loanTypeCode} - ${loanTypeName}`
    )
  }

  const handleClear = () => {
    setFromDate('')
    setToDate('')
    setLoanTypeCode('')
    setLoanTypeName('')
  }

  return (
    <div className="loan-sanctioned-page">
      <div className="loan-sanctioned-card">
        <h3>Loans Sanctioned Reports</h3>

        {/* Loan Period */}
        <div className="section">
          <h4>Loans Sanctioned Between Two Dates</h4>
          <div className="form-group">
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

        {/* Loan Type */}
        <div className="section">
          <h4>Loan Type</h4>
          <div className="form-group">
            <label>Loan Type:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={loanTypeCode}
                onChange={(e) => setLoanTypeCode(e.target.value)}
              />
              <input
                type="text"
                placeholder="Loan Type Name"
                value={loanTypeName}
                onChange={(e) => setLoanTypeName(e.target.value)}
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

export default LoansSanctioned
