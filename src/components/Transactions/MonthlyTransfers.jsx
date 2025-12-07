import React, { useState } from 'react'
import '../../styles/MonthlyTransfers.scss'

const MonthlyTransfers = () => {
  const [month, setMonth] = useState('')
  const [rows, setRows] = useState([
    {
      fromGLCode: '',
      fromDescription: '',
      toGLCode: '',
      toDescription: '',
      monthlyAmount: '',
      percent: '',
      trAmount: '',
    },
  ])

  const handleRowChange = (index, e) => {
    const { name, value } = e.target
    const updatedRows = [...rows]
    updatedRows[index][name] = value
    setRows(updatedRows)
  }

  const addRow = () => {
    setRows([
      ...rows,
      {
        fromGLCode: '',
        fromDescription: '',
        toGLCode: '',
        toDescription: '',
        monthlyAmount: '',
        percent: '',
        trAmount: '',
      },
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { month, transfers: rows }
    console.log('Submitting Monthly Transfers:', payload)
    // TODO: Replace console.log with backend API call
  }

  return (
    <div className="monthly-transfers-page">
      <form className="transfers-card" onSubmit={handleSubmit}>
        <h3>Monthly Transfers</h3>

        {/* Month Selector */}
        <div className="month-selector">
          <label>Month</label>
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>From GL Code</th>
                <th>From Description</th>
                <th>To GL Code</th>
                <th>To Description</th>
                <th>Monthly Amount</th>
                <th>Percent (%)</th>
                <th>Tr. Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      name="fromGLCode"
                      value={row.fromGLCode}
                      onChange={(e) => handleRowChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      name="fromDescription"
                      value={row.fromDescription}
                      onChange={(e) => handleRowChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      name="toGLCode"
                      value={row.toGLCode}
                      onChange={(e) => handleRowChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      name="toDescription"
                      value={row.toDescription}
                      onChange={(e) => handleRowChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="monthlyAmount"
                      value={row.monthlyAmount}
                      onChange={(e) => handleRowChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="percent"
                      value={row.percent}
                      onChange={(e) => handleRowChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="trAmount"
                      value={row.trAmount}
                      onChange={(e) => handleRowChange(index, e)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-actions">
          <button type="button" className="btn-secondary" onClick={addRow}>
            + Add Row
          </button>
        </div>

        {/* Footer Buttons */}
        <div className="actions">
          <button type="button" className="btn-secondary">
            Refresh
          </button>
          <button type="button" className="btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default MonthlyTransfers
