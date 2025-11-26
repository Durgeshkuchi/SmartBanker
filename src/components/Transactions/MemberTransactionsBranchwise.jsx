import React, { useState } from 'react'
import '../../styles/MemberTransactionsBranchwise.scss'

const MemberTransactionsBranchwise = () => {
  const [activeTab, setActiveTab] = useState('Transfers')

  const [formData, setFormData] = useState({
    transactionType: '',
    accountType: '',
    accountNo: '',
    branch: '',
    bankCode: '',
    instrumentNo: '',
    instrumentDate: '',
    instrumentAmount: '',
    totalAmount: '',
    customerType: 'Member',
    month: '',
    effectiveDate: '',
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
    <div className="member-branchwise-page">
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
                <label>Branch</label>
                <input
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h3 className="section-title">Instrument Details</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Bank Code</label>
                <input
                  name="bankCode"
                  value={formData.bankCode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Instrument No</label>
                <input
                  name="instrumentNo"
                  value={formData.instrumentNo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Instrument Date</label>
                <input
                  type="date"
                  name="instrumentDate"
                  value={formData.instrumentDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Amount (Rs)</label>
                <input
                  type="number"
                  name="instrumentAmount"
                  value={formData.instrumentAmount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h3 className="section-title">Credit(s)</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Customer Type</label>
                <input
                  name="customerType"
                  value={formData.customerType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Branch</label>
                <input
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Month</label>
                <input
                  type="month"
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Effective Date</label>
                <input
                  type="date"
                  name="effectiveDate"
                  value={formData.effectiveDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="table-placeholder">
              <p>Transactions Table Placeholder</p>
            </div>

            <div className="footer-buttons">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary">OK</button>
            </div>
          </div>
        )}

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

export default MemberTransactionsBranchwise
