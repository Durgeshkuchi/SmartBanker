import React, { useState } from 'react'
import '../../../styles/LoansExpired.scss'

const LoansExpired = () => {
  const [loanTypeCode, setLoanTypeCode] = useState('')
  const [loanTypeName, setLoanTypeName] = useState('')
  const [expiredDate, setExpiredDate] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Loans About to Expire Report:\nLoan Type: ${loanTypeCode} - ${loanTypeName}\nExpired Up To: ${expiredDate}`
    )
  }

  const handleClear = () => {
    setLoanTypeCode('')
    setLoanTypeName('')
    setExpiredDate('')
  }

  return (
    <div className="loans-expired-page">
      <div className="loans-expired-card">
        <h3>Loans About To Expire</h3>

        {/* Loan Type Section */}
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

        {/* Expired Date Section */}
        <div className="section">
          <div className="form-group">
            <label>Expired Up To:</label>
            <input
              type="date"
              value={expiredDate}
              onChange={(e) => setExpiredDate(e.target.value)}
            />
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

export default LoansExpired
