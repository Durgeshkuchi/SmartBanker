import React, { useState } from 'react'
import '../../styles/DayReports.scss'

const DayReports = () => {
  const [reportDate, setReportDate] = useState('')
  const [reports, setReports] = useState({
    generalLedger: false,
    cashTransactions: false,
    consolidateDayBook: false,
    bankTransactions: false,
    sundryDepositCredit: false,
    suspenseCredit: false,
    dayBookTransactions: false,
    depositsDebitBalance: false,
    loansCreditBalance: false,
    accruedLoans: false,
    accruedDeposits: false,
    sundryDepositDebit: false,
    suspenseDebit: false,
  })

  const handleCheckbox = (e) => {
    const { name, checked } = e.target
    setReports({ ...reports, [name]: checked })
  }

  const handleClear = () => {
    setReportDate('')
    setReports({
      generalLedger: false,
      cashTransactions: false,
      consolidateDayBook: false,
      bankTransactions: false,
      sundryDepositCredit: false,
      suspenseCredit: false,
      dayBookTransactions: false,
      depositsDebitBalance: false,
      loansCreditBalance: false,
      accruedLoans: false,
      accruedDeposits: false,
      sundryDepositDebit: false,
      suspenseDebit: false,
    })
  }

  const handleSubmit = () => {
    const selectedReports = Object.entries(reports)
      .filter(([_, value]) => value)
      .map(([key]) => key.replace(/([A-Z])/g, ' $1'))
      .join(', ')
    alert(
      selectedReports
        ? `Day Reports generated for ${reportDate}:\n${selectedReports}`
        : 'No reports selected.'
    )
  }

  return (
    <div className="dayreports-page">
      <div className="dayreports-card">
        <h3>Day Reports After EOD</h3>

        <div className="date-section">
          <label>Date:</label>
          <input
            type="date"
            value={reportDate}
            onChange={(e) => setReportDate(e.target.value)}
          />
        </div>

        <div className="checkbox-grid">
          <div className="column">
            <label>
              <input
                type="checkbox"
                name="generalLedger"
                checked={reports.generalLedger}
                onChange={handleCheckbox}
              />
              General Ledger
            </label>
            <label>
              <input
                type="checkbox"
                name="cashTransactions"
                checked={reports.cashTransactions}
                onChange={handleCheckbox}
              />
              Cash Transactions
            </label>
            <label>
              <input
                type="checkbox"
                name="consolidateDayBook"
                checked={reports.consolidateDayBook}
                onChange={handleCheckbox}
              />
              Consolidate Day Book
            </label>
            <label>
              <input
                type="checkbox"
                name="bankTransactions"
                checked={reports.bankTransactions}
                onChange={handleCheckbox}
              />
              Bank Transactions
            </label>
            <label>
              <input
                type="checkbox"
                name="sundryDepositCredit"
                checked={reports.sundryDepositCredit}
                onChange={handleCheckbox}
              />
              Sundry Deposit Credit
            </label>
            <label>
              <input
                type="checkbox"
                name="suspenseCredit"
                checked={reports.suspenseCredit}
                onChange={handleCheckbox}
              />
              Suspense Credit
            </label>
          </div>

          <div className="column">
            <label>
              <input
                type="checkbox"
                name="dayBookTransactions"
                checked={reports.dayBookTransactions}
                onChange={handleCheckbox}
              />
              Day Book Transactions
            </label>
            <label>
              <input
                type="checkbox"
                name="depositsDebitBalance"
                checked={reports.depositsDebitBalance}
                onChange={handleCheckbox}
              />
              Deposits with Debit Balance
            </label>
            <label>
              <input
                type="checkbox"
                name="loansCreditBalance"
                checked={reports.loansCreditBalance}
                onChange={handleCheckbox}
              />
              Loans with Credit Balance
            </label>
            <label>
              <input
                type="checkbox"
                name="accruedLoans"
                checked={reports.accruedLoans}
                onChange={handleCheckbox}
              />
              Accrued Interest Balances for Loans
            </label>
            <label>
              <input
                type="checkbox"
                name="accruedDeposits"
                checked={reports.accruedDeposits}
                onChange={handleCheckbox}
              />
              Accrued Interest Balances for Deposits
            </label>
            <label>
              <input
                type="checkbox"
                name="sundryDepositDebit"
                checked={reports.sundryDepositDebit}
                onChange={handleCheckbox}
              />
              Sundry Deposit Debit
            </label>
            <label>
              <input
                type="checkbox"
                name="suspenseDebit"
                checked={reports.suspenseDebit}
                onChange={handleCheckbox}
              />
              Suspense Debit
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

export default DayReports
