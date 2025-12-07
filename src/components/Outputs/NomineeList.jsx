import React, { useState } from 'react'
import '../../styles/NomineeList.scss'

const NomineeList = () => {
  const [depositTypeCode, setDepositTypeCode] = useState('')
  const [depositTypeName, setDepositTypeName] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Nominee List Report:\nDeposit Type: ${depositTypeCode} - ${depositTypeName}`
    )
  }

  const handleClear = () => {
    setDepositTypeCode('')
    setDepositTypeName('')
  }

  return (
    <div className="nominee-page">
      <div className="nominee-card">
        <h3>Nominee List</h3>

        {/* Deposit Type */}
        <div className="section">
          <h4>Deposit Type</h4>
          <div className="form-group">
            <label>Deposit Type:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={depositTypeCode}
                onChange={(e) => setDepositTypeCode(e.target.value)}
              />
              <input
                type="text"
                placeholder="Deposit Type Name"
                value={depositTypeName}
                onChange={(e) => setDepositTypeName(e.target.value)}
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

export default NomineeList
