import React, { useState } from 'react'
import '../../../styles/ExpenseTransactions.scss'

const ExpenseTransactions = () => {
  const [activeTab, setActiveTab] = useState('payments')

  // --- Payments State ---
  const [date, setDate] = useState('')
  const [transactionNo, setTransactionNo] = useState('')
  const [groupNo, setGroupNo] = useState('')
  const [groupName, setGroupName] = useState('')
  const [accountNo, setAccountNo] = useState('')
  const [accountName, setAccountName] = useState('')
  const [balance, setBalance] = useState('0.00')
  const [totalAmount, setTotalAmount] = useState('0.00')
  const [instrument, setInstrument] = useState(false)
  const [multipleCredits, setMultipleCredits] = useState(false)
  const [transactionType, setTransactionType] = useState('')
  const [transactionTypeName, setTransactionTypeName] = useState('')
  const [amount, setAmount] = useState('0.00')
  const [accountType, setAccountType] = useState('')
  const [remarks, setRemarks] = useState('')

  // --- Query State ---
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [glGroupCode, setGlGroupCode] = useState('')
  const [glGroupName, setGlGroupName] = useState('')
  const [queryAccountNo, setQueryAccountNo] = useState('')
  const [queryAccountName, setQueryAccountName] = useState('')

  const handleSave = () => alert('Saving payment transaction...')
  const handleClear = () => {
    setDate('')
    setTransactionNo('')
    setGroupNo('')
    setGroupName('')
    setAccountNo('')
    setAccountName('')
    setBalance('0.00')
    setTotalAmount('0.00')
    setInstrument(false)
    setMultipleCredits(false)
    setTransactionType('')
    setTransactionTypeName('')
    setAmount('0.00')
    setAccountType('')
    setRemarks('')
  }

  const handleQuery = () => alert('Running transaction query...')
  const handlePrint = () => alert('Printing results...')
  const handlePrintConsolidated = () =>
    alert('Printing consolidated balances...')

  return (
    <div className="expense-transactions-page">
      <div className="expense-transactions-card">
        <h3>Expenditure Transactions</h3>

        {/* Tabs */}
        <div className="tab-header">
          <button
            className={activeTab === 'payments' ? 'active' : ''}
            onClick={() => setActiveTab('payments')}
          >
            Payments
          </button>
          <button
            className={activeTab === 'query' ? 'active' : ''}
            onClick={() => setActiveTab('query')}
          >
            Query
          </button>
        </div>

        {/* --- PAYMENTS TAB --- */}
        {activeTab === 'payments' && (
          <div className="tab-content">
            <div className="section header-section">
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Transaction No:</label>
                <input
                  type="text"
                  value={transactionNo}
                  onChange={(e) => setTransactionNo(e.target.value)}
                />
              </div>
            </div>

            <div className="section">
              <h4>Account Details</h4>

              <div className="form-row">
                <div className="form-group">
                  <label>Expenditure Group No:</label>
                  <div className="input-pair">
                    <input
                      type="text"
                      placeholder="Code"
                      value={groupNo}
                      onChange={(e) => setGroupNo(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Group Name"
                      value={groupName}
                      onChange={(e) => setGroupName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Balance:</label>
                  <input
                    type="text"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expenditure Account No:</label>
                  <div className="input-pair">
                    <input
                      type="text"
                      placeholder="Code"
                      value={accountNo}
                      onChange={(e) => setAccountNo(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Account Name"
                      value={accountName}
                      onChange={(e) => setAccountName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Total Amount:</label>
                  <input
                    type="text"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={instrument}
                    onChange={() => setInstrument(!instrument)}
                  />
                  Instrument
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={multipleCredits}
                    onChange={() => setMultipleCredits(!multipleCredits)}
                  />
                  Multiple Credits
                </label>
              </div>
            </div>

            <div className="section">
              <h4>To Account</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Transaction Type:</label>
                  <div className="input-pair">
                    <input
                      type="text"
                      placeholder="Code"
                      value={transactionType}
                      onChange={(e) => setTransactionType(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Type Name"
                      value={transactionTypeName}
                      onChange={(e) => setTransactionTypeName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Amount:</label>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Account Type:</label>
                <input
                  type="text"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                />
              </div>
            </div>

            <div className="section">
              <h4>Remarks</h4>
              <input
                type="text"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter remarks here"
              />
            </div>

            <div className="actions">
              <button className="btn-primary" onClick={handleSave}>
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
        )}

        {/* --- QUERY TAB --- */}
        {activeTab === 'query' && (
          <div className="tab-content">
            <div className="section query-section">
              <div className="form-row">
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

              <div className="form-row">
                <div className="form-group">
                  <label>GL Group Code:</label>
                  <div className="input-pair">
                    <input
                      type="text"
                      placeholder="Code"
                      value={glGroupCode}
                      onChange={(e) => setGlGroupCode(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Group Name"
                      value={glGroupName}
                      onChange={(e) => setGlGroupName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Account No:</label>
                  <div className="input-pair">
                    <input
                      type="text"
                      placeholder="Code"
                      value={queryAccountNo}
                      onChange={(e) => setQueryAccountNo(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Account Name"
                      value={queryAccountName}
                      onChange={(e) => setQueryAccountName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="actions">
                <button className="btn-primary" onClick={handleQuery}>
                  OK
                </button>
                <button
                  className="btn-secondary"
                  onClick={handlePrintConsolidated}
                >
                  Print Consolidated Balances
                </button>
                <button className="btn-secondary" onClick={handlePrint}>
                  Print
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
        )}
      </div>
    </div>
  )
}

export default ExpenseTransactions
