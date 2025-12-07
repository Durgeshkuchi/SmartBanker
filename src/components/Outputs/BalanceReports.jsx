import React, { useState } from 'react'
import '../../styles/BalanceReports.scss'

const BalanceReports = () => {
  const [accountType, setAccountType] = useState('Income')

  const handleGenerate = () => {
    alert(`Generating Balance Report for: ${accountType}`)
  }

  const handleClear = () => {
    setAccountType('Income')
  }

  return (
    <div className="balance-page">
      <div className="balance-card">
        <h3>Balance Reports</h3>

        {/* A/c Types */}
        <div className="section">
          <h4>A/c Types</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="accountType"
                value="Income"
                checked={accountType === 'Income'}
                onChange={(e) => setAccountType(e.target.value)}
              />
              Income
            </label>

            <label>
              <input
                type="radio"
                name="accountType"
                value="Expenditure"
                checked={accountType === 'Expenditure'}
                onChange={(e) => setAccountType(e.target.value)}
              />
              Expenditure
            </label>

            <label>
              <input
                type="radio"
                name="accountType"
                value="Assets"
                checked={accountType === 'Assets'}
                onChange={(e) => setAccountType(e.target.value)}
              />
              Assets
            </label>

            <label>
              <input
                type="radio"
                name="accountType"
                value="Liabilities"
                checked={accountType === 'Liabilities'}
                onChange={(e) => setAccountType(e.target.value)}
              />
              Liabilities
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="actions">
          <button className="btn-primary" onClick={handleGenerate}>
            Print
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

export default BalanceReports
