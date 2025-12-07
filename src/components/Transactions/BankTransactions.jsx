import React, { useState } from 'react'
import '../../styles/BankTransactions.scss'

const BankTransactions = () => {
  const [activeTab, setActiveTab] = useState('payments')

  const [formData, setFormData] = useState({
    accountNo: '',
    name: '',
    bankCode: '',
    balance: '',
    instrument: '',
    toTransaction: '',
    amount: '',
    admissionFee: '',
    accountHead: '',
    toAccountNo: '',
    modeOfPayment: '',
    chequeDate: '',
    favouring: '',
  })

  const [receiptData, setReceiptData] = useState({
    fromDate: '',
    toDate: '',
    bankGLCode: '',
    accountNo: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleReceiptChange = (e) => {
    const { name, value } = e.target
    setReceiptData({ ...receiptData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting Bank Transaction:', formData)
    // TODO: Backend API integration
  }

  const handleRefresh = (e) => {
    e.preventDefault()
    console.log('Refreshing Receipts:', receiptData)
    // TODO: Fetch from API
  }

  return (
    <div className="bank-transactions-page">
      <div className="tabs">
        <button
          className={activeTab === 'payments' ? 'active' : ''}
          onClick={() => setActiveTab('payments')}
        >
          Payments
        </button>
        <button
          className={activeTab === 'receipts' ? 'active' : ''}
          onClick={() => setActiveTab('receipts')}
        >
          Receipts
        </button>
      </div>

      {/* Payments Form */}
      {activeTab === 'payments' && (
        <form className="transactions-card" onSubmit={handleSubmit}>
          <h3>Bank Account Transactions - Payments</h3>

          {/* Account Section */}
          <section className="form-section">
            <h4>Account</h4>
            <div className="grid-3">
              <div className="field">
                <label>Account No</label>
                <input
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
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

            <div className="grid-2">
              <div className="field">
                <label>Instrument</label>
                <input
                  name="instrument"
                  value={formData.instrument}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Bank Code</label>
                <input
                  name="bankCode"
                  value={formData.bankCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* To Account Section */}
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
                <label>Admission Fee</label>
                <input
                  type="number"
                  name="admissionFee"
                  value={formData.admissionFee}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid-2">
              <div className="field">
                <label>Account Head</label>
                <input
                  name="accountHead"
                  value={formData.accountHead}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Account No</label>
                <input
                  name="toAccountNo"
                  value={formData.toAccountNo}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Cheque Details */}
          <section className="form-section">
            <h4>Cheque Details</h4>
            <div className="grid-3">
              <div className="field">
                <label>Mode of Payment</label>
                <input
                  name="modeOfPayment"
                  value={formData.modeOfPayment}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Cheque Date</label>
                <input
                  type="date"
                  name="chequeDate"
                  value={formData.chequeDate}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Favouring</label>
                <input
                  name="favouring"
                  value={formData.favouring}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

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

      {/* Receipts Tab */}
      {activeTab === 'receipts' && (
        <form className="transactions-card" onSubmit={handleRefresh}>
          <h3>Bank Account Transactions - Receipts</h3>

          <div className="grid-3">
            <div className="field">
              <label>From</label>
              <input
                type="date"
                name="fromDate"
                value={receiptData.fromDate}
                onChange={handleReceiptChange}
              />
            </div>
            <div className="field">
              <label>To</label>
              <input
                type="date"
                name="toDate"
                value={receiptData.toDate}
                onChange={handleReceiptChange}
              />
            </div>
            <div className="field">
              <label>Bank GL Code</label>
              <input
                name="bankGLCode"
                value={receiptData.bankGLCode}
                onChange={handleReceiptChange}
              />
            </div>
          </div>

          <div className="field">
            <label>Account No</label>
            <input
              name="accountNo"
              value={receiptData.accountNo}
              onChange={handleReceiptChange}
            />
          </div>

          <div className="actions">
            <button type="submit" className="btn-primary">
              Refresh
            </button>
          </div>

          <div className="results-table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Account No</th>
                  <th>Transaction</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>
                    No data available
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

export default BankTransactions
