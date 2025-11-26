import React, { useState } from 'react'
import '../../styles/SingleMultipleTransactions.scss'

const SingleMultipleTransactions = () => {
  const [activeTab, setActiveTab] = useState('Transfers')

  const [formData, setFormData] = useState({
    transactionType: '',
    accountType: '',
    accountNo: '',
    amount: '',
    totalAmount: '',
    clearBalance: '',
    limitAmount: '',
    remarks: '',
    creditTransactionType: '',
    creditAccountType: '',
    creditAccountNo: '',
    bankCode: '',
    branchCode: '',
    applName: '',
    favouring: '',
    creditAmount: '',
    creditTotalAmount: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [queryData, setQueryData] = useState({
    fromDate: '',
    toDate: '',
    accountType: '',
    accountNo: '',
  })

  const handleQueryChange = (e) => {
    const { name, value } = e.target
    setQueryData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="single-multiple-page">
      <div className="wizard-card">
        <div className="tabs">
          {['Transfers', 'Query'].map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Transfers */}
        {activeTab === 'Transfers' && (
          <div className="tab-content transfers">
            <h3 className="section-title">Debit(s)</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Transaction Type</label>
                <input
                  name="transactionType"
                  value={formData.transactionType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Account Type</label>
                <input
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Account No</label>
                <input
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Clear Balance (Rs)</label>
                <input
                  type="number"
                  name="clearBalance"
                  value={formData.clearBalance}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Limit Amount (Rs)</label>
                <input
                  type="number"
                  name="limitAmount"
                  value={formData.limitAmount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group remarks">
              <label>Remarks</label>
              <textarea
                name="remarks"
                rows="3"
                value={formData.remarks}
                onChange={handleChange}
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Amount (Rs)</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Total Amount (Rs)</label>
                <input
                  type="number"
                  name="totalAmount"
                  value={formData.totalAmount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h3 className="section-title">Credit(s)</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Transaction Type</label>
                <input
                  name="creditTransactionType"
                  value={formData.creditTransactionType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Account Type</label>
                <input
                  name="creditAccountType"
                  value={formData.creditAccountType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Account No</label>
                <input
                  name="creditAccountNo"
                  value={formData.creditAccountNo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Bank Code</label>
                <input
                  name="bankCode"
                  value={formData.bankCode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Branch Code</label>
                <input
                  name="branchCode"
                  value={formData.branchCode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Appl Name</label>
                <input
                  name="applName"
                  value={formData.applName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Favouring</label>
                <input
                  name="favouring"
                  value={formData.favouring}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Amount (Rs)</label>
                <input
                  type="number"
                  name="creditAmount"
                  value={formData.creditAmount}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Total Amount (Rs)</label>
                <input
                  type="number"
                  name="creditTotalAmount"
                  value={formData.creditTotalAmount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="footer-buttons">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary">OK</button>
            </div>
          </div>
        )}

        {/* Query */}
        {activeTab === 'Query' && (
          <div className="tab-content query">
            <h3 className="section-title">Account Details</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>From Date</label>
                <input
                  type="date"
                  name="fromDate"
                  value={queryData.fromDate}
                  onChange={handleQueryChange}
                />
              </div>
              <div className="form-group">
                <label>To Date</label>
                <input
                  type="date"
                  name="toDate"
                  value={queryData.toDate}
                  onChange={handleQueryChange}
                />
              </div>
              <div className="form-group">
                <label>Account Type</label>
                <input
                  name="accountType"
                  value={queryData.accountType}
                  onChange={handleQueryChange}
                />
              </div>
              <div className="form-group">
                <label>Account No</label>
                <input
                  name="accountNo"
                  value={queryData.accountNo}
                  onChange={handleQueryChange}
                />
              </div>
            </div>

            <div className="table-placeholder">
              <p>Transaction Query Results</p>
            </div>

            <div className="footer-buttons">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary">Print</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleMultipleTransactions
