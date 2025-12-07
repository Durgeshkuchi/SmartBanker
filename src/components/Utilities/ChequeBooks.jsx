import React, { useState } from 'react'
import '../../styles/ChequeBooks.scss'

const ChequeBooks = () => {
  const [form, setForm] = useState({
    option: 'add',
    bankName: '',
    accountNo: '',
    noOfLeaves: '',
    series: '',
    startLeaf: '',
    endLeaf: '',
    issueDate: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleClear = () => {
    setForm({
      option: 'add',
      bankName: '',
      accountNo: '',
      noOfLeaves: '',
      series: '',
      startLeaf: '',
      endLeaf: '',
      issueDate: '',
    })
  }

  const handleSubmit = () => {
    console.log('Cheque Book Details:', form)
    alert('Cheque Book saved successfully.')
  }

  return (
    <div className="cheque-book-page">
      <div className="cheque-book-card">
        <h3>Cheque Book Issues</h3>

        {/* Cheque Book Option */}
        <div className="options-group">
          <label className="group-label">Cheque Book:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="option"
                value="add"
                checked={form.option === 'add'}
                onChange={handleChange}
              />
              Add
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="delete"
                checked={form.option === 'delete'}
                onChange={handleChange}
              />
              Delete / Running / Closing
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="close"
                checked={form.option === 'close'}
                onChange={handleChange}
              />
              Close
            </label>
          </div>
        </div>

        {/* Cheque Details */}
        <div className="details-section">
          <h4>Cheque Details</h4>
          <div className="grid-2">
            <div className="field">
              <label>Bank Name</label>
              <input
                name="bankName"
                value={form.bankName}
                onChange={handleChange}
                placeholder="Enter Bank Name"
              />
            </div>
            <div className="field">
              <label>Account No</label>
              <input
                name="accountNo"
                value={form.accountNo}
                onChange={handleChange}
                placeholder="Enter Account No"
              />
            </div>
            <div className="field">
              <label>No of Leaves</label>
              <input
                type="number"
                name="noOfLeaves"
                value={form.noOfLeaves}
                onChange={handleChange}
                placeholder="Enter No of Leaves"
              />
            </div>
            <div className="field">
              <label>Cheque Book Series</label>
              <input
                name="series"
                value={form.series}
                onChange={handleChange}
                placeholder="Series (e.g., A/B)"
              />
            </div>

            <div className="field">
              <label>Start Leaf Number</label>
              <input
                type="number"
                name="startLeaf"
                value={form.startLeaf}
                onChange={handleChange}
                placeholder="Start No"
              />
            </div>
            <div className="field">
              <label>Ending Leaf No</label>
              <input
                type="number"
                name="endLeaf"
                value={form.endLeaf}
                onChange={handleChange}
                placeholder="End No"
              />
            </div>

            <div className="field">
              <label>Date of Issue</label>
              <input
                type="date"
                name="issueDate"
                value={form.issueDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Actions */}
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

export default ChequeBooks
