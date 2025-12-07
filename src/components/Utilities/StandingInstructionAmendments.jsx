import React, { useState } from 'react'
import '../../styles/StandingInstructionAmendments.scss'

const StandingInstructionAmendments = () => {
  const [form, setForm] = useState({
    fromAccountType: '',
    fromAccountNo: '',
    toAccountType: '',
    toAccountNo: '',
    modeOfPayment: '',
    dateOfExecution: '',
    frequency: '',
    status: '',
    intAmount: '',
    revokeDate: '',
    maturityDate: '',
    intRate: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleClear = () => {
    setForm({
      fromAccountType: '',
      fromAccountNo: '',
      toAccountType: '',
      toAccountNo: '',
      modeOfPayment: '',
      dateOfExecution: '',
      frequency: '',
      status: '',
      intAmount: '',
      revokeDate: '',
      maturityDate: '',
      intRate: '',
    })
  }

  const handleSubmit = () => {
    console.log('Standing Instruction Amendment:', form)
    alert('Standing Instruction Amendment saved successfully.')
  }

  return (
    <div className="standing-instruction-page">
      <div className="standing-instruction-card">
        <h3>Standing Instruction Details</h3>

        <div className="section">
          <h4>Standing Instruction Details</h4>

          <div className="grid-2">
            <div className="field">
              <label>From Account Type</label>
              <input
                name="fromAccountType"
                value={form.fromAccountType}
                onChange={handleChange}
                placeholder="Enter From Account Type"
              />
            </div>
            <div className="field">
              <label>From Account No</label>
              <input
                name="fromAccountNo"
                value={form.fromAccountNo}
                onChange={handleChange}
                placeholder="Enter From Account No"
              />
            </div>

            <div className="field">
              <label>To Account Type</label>
              <input
                name="toAccountType"
                value={form.toAccountType}
                onChange={handleChange}
                placeholder="Enter To Account Type"
              />
            </div>
            <div className="field">
              <label>To Account No</label>
              <input
                name="toAccountNo"
                value={form.toAccountNo}
                onChange={handleChange}
                placeholder="Enter To Account No"
              />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="grid-3">
            <div className="field">
              <label>Mode of Payment</label>
              <input
                name="modeOfPayment"
                value={form.modeOfPayment}
                onChange={handleChange}
                placeholder="Mode (e.g., Transfer)"
              />
            </div>

            <div className="field">
              <label>Date of Execution</label>
              <input
                type="date"
                name="dateOfExecution"
                value={form.dateOfExecution}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Frequency</label>
              <select
                name="frequency"
                value={form.frequency}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
              </select>
            </div>
          </div>

          <div className="grid-3">
            <div className="field">
              <label>Status</label>
              <input
                name="status"
                value={form.status}
                onChange={handleChange}
                placeholder="R / A / C"
              />
            </div>

            <div className="field">
              <label>Interest Amount</label>
              <input
                type="number"
                name="intAmount"
                value={form.intAmount}
                onChange={handleChange}
                placeholder="0.00"
              />
            </div>

            <div className="field">
              <label>Revoke Date</label>
              <input
                type="date"
                name="revokeDate"
                value={form.revokeDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-3">
            <div className="field">
              <label>Maturity Date</label>
              <input
                type="date"
                name="maturityDate"
                value={form.maturityDate}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Interest Rate</label>
              <input
                type="number"
                name="intRate"
                value={form.intRate}
                onChange={handleChange}
                placeholder="e.g., 5.25"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
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

export default StandingInstructionAmendments
