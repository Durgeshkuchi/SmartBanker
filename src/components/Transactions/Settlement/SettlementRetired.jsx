import React, { useState } from 'react'
import '../../../styles/SettlementRetired.scss'

const SettlementRetired = () => {
  const [formData, setFormData] = useState({
    memberId: '',
    depType: '',
    accountNo: '',
    interestAmount: '',
    balanceAmount: '',
    shareCapital: '',
    remarks: '',
    chequeAmount: '',
    chequeNo: '',
    favouring: '',
    glType: '',
    accountType: '',
    creditAccountNo: '',
    amount: '',
    totalAmount: '',
    bankCode: '',
    branchCode: '',
    applName: '',
    instrFavouring: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting Settlement (Retired):', formData)
    // TODO: Replace this console.log with backend API call
  }

  return (
    <div className="settlement-retired-page">
      <form className="settlement-card" onSubmit={handleSubmit}>
        <h3>Thrift Payments / Settlement (Retired)</h3>

        {/* Member Info */}
        <section className="form-section">
          <h4>Member Details</h4>
          <div className="grid-3">
            <div className="field">
              <label>Member ID</label>
              <input
                name="memberId"
                value={formData.memberId}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Dep Type</label>
              <input
                name="depType"
                value={formData.depType}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Account No</label>
              <input
                name="accountNo"
                value={formData.accountNo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-3">
            <div className="field">
              <label>Interest Amount</label>
              <input
                name="interestAmount"
                value={formData.interestAmount}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Balance Amount</label>
              <input
                name="balanceAmount"
                value={formData.balanceAmount}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Share Capital</label>
              <input
                name="shareCapital"
                value={formData.shareCapital}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label>Remarks</label>
            <input
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Cheque Details */}
        <section className="form-section">
          <h4>Cheque Details</h4>
          <div className="grid-3">
            <div className="field">
              <label>Cheque Amount</label>
              <input
                name="chequeAmount"
                value={formData.chequeAmount}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Cheque No</label>
              <input
                name="chequeNo"
                value={formData.chequeNo}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Favouring</label>
              <input
                name="favouring"
                value={formData.favouring}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Credits */}
        <section className="form-section">
          <h4>Credit(s)</h4>
          <div className="grid-3">
            <div className="field">
              <label>GL Type</label>
              <input
                name="glType"
                value={formData.glType}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Account Type</label>
              <input
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Account No</label>
              <input
                name="creditAccountNo"
                value={formData.creditAccountNo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-2">
            <div className="field">
              <label>Amount</label>
              <input
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Total Amount</label>
              <input
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Instrument Details */}
        <section className="form-section">
          <h4>Instrument Details</h4>
          <div className="grid-3">
            <div className="field">
              <label>Bank Code</label>
              <input
                name="bankCode"
                value={formData.bankCode}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Branch Code</label>
              <input
                name="branchCode"
                value={formData.branchCode}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Appl Name</label>
              <input
                name="applName"
                value={formData.applName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label>Favouring</label>
            <input
              name="instrFavouring"
              value={formData.instrFavouring}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Actions */}
        <div className="actions">
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

export default SettlementRetired
