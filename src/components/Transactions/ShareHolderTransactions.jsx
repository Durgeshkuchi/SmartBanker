import React, { useState } from 'react'
import '../../styles/ShareHolderTransactions.scss'

const ShareHolderTransactions = () => {
  const [activeTab, setActiveTab] = useState('payments')
  const [formData, setFormData] = useState({
    date: '',
    transactionNo: '',
    memberId: '',
    shareAmount: '',
    totalShares: '',
    balance: '',
    dividendAmount: '',
    noOfShares: '',
    instrument: '',
    transactionType: 'Share Capital',
    toTransaction: '',
    amount: '',
    accountHead: '',
    accountNo: '',
  })

  const [queryData, setQueryData] = useState({
    fromDate: '',
    toDate: '',
    accountNo: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleQueryChange = (e) => {
    const { name, value } = e.target
    setQueryData({ ...queryData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting Share Holder Payment:', formData)
    // TODO: Replace with API call
  }

  const handleQuery = (e) => {
    e.preventDefault()
    console.log('Query Search:', queryData)
    // TODO: API call to fetch filtered transactions
  }

  return (
    <div className="shareholder-transactions-page">
      <div className="tabs">
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

      {activeTab === 'payments' && (
        <form className="transactions-card" onSubmit={handleSubmit}>
          <h3>Share Holder Transactions - Payments</h3>

          {/* Date and Transaction No */}
          <div className="grid-2">
            <div className="field">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Transaction No</label>
              <input
                name="transactionNo"
                value={formData.transactionNo}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Account Details */}
          <section className="form-section">
            <h4>Account</h4>
            <div className="grid-3">
              <div className="field">
                <label>Member ID</label>
                <input
                  name="memberId"
                  value={formData.memberId}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Share Amount</label>
                <input
                  type="number"
                  name="shareAmount"
                  value={formData.shareAmount}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Total Shares</label>
                <input
                  type="number"
                  name="totalShares"
                  value={formData.totalShares}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid-3">
              <div className="field">
                <label>Dividend Amount</label>
                <input
                  type="number"
                  name="dividendAmount"
                  value={formData.dividendAmount}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>No of Shares</label>
                <input
                  type="number"
                  name="noOfShares"
                  value={formData.noOfShares}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Balance</label>
                <input
                  type="number"
                  name="balance"
                  value={formData.balance}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Instrument</label>
              <input
                name="instrument"
                value={formData.instrument}
                onChange={handleChange}
              />
            </div>

            {/* Transaction Type */}
            <div className="radio-group">
              <span>Transaction Amount:</span>
              <label>
                <input
                  type="radio"
                  name="transactionType"
                  value="Dividend Amount"
                  checked={formData.transactionType === 'Dividend Amount'}
                  onChange={handleChange}
                />
                Dividend Amount
              </label>
              <label>
                <input
                  type="radio"
                  name="transactionType"
                  value="Share Capital"
                  checked={formData.transactionType === 'Share Capital'}
                  onChange={handleChange}
                />
                Share Capital
              </label>
            </div>
          </section>

          {/* To Account */}
          <section className="form-section">
            <h4>To Account</h4>
            <div className="grid-3">
              <div className="field">
                <label>Transaction</label>
                <input
                  name="toTransaction"
                  value={formData.toTransaction}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Account Head</label>
                <input
                  name="accountHead"
                  value={formData.accountHead}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label>Account No</label>
              <input
                name="accountNo"
                value={formData.accountNo}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* Footer Buttons */}
          <div className="actions">
            <button type="button" className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}

      {activeTab === 'query' && (
        <form className="transactions-card" onSubmit={handleQuery}>
          <h3>Share Holder Transactions - Query</h3>

          <div className="grid-3">
            <div className="field">
              <label>From</label>
              <input
                type="date"
                name="fromDate"
                value={queryData.fromDate}
                onChange={handleQueryChange}
              />
            </div>
            <div className="field">
              <label>To</label>
              <input
                type="date"
                name="toDate"
                value={queryData.toDate}
                onChange={handleQueryChange}
              />
            </div>
            <div className="field">
              <label>Account No</label>
              <input
                name="accountNo"
                value={queryData.accountNo}
                onChange={handleQueryChange}
              />
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="btn-primary">
              Search
            </button>
            <button type="button" className="btn-secondary">
              Print
            </button>
          </div>

          {/* Placeholder for query results */}
          <div className="results-table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Account No</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>
                    No results yet.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      )}
    </div>
  )
}

export default ShareHolderTransactions
