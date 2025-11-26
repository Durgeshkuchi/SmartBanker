import React, { useState } from 'react'
import '../../../../styles/ThriftAdjustmentRetirement.scss'

const ThriftAdjustmentRetirement = () => {
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
    bankCode: '',
    branchCode: '',
    applName: '',
    creditFavouring: '',
    amount: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="thrift-page">
      <h2 className="page-title">Settlement (Retired) / Thrift Payments</h2>

      <form onSubmit={handleSubmit} className="thrift-form">
        {/* -------- Member Section -------- */}
        <fieldset>
          <legend>Thrift Payments / Settlement</legend>
          <div className="grid-3">
            <div className="form-group">
              <label>Member Id</label>
              <input
                name="memberId"
                value={formData.memberId}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Dep Type</label>
              <input
                name="depType"
                value={formData.depType}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Account No</label>
              <input
                name="accountNo"
                value={formData.accountNo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-3">
            <div className="form-group">
              <label>Interest Amount</label>
              <input
                name="interestAmount"
                value={formData.interestAmount}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Balance Amount</label>
              <input
                name="balanceAmount"
                value={formData.balanceAmount}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Share Capital</label>
              <input
                name="shareCapital"
                value={formData.shareCapital}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group full">
            <label>Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>

          <h4 className="section-label">Cheque Details</h4>
          <div className="grid-3">
            <div className="form-group">
              <label>Cheque Amount</label>
              <input
                name="chequeAmount"
                value={formData.chequeAmount}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Cheque No</label>
              <input
                name="chequeNo"
                value={formData.chequeNo}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Favouring</label>
              <input
                name="favouring"
                value={formData.favouring}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        {/* -------- Credit Section -------- */}
        <fieldset>
          <legend>Credit(s)</legend>
          <div className="grid-3">
            <div className="form-group">
              <label>GL Type</label>
              <input
                name="glType"
                value={formData.glType}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Account Type</label>
              <input
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Account No</label>
              <input
                name="creditAccountNo"
                value={formData.creditAccountNo}
                onChange={handleChange}
              />
            </div>
          </div>

          <h4 className="section-label">Instrument Details</h4>
          <div className="grid-3">
            <div className="form-group">
              <label>Bank Code</label>
              <input
                name="bankCode"
                value={formData.bankCode}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Branch Code</label>
              <input
                name="branchCode"
                value={formData.branchCode}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Appl Name</label>
              <input
                name="applName"
                value={formData.applName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-3">
            <div className="form-group">
              <label>Favouring</label>
              <input
                name="creditFavouring"
                value={formData.creditFavouring}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        <div className="actions">
          <button type="submit" className="btn-primary">
            Ok
          </button>
          <button type="button" className="btn-secondary">
            Cancel
          </button>
          <button type="button" className="btn-secondary">
            Exit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ThriftAdjustmentRetirement
