import React, { useState } from 'react'
import '../../../styles/BankReconciliation.scss'

const BankReconciliation = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    reconciliationDate: '',
    increaseTranDate: '',
    increaseDesc: '',
    increaseAmt: '',
    decreaseTranDate: '',
    decreaseDesc: '',
    decreaseAmt: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleAddIncrease = (e) => {
    e.preventDefault()
    console.log('Added Debit (Increase) Entry:', formData)
  }

  const handleAddDecrease = (e) => {
    e.preventDefault()
    console.log('Added Credit (Decrease) Entry:', formData)
  }

  const handlePrint = () => {
    console.log('Printing Bank Reconciliation Worksheet...')
  }

  return (
    <div className="bank-reconciliation-page">
      <form className="recon-card" onSubmit={handleAddIncrease}>
        <h3>Bank Reconciliation Worksheet</h3>

        <div className="grid-2">
          <div className="field">
            <label>Name of the Bank</label>
            <input
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Reconciliation Date</label>
            <input
              type="date"
              name="reconciliationDate"
              value={formData.reconciliationDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid-2">
          {/* Increase Section */}
          <section className="recon-section">
            <h4>Increase (Debits in Bank Statement)</h4>
            <div className="field">
              <label>Tran Date</label>
              <input
                type="date"
                name="increaseTranDate"
                value={formData.increaseTranDate}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Description</label>
              <input
                name="increaseDesc"
                value={formData.increaseDesc}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Amount</label>
              <input
                type="number"
                name="increaseAmt"
                value={formData.increaseAmt}
                onChange={handleChange}
              />
            </div>
            <div className="section-actions">
              <button type="submit" className="btn-primary">
                Add
              </button>
              <button type="button" className="btn-secondary">
                Cancel
              </button>
            </div>

            <table className="mini-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Tran Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>
                    No data yet
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Decrease Section */}
          <section className="recon-section">
            <h4>Decrease (Credits in Bank Statement)</h4>
            <div className="field">
              <label>Tran Date</label>
              <input
                type="date"
                name="decreaseTranDate"
                value={formData.decreaseTranDate}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Description</label>
              <input
                name="decreaseDesc"
                value={formData.decreaseDesc}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Amount</label>
              <input
                type="number"
                name="decreaseAmt"
                value={formData.decreaseAmt}
                onChange={handleChange}
              />
            </div>
            <div className="section-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={handleAddDecrease}
              >
                Add
              </button>
              <button type="button" className="btn-secondary">
                Cancel
              </button>
            </div>

            <table className="mini-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Tran Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>
                    No data yet
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="totals">
          <div className="field">
            <label>Balance As Per Our Records</label>
            <input disabled value="0.00" />
          </div>
          <div className="field">
            <label>Balance As Per Bank Statement</label>
            <input disabled value="0.00" />
          </div>
        </div>

        <div className="actions">
          <button type="button" className="btn-secondary">
            Cancel
          </button>
          <button type="button" className="btn-primary" onClick={handlePrint}>
            Print
          </button>
        </div>
      </form>
    </div>
  )
}

export default BankReconciliation
