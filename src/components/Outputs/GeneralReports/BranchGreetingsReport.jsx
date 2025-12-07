import React, { useState } from 'react'
import '../../../styles/BranchGreetingsReport.scss'

const BranchGreetingsReport = () => {
  const [month, setMonth] = useState('')
  const [branchCode, setBranchCode] = useState('')
  const [branchName, setBranchName] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Branchwise Greetings Report\nMonth: ${month}\nBranch: ${branchCode} - ${branchName}`
    )
  }

  const handleClear = () => {
    setMonth('')
    setBranchCode('')
    setBranchName('')
  }

  return (
    <div className="branchreport-page">
      <div className="branchreport-card">
        <h3>Branchwise Greetings Report</h3>

        <div className="section">
          <div className="form-grid">
            <div className="form-group">
              <label>Month:</label>
              <input
                type="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Branch:</label>
              <div className="branch-fields">
                <input
                  type="text"
                  placeholder="Code"
                  value={branchCode}
                  onChange={(e) => setBranchCode(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Branch Name"
                  value={branchName}
                  onChange={(e) => setBranchName(e.target.value)}
                />
              </div>
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

export default BranchGreetingsReport
