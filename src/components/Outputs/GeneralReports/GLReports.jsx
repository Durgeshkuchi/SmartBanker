import React, { useState } from 'react'
import '../../../styles/GLReports.scss'

const GLReports = () => {
  const [ledgerType, setLedgerType] = useState('full')

  const handlePrint = () => {
    alert(
      `Printing ${
        ledgerType === 'full' ? 'Full GL Sheet' : 'Personal Ledger'
      } Report`
    )
  }

  const handleExit = () => {
    alert('Exiting GL Reports page')
  }

  return (
    <div className="glreports-page">
      <div className="glreports-card">
        <h3>General Ledger Report</h3>

        <div className="ledger-type-section">
          <label className="radio-label">
            <input
              type="radio"
              name="ledgerType"
              value="full"
              checked={ledgerType === 'full'}
              onChange={(e) => setLedgerType(e.target.value)}
            />
            Full GL Sheet
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="ledgerType"
              value="personal"
              checked={ledgerType === 'personal'}
              onChange={(e) => setLedgerType(e.target.value)}
            />
            Personal Ledger
          </label>
        </div>

        <div className="actions">
          <button className="btn-primary" onClick={handlePrint}>
            Print
          </button>
          <button className="btn-secondary" onClick={handleExit}>
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default GLReports
