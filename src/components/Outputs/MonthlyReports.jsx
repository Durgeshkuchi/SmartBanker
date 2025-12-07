import React, { useState } from 'react'
import '../../styles/MonthlyReports.scss'

const MonthlyReports = () => {
  const [reportDate, setReportDate] = useState('')
  const [months, setMonths] = useState('3')
  const [reports, setReports] = useState({
    irregularLoans: false,
    accruedDepositInterest: false,
    accruedLoanInterest: false,
    accruedLoanDepositHeadwise: false,
    statusList: false,
    customerAmendment: false,
    shareholdersList: false,
    loansQuarterInterest: false,
    interestAccrualReport: false,
  })

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setReports({ ...reports, [name]: checked })
  }

  const handleClear = () => {
    setReportDate('')
    setMonths('3')
    setReports({
      irregularLoans: false,
      accruedDepositInterest: false,
      accruedLoanInterest: false,
      accruedLoanDepositHeadwise: false,
      statusList: false,
      customerAmendment: false,
      shareholdersList: false,
      loansQuarterInterest: false,
      interestAccrualReport: false,
    })
  }

  const handleSubmit = () => {
    const selected = Object.entries(reports)
      .filter(([_, v]) => v)
      .map(([key]) => key.replace(/([A-Z])/g, ' $1'))
      .join(', ')
    alert(
      selected
        ? `Generating Monthly Reports for ${reportDate} (${months} months):\n${selected}`
        : 'Please select at least one report.'
    )
  }

  return (
    <div className="monthlyreports-page">
      <div className="monthlyreports-card">
        <h3>Monthly Reports</h3>

        <div className="date-row">
          <label>Irregular Loan Accounts as on:</label>
          <input
            type="date"
            value={reportDate}
            onChange={(e) => setReportDate(e.target.value)}
          />
          <label>Months</label>
          <input
            type="number"
            min="1"
            max="12"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="months-input"
          />
        </div>

        <div className="checkbox-grid">
          <div className="column">
            <label>
              <input
                type="checkbox"
                name="irregularLoans"
                checked={reports.irregularLoans}
                onChange={handleCheckboxChange}
              />
              Irregular Loan Accounts
            </label>
            <label>
              <input
                type="checkbox"
                name="accruedDepositInterest"
                checked={reports.accruedDepositInterest}
                onChange={handleCheckboxChange}
              />
              Accrued Interest for Deposit Accounts
            </label>
            <label>
              <input
                type="checkbox"
                name="accruedLoanInterest"
                checked={reports.accruedLoanInterest}
                onChange={handleCheckboxChange}
              />
              Accrued Interest for Loan Accounts
            </label>
            <label>
              <input
                type="checkbox"
                name="accruedLoanDepositHeadwise"
                checked={reports.accruedLoanDepositHeadwise}
                onChange={handleCheckboxChange}
              />
              Accrued Interest for Loans & Deposits Headwise
            </label>
            <label>
              <input
                type="checkbox"
                name="statusList"
                checked={reports.statusList}
                onChange={handleCheckboxChange}
              />
              Status List
            </label>
          </div>

          <div className="column">
            <label>
              <input
                type="checkbox"
                name="loansQuarterInterest"
                checked={reports.loansQuarterInterest}
                onChange={handleCheckboxChange}
              />
              Loans Quarter Interest
            </label>
            <label>
              <input
                type="checkbox"
                name="interestAccrualReport"
                checked={reports.interestAccrualReport}
                onChange={handleCheckboxChange}
              />
              Interest Accrual Report
            </label>
            <label>
              <input
                type="checkbox"
                name="customerAmendment"
                checked={reports.customerAmendment}
                onChange={handleCheckboxChange}
              />
              Customer Amendment
            </label>
            <label>
              <input
                type="checkbox"
                name="shareholdersList"
                checked={reports.shareholdersList}
                onChange={handleCheckboxChange}
              />
              List of Shareholders
            </label>
          </div>
        </div>

        <div className="actions">
          <button className="btn-primary" onClick={handleSubmit}>
            Ok
          </button>
          <button className="btn-secondary" onClick={handleClear}>
            Cancel
          </button>
          <button
            className="btn-secondary"
            onClick={() => alert('Exiting Page')}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default MonthlyReports
