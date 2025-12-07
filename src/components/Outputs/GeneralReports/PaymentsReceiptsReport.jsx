import React, { useState } from 'react'
import '../../../styles/PaymentsReceiptsReport.scss'

const PaymentsReceiptsReport = () => {
  const [sheetType, setSheetType] = useState('full')
  const [mainDate, setMainDate] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [includeReceipts, setIncludeReceipts] = useState(true)

  const handleGenerate = () => {
    alert(
      `Generating Payments & Receipts Report\n` +
        `Main Date: ${mainDate}\n` +
        `From: ${fromDate} To: ${toDate}\n` +
        `Sheet Type: ${sheetType === 'full' ? 'Full GL Sheet' : 'GL Sheet'}\n` +
        `Include Receipts/Payments: ${includeReceipts ? 'Yes' : 'No'}`
    )
  }

  const handleClear = () => {
    setSheetType('full')
    setMainDate('')
    setFromDate('')
    setToDate('')
    setIncludeReceipts(true)
  }

  return (
    <div className="paymentsreceipts-page">
      <div className="paymentsreceipts-card">
        <h3>Payments & Receipts Report</h3>

        {/* Main Date and Sheet Type */}
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

        {/* Date Range Section */}
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

        {/* Actions */}
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

export default PaymentsReceiptsReport
