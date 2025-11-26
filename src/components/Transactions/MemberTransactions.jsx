import React, { useState } from 'react'
import '../../styles/MemberTransactions.scss'

const MemberTransactions = () => {
  const tabs = ['Transfers', 'Query']
  const [activeTab, setActiveTab] = useState(tabs[0])

  const [formData, setFormData] = useState({
    transactionType: '',
    transactionDesc: '',
    accountType: '',
    accountDesc: '',
    accountNo: '',
    branch: '',
    bankCode: '',
    bankDesc: '',
    instrNo: '',
    instrType: 'Online',
    instrDate: '',
    instrAmount: '',
    totalAmount: '',
    customerType: 'Member',
    monthOf: '',
    memberId: '',
    hlNo: '',
    mtlNo: '',
    thriftNo: '',
    mbfNo: '',
    rdNo: '',
    suspAcc: '',
    total: '',
    effectiveDate: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Query tab state
  const [query, setQuery] = useState({
    fromDate: '',
    toDate: '',
    accountType: '',
    accountNo: '',
  })

  const handleQueryChange = (e) => {
    const { name, value } = e.target
    setQuery((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    console.log('Submitted Data:', formData)
  }

  return (
    <div className="member-transactions-page">
      <div className="wizard-card">
        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Transfers Tab */}
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
                  placeholder="Enter Type"
                />
              </div>
              <div className="form-group">
                <label>Account Type</label>
                <input
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  placeholder="Enter Account Type"
                />
              </div>
              <div className="form-group">
                <label>Account No</label>
                <input
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleChange}
                  placeholder="Enter Account No"
                />
              </div>
              <div className="form-group">
                <label>Branch</label>
                <input
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  placeholder="Enter Branch"
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
                  name="instrNo"
                  value={formData.instrNo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Instrument Date</label>
                <input
                  type="date"
                  name="instrDate"
                  value={formData.instrDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input
                  type="number"
                  name="instrAmount"
                  value={formData.instrAmount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h3 className="section-title">Credit(s)</h3>
            <div className="form-grid">
              {['HL', 'MTL', 'Thrift', 'MBF', 'RD', 'SuspAcc'].map((v) => (
                <div key={v} className="form-group">
                  <label>{v} No</label>
                  <input
                    name={`${v.toLowerCase()}No`}
                    value={formData[`${v.toLowerCase()}No`]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            <div className="footer-buttons">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary" onClick={handleSubmit}>
                OK
              </button>
            </div>
          </div>
        )}

        {/* Query Tab */}
        {activeTab === 'Query' && (
          <div className="tab-content query">
            <h3 className="section-title">Account Details</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>From Date</label>
                <input
                  type="date"
                  name="fromDate"
                  value={query.fromDate}
                  onChange={handleQueryChange}
                />
              </div>
              <div className="form-group">
                <label>To Date</label>
                <input
                  type="date"
                  name="toDate"
                  value={query.toDate}
                  onChange={handleQueryChange}
                />
              </div>
              <div className="form-group">
                <label>Account Type</label>
                <input
                  name="accountType"
                  value={query.accountType}
                  onChange={handleQueryChange}
                />
              </div>
              <div className="form-group">
                <label>Account No</label>
                <input
                  name="accountNo"
                  value={query.accountNo}
                  onChange={handleQueryChange}
                />
              </div>
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

export default MemberTransactions
