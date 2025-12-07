import React, { useState } from 'react'
import '../../styles/ExecutionOfStandingInstruction.scss'

const ExecutionOfStandingInstruction = () => {
  const [form, setForm] = useState({
    serialNo: '',
    date: '',
    status: '',
    chequeFrom: '',
    chequeTo: '',
    total: 0.0,
  })

  const [tableData, setTableData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handlePopulate = () => {
    // Dummy data for table simulation
    const dummyRows = [
      { id: 1, description: 'Instruction A', amount: 120.5 },
      { id: 2, description: 'Instruction B', amount: 320.0 },
    ]
    const total = dummyRows.reduce((acc, row) => acc + row.amount, 0)
    setTableData(dummyRows)
    setForm({ ...form, total })
  }

  const handleRefresh = () => {
    setForm({
      serialNo: '',
      date: '',
      status: '',
      chequeFrom: '',
      chequeTo: '',
      total: 0.0,
    })
    setTableData([])
  }

  const handleSubmit = () => {
    console.log('Executing Standing Instructions:', form, tableData)
    alert('Execution completed successfully.')
  }

  return (
    <div className="execution-page">
      <div className="execution-card">
        <h3>Execution Of Standing Instruction</h3>

        {/* Header Fields */}
        <div className="grid-3">
          <div className="field">
            <label>Serial No</label>
            <input
              type="text"
              name="serialNo"
              value={form.serialNo}
              onChange={handleChange}
              placeholder="Enter Serial No"
            />
          </div>
          <div className="field">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={form.status}
              onChange={handleChange}
              placeholder="Enter Status"
            />
          </div>
        </div>

        {/* Cheque Range */}
        <div className="cheque-range">
          <div className="field">
            <label>Cheque No From</label>
            <input
              type="text"
              name="chequeFrom"
              value={form.chequeFrom}
              onChange={handleChange}
              placeholder="Start Cheque No"
            />
          </div>
          <div className="field">
            <label>To</label>
            <input
              type="text"
              name="chequeTo"
              value={form.chequeTo}
              onChange={handleChange}
              placeholder="End Cheque No"
            />
          </div>
          <button className="btn-populate" onClick={handlePopulate}>
            Populate
          </button>
        </div>

        {/* Table Section */}
        <div className="table-container">
          <table className="instruction-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 ? (
                tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.description}</td>
                    <td>{row.amount.toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center' }}>
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="footer-section">
          <div className="actions">
            <button className="btn-primary" onClick={handleSubmit}>
              Ok
            </button>
            <button className="btn-secondary" onClick={handleRefresh}>
              Refresh
            </button>
            <button
              className="btn-secondary"
              onClick={() => alert('Exiting Page')}
            >
              Exit
            </button>
          </div>
          <div className="total-field">
            <label>Total:</label>
            <input type="text" value={form.total.toFixed(2)} disabled />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExecutionOfStandingInstruction
