import React, { useState } from 'react'
import '../../../styles/BankReconciliation.scss'

const ReconciliationModification = () => {
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    bankName: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }

  const handleSearch = () => {
    console.log('Searching Reconciliation Records:', filters)
  }

  return (
    <div className="bank-reconciliation-page">
      <form className="recon-card" onSubmit={(e) => e.preventDefault()}>
        <h3>Reconciliation Modification</h3>

        <div className="grid-3">
          <div className="field">
            <label>From Date</label>
            <input
              type="date"
              name="fromDate"
              value={filters.fromDate}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>To Date</label>
            <input
              type="date"
              name="toDate"
              value={filters.toDate}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Name of Bank</label>
            <input
              name="bankName"
              value={filters.bankName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="actions">
          <button type="button" className="btn-primary" onClick={handleSearch}>
            Search
          </button>
          <button type="button" className="btn-secondary">
            Clear
          </button>
          <button type="button" className="btn-secondary">
            Grid Print
          </button>
        </div>

        <table className="results-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Tran Date</th>
              <th>Tran No</th>
              <th>Description</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Balance</th>
              <th>Recon Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="9" style={{ textAlign: 'center' }}>
                No records found
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default ReconciliationModification
