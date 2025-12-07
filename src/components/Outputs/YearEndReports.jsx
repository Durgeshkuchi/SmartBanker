import React, { useState } from 'react'
import '../../styles/YearEndReports.scss'

const YearEndReports = () => {
  const [reportDate, setReportDate] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [reports, setReports] = useState({
    receiptsPayments: false,
    assetsGroup: false,
    reserveDepreciation: false,
    interestPaid: false,
    interestReceivable: false,
    liabilitiesGroup: false,
    establishmentStatement: false,
    interestReceived: false,
    interestPayable: false,
    incomeExpenditure: false,
    assetsBalanceSheet: false,
    liabilitiesBalanceSheet: false,
  })

  const handleCheckbox = (e) => {
    const { name, checked } = e.target
    setReports({ ...reports, [name]: checked })
  }

  const handleClear = () => {
    setReportDate('')
    setFromDate('')
    setToDate('')
    setReports({
      receiptsPayments: false,
      assetsGroup: false,
      reserveDepreciation: false,
      interestPaid: false,
      interestReceivable: false,
      liabilitiesGroup: false,
      establishmentStatement: false,
      interestReceived: false,
      interestPayable: false,
      incomeExpenditure: false,
      assetsBalanceSheet: false,
      liabilitiesBalanceSheet: false,
    })
  }

  const handleSubmit = () => {
    const selectedReports = Object.entries(reports)
      .filter(([_, v]) => v)
      .map(([k]) => k.replace(/([A-Z])/g, ' $1'))
      .join(', ')
    alert(
      selectedReports
        ? `Generating Year-End Reports for ${reportDate}\nFrom ${fromDate} to ${toDate}\nReports: ${selectedReports}`
        : 'Please select at least one report.'
    )
  }

  return (
    <div className="yearendreports-page">
      <div className="yearendreports-card">
        <h3>Year End Reports</h3>

        <div className="date-section">
          <label>Date:</label>
          <input
            type="date"
            value={reportDate}
            onChange={(e) => setReportDate(e.target.value)}
          />
          <button className="btn-outline">P/L GL Sheet</button>
        </div>

        <div className="checkbox-grid">
          <div className="column">
            <label>
              <input
                type="checkbox"
                name="receiptsPayments"
                checked={reports.receiptsPayments}
                onChange={handleCheckbox}
              />
              Receipts & Payments
            </label>
            <label>
              <input
                type="checkbox"
                name="assetsGroup"
                checked={reports.assetsGroup}
                onChange={handleCheckbox}
              />
              Assets Group
            </label>
            <label>
              <input
                type="checkbox"
                name="reserveDepreciation"
                checked={reports.reserveDepreciation}
                onChange={handleCheckbox}
              />
              Statement of Reserve for Depreciation
            </label>
            <label>
              <input
                type="checkbox"
                name="interestPaid"
                checked={reports.interestPaid}
                onChange={handleCheckbox}
              />
              Statement of Interest Paid
            </label>
            <label>
              <input
                type="checkbox"
                name="interestReceivable"
                checked={reports.interestReceivable}
                onChange={handleCheckbox}
              />
              Statement of Interest Receivable
            </label>
          </div>

          <div className="column">
            <label>
              <input
                type="checkbox"
                name="liabilitiesGroup"
                checked={reports.liabilitiesGroup}
                onChange={handleCheckbox}
              />
              Liabilities Group
            </label>
            <label>
              <input
                type="checkbox"
                name="establishmentStatement"
                checked={reports.establishmentStatement}
                onChange={handleCheckbox}
              />
              Statement of Establishment
            </label>
            <label>
              <input
                type="checkbox"
                name="interestReceived"
                checked={reports.interestReceived}
                onChange={handleCheckbox}
              />
              Statement of Interest Received
            </label>
            <label>
              <input
                type="checkbox"
                name="interestPayable"
                checked={reports.interestPayable}
                onChange={handleCheckbox}
              />
              Statement of Interest Payable
            </label>
            <label>
              <input
                type="checkbox"
                name="incomeExpenditure"
                checked={reports.incomeExpenditure}
                onChange={handleCheckbox}
              />
              Income & Expenditure
            </label>
          </div>
        </div>

        <div className="range-section">
          <label>From:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <label>To:</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>

        <div className="balance-checkboxes">
          <label>
            <input
              type="checkbox"
              name="assetsBalanceSheet"
              checked={reports.assetsBalanceSheet}
              onChange={handleCheckbox}
            />
            Assets Balance Sheet
          </label>
          <label>
            <input
              type="checkbox"
              name="liabilitiesBalanceSheet"
              checked={reports.liabilitiesBalanceSheet}
              onChange={handleCheckbox}
            />
            Liabilities Balance Sheet
          </label>
        </div>

        <div className="actions">
          <button className="btn-primary" onClick={handleSubmit}>
            Ok
          </button>
          <button className="btn-secondary" onClick={handleClear}>
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default YearEndReports
