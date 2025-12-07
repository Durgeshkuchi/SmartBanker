import React, { useState } from 'react'
import '../../../styles/LoanSchedule.scss'

const LoanSchedule = () => {
  const [memberId, setMemberId] = useState('')
  const [memberName, setMemberName] = useState('')
  const [loanTypeCode, setLoanTypeCode] = useState('')
  const [loanTypeName, setLoanTypeName] = useState('')
  const [accountNoCode, setAccountNoCode] = useState('')
  const [accountNoName, setAccountNoName] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Loan Schedule:\nMember ID: ${memberId} - ${memberName}\nLoan Type: ${loanTypeCode} - ${loanTypeName}\nAccount No: ${accountNoCode} - ${accountNoName}`
    )
  }

  const handleClear = () => {
    setMemberId('')
    setMemberName('')
    setLoanTypeCode('')
    setLoanTypeName('')
    setAccountNoCode('')
    setAccountNoName('')
  }

  return (
    <div className="loan-schedule-page">
      <div className="loan-schedule-card">
        <h3>Loan Schedule</h3>

        <div className="section">
          <h4>Member Details</h4>

          {/* Member ID */}
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

          {/* Loan Type */}
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

          {/* Account No */}
          <div className="form-group">
            <label>Account No:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={accountNoCode}
                onChange={(e) => setAccountNoCode(e.target.value)}
              />
              <input
                type="text"
                placeholder="Account Name / Description"
                value={accountNoName}
                onChange={(e) => setAccountNoName(e.target.value)}
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

export default LoanSchedule
