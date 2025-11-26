import React, { useState } from 'react'
import '../../styles/CashTransactions.scss'

const CashTransactions = () => {
  const tabs = [
    'Payments / Receipts',
    'Payments',
    'Cashier Denominations',
    'Cash Scroll',
  ]
  const [activeTab, setActiveTab] = useState(tabs[0])

  const [cashData, setCashData] = useState({
    dayBegin: 0,
    currentAmt: 0,
    transactionNo: '',
    scrollNo: '',
    tokenNo: '',
    transactionType: '',
    groupCode: '',
    accountNo: '',
    amount: '',
    remarks: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCashData((prev) => ({ ...prev, [name]: value }))
  }

  const [denominations, setDenominations] = useState([
    { value: 1000, qty: 0 },
    { value: 500, qty: 0 },
    { value: 100, qty: 0 },
    { value: 50, qty: 0 },
    { value: 20, qty: 0 },
    { value: 10, qty: 0 },
    { value: 5, qty: 0 },
    { value: 2, qty: 0 },
    { value: 1, qty: 0 },
  ])

  const handleDenominationChange = (index, qty) => {
    const updated = [...denominations]
    updated[index].qty = parseInt(qty || 0)
    setDenominations(updated)
  }

  const totalAmount = denominations.reduce((acc, d) => acc + d.qty * d.value, 0)

  const [scrollRecords, setScrollRecords] = useState([
    {
      scrollNo: 1,
      tokenNo: 0,
      tranNo: 1,
      tranDate: '2024-12-31',
      tranKey: 125,
      accountType: 301002,
      accountNo: 222,
      amount: 300.0,
      rs1000: 0,
      rs500: 0,
    },
  ])

  const addScrollRecord = () => {
    setScrollRecords((prev) => [
      ...prev,
      {
        scrollNo: prev.length + 1,
        tokenNo: 0,
        tranNo: prev.length + 1,
        tranDate: new Date().toISOString().slice(0, 10),
        tranKey: 125,
        accountType: '',
        accountNo: '',
        amount: '',
        rs1000: 0,
        rs500: 0,
      },
    ])
  }

  return (
    <div className="cash-transactions-page">
      <div className="wizard-card">
        {/* Tabs */}
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

        {/* ---------------- Payments / Receipts ---------------- */}
        {activeTab === 'Payments / Receipts' && (
          <div className="tab-content">
            <div className="header-section">
              <div className="field">
                <label>Day Begin Amt (Rs)</label>
                <input
                  type="number"
                  name="dayBegin"
                  value={cashData.dayBegin}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Current Amt (Rs)</label>
                <input
                  type="number"
                  name="currentAmt"
                  value={cashData.currentAmt}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label>Transaction No</label>
                <input
                  name="transactionNo"
                  value={cashData.transactionNo}
                  onChange={handleChange}
                  placeholder="Enter Transaction No"
                />
              </div>
            </div>

            <div className="form-grid">
              {[
                ['scrollNo', 'Scroll No'],
                ['tokenNo', 'Token No'],
                ['transactionType', 'Transaction Type'],
                ['groupCode', 'Group Code'],
                ['accountNo', 'Account No'],
                ['amount', 'Amount (Rs)'],
              ].map(([name, label]) => (
                <div key={name} className="form-group">
                  <label>{label}</label>
                  <input
                    name={name}
                    value={cashData[name]}
                    onChange={handleChange}
                    placeholder={`Enter ${label}`}
                    type={name === 'amount' ? 'number' : 'text'}
                  />
                </div>
              ))}
              <div className="form-group full-width">
                <label>Remarks</label>
                <input
                  name="remarks"
                  value={cashData.remarks}
                  onChange={handleChange}
                  placeholder="Enter remarks"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Cashier Denominations' && (
          <div className="tab-content denominations">
            <h4>Cash Denominations</h4>
            <table>
              <thead>
                <tr>
                  <th>Denomination</th>
                  <th>Qty</th>
                  <th>Amount (Rs)</th>
                </tr>
              </thead>
              <tbody>
                {denominations.map((d, i) => (
                  <tr key={d.value}>
                    <td>{d.value}</td>
                    <td>
                      <input
                        type="number"
                        value={d.qty}
                        onChange={(e) =>
                          handleDenominationChange(i, e.target.value)
                        }
                      />
                    </td>
                    <td>{(d.qty * d.value).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" className="total-label">
                    Total (Rs)
                  </td>
                  <td className="total">{totalAmount.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}

        {activeTab === 'Cash Scroll' && (
          <div className="tab-content scroll">
            <div className="scroll-header">
              <div className="field">
                <label>User Name</label>
                <input type="text" value="ram" readOnly />
              </div>
              <div className="field">
                <label>As On</label>
                <input type="date" defaultValue="2024-12-31" />
              </div>
            </div>

            <table className="scroll-table">
              <thead>
                <tr>
                  <th>Scroll No</th>
                  <th>Token No</th>
                  <th>Tran No</th>
                  <th>Tran Date</th>
                  <th>Tran Key</th>
                  <th>Account Type</th>
                  <th>Account No</th>
                  <th>Amount</th>
                  <th>1000(Rs)</th>
                  <th>500(Rs)</th>
                </tr>
              </thead>
              <tbody>
                {scrollRecords.map((r, i) => (
                  <tr key={i}>
                    {Object.values(r).map((val, j) => (
                      <td key={j}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="actions">
              <button className="btn-secondary" onClick={addScrollRecord}>
                Add Record
              </button>
              <button className="btn-primary">Print</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CashTransactions
