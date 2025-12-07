import React, { useState } from 'react'
import '../../../styles/BalanceSheetReport.scss'

const BalanceSheetReport = () => {
  const [mainDate, setMainDate] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [sheetType, setSheetType] = useState('full')
  const [includeReceipts, setIncludeReceipts] = useState(true)

  const handleGenerate = () => {
    alert(
      `Generating Balance Sheet Report\n` +
        `Date: ${mainDate}\nFrom: ${fromDate} To: ${toDate}\n` +
        `Sheet Type: ${sheetType === 'full' ? 'Full GL Sheet' : 'GL Sheet'}\n` +
        `Include Receipts & Payments: ${includeReceipts ? 'Yes' : 'No'}`
    )
  }

  const handleClear = () => {
    setMainDate('')
    setFromDate('')
    setToDate('')
    setSheetType('full')
    setIncludeReceipts(true)
  }

  return (
    <div className="balancesheet-page">
      <div className="balancesheet-card">
        <h3>Balance Sheet Report</h3>

        {/* Section 1: GL & Balance Sheet */}
        <div className="section">
          <h4>Any Date GL & Balance Sheet</h4>
          <div className="row">
            <label>Date:</label>
            <input
              type="date"
              value={mainDate}
              onChange={(e) => setMainDate(e.target.value)}
            />
          </div>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="sheetType"
                value="full"
                checked={sheetType === 'full'}
                onChange={(e) => setSheetType(e.target.value)}
              />
              Full GL Sheet
            </label>
            <label>
              <input
                type="radio"
                name="sheetType"
                value="gl"
                checked={sheetType === 'gl'}
                onChange={(e) => setSheetType(e.target.value)}
              />
              GL Sheet
            </label>
          </div>
        </div>

        {/* Section 2: Date Range */}
        <div className="section">
          <h4>Date Range</h4>
          <div className="row">
            <label>From Date:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="row">
            <label>To Date:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={includeReceipts}
                onChange={(e) => setIncludeReceipts(e.target.checked)}
              />
              Receipts & Payments
            </label>
          </div>
        </div>

        {/* Section 3: Buttons */}
        <div className="actions">
          <button className="btn-primary" onClick={handleGenerate}>
            Report
          </button>
          <button className="btn-secondary" onClick={handleClear}>
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default BalanceSheetReport
