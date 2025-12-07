import React, { useState } from 'react'
import '../../styles/AnyDateBalances.scss'

const AnyDateBalances = () => {
  const [balanceType, setBalanceType] = useState('Loans Balance')
  const [accountTypeCode, setAccountTypeCode] = useState('')
  const [accountTypeName, setAccountTypeName] = useState('')
  const [balanceDate, setBalanceDate] = useState('')

  const handlePrint = () => {
    alert(
      `Generating ${balanceType} Report:\nA/c Type: ${accountTypeCode} - ${accountTypeName}\nBalance As On: ${balanceDate}`
    )
  }

  const handleClear = () => {
    setBalanceType('Loans Balance')
    setAccountTypeCode('')
    setAccountTypeName('')
    setBalanceDate('')
  }

  return (
    <div className="balance-page">
      <div className="balance-card">
        <h3>Any Date Balances</h3>

        {/* Balance Type */}
        <div className="section">
          <h4>Balance Type</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="balanceType"
                value="Loans Balance"
                checked={balanceType === 'Loans Balance'}
                onChange={(e) => setBalanceType(e.target.value)}
              />
              Loans Balance
            </label>

            <label>
              <input
                type="radio"
                name="balanceType"
                value="Deposit Balance"
                checked={balanceType === 'Deposit Balance'}
                onChange={(e) => setBalanceType(e.target.value)}
              />
              Deposit Balance
            </label>
          </div>
        </div>

        {/* Account Balance */}
        <div className="section">
          <h4>Account Balance</h4>

          <div className="form-group">
            <label>A/c Type:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={accountTypeCode}
                onChange={(e) => setAccountTypeCode(e.target.value)}
              />
              <input
                type="text"
                placeholder="Account Type Name"
                value={accountTypeName}
                onChange={(e) => setAccountTypeName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Bal As On:</label>
            <input
              type="date"
              value={balanceDate}
              onChange={(e) => setBalanceDate(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="actions">
          <button className="btn-primary" onClick={handlePrint}>
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

export default AnyDateBalances
