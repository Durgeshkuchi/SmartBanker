import React, { useState } from 'react'
import '../../../styles/LoanWizard.scss'

const LoanWizard = () => {
  const [mode, setMode] = useState('addition')
  const steps = [
    'Welcome',
    'Loan Particulars',
    'Amount Details',
    'Loan Details',
  ]

  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    loanType: '',
    description: '',
    securityType: '',
    introducerLevel: '',
    roi: '',
    staffRoi: '',
    maxPeriodType: 'years',
    maxPeriodValue: '',
    maxLoanLimit: '',
    interestApplied: 'quarterly',
    compounded: false,
    chequeFacility: false,
    isMember: false,
    details: Array(10).fill(''),
  })

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleDetailChange = (index, value) => {
    const updated = [...formData.details]
    updated[index] = value
    setFormData({ ...formData, details: updated })
  }

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const prev = () => setStep((s) => Math.max(s - 1, 0))

  return (
    <div className="loan-wizard-page">
      <div className="wizard-card">
        {/* Step bar */}
        <div className="step-bar">
          {steps.map((label, i) => (
            <div key={i} className={`step ${i === step ? 'active' : ''}`}>
              <div className="circle">0{i + 1}</div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>

        {/* Step 1 — Welcome */}
        {step === 0 && (
          <div className="content">
            <h2 className="welcome-title">Welcome to Loan Wizard</h2>
            <h4 className="section-title">Select Operation</h4>
            <div className="radio-group">
              <label className={mode === 'addition' ? 'active' : ''}>
                <input
                  type="radio"
                  name="mode"
                  value="addition"
                  checked={mode === 'addition'}
                  onChange={() => setMode('addition')}
                />
                <div className="radio-title">Addition</div>
                <div className="radio-subtext">Add new loan entry</div>
              </label>

              <label className={mode === 'modification' ? 'active' : ''}>
                <input
                  type="radio"
                  name="mode"
                  value="modification"
                  checked={mode === 'modification'}
                  onChange={() => setMode('modification')}
                />
                <div className="radio-title">Modification</div>
                <div className="radio-subtext">Update existing loan entry</div>
              </label>

              <label className={mode === 'deletion' ? 'active' : ''}>
                <input
                  type="radio"
                  name="mode"
                  value="deletion"
                  checked={mode === 'deletion'}
                  onChange={() => setMode('deletion')}
                />
                <div className="radio-title">Deletion</div>
                <div className="radio-subtext">Remove loan entry</div>
              </label>
            </div>
          </div>
        )}

        {/* Step 2 — Loan Particulars */}
        {step === 1 && (
          <div className="content">
            <h4 className="section-title">Loan Particulars</h4>
            <div className="grid">
              <div className="form-group">
                <label>Loan Type</label>
                <input
                  type="text"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Security Type</label>
                <select
                  name="securityType"
                  value={formData.securityType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Movable">Movable</option>
                </select>
              </div>
              <div className="form-group">
                <label>Introducer Level</label>
                <select
                  name="introducerLevel"
                  value={formData.introducerLevel}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="member">Member</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
              <div className="form-group">
                <label>ROI (%)</label>
                <input
                  type="text"
                  name="roi"
                  value={formData.roi}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Staff ROI (%)</label>
                <input
                  type="text"
                  name="staffRoi"
                  value={formData.staffRoi}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3 — Amount Details */}
        {step === 2 && (
          <div className="content">
            <h4 className="section-title">Amount & Interest Details</h4>
            <div className="grid amount-grid">
              {/* Left column */}
              <div className="left-column">
                <div className="form-group">
                  <label>Maximum Loan Limit</label>
                  <input
                    type="text"
                    name="maxLoanLimit"
                    value={formData.maxLoanLimit}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Interest Applied</label>
                  <div className="radio-inline">
                    {['quarterly', 'half-yearly', 'yearly'].map((v) => (
                      <label key={v}>
                        <input
                          type="radio"
                          name="interestApplied"
                          value={v}
                          checked={formData.interestApplied === v}
                          onChange={handleChange}
                        />
                        {v.charAt(0).toUpperCase() +
                          v.slice(1).replace('-', ' ')}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column — Checkboxes */}
              <div className="right-column checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="compounded"
                    checked={formData.compounded}
                    onChange={handleChange}
                  />
                  Interest Compounded (Y/N)
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="chequeFacility"
                    checked={formData.chequeFacility}
                    onChange={handleChange}
                  />
                  Cheque Book Facility (Y/N)
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="isMember"
                    checked={formData.isMember}
                    onChange={handleChange}
                  />
                  Member (Y/N)
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Step 4 — Loan Details */}
        {step === 3 && (
          <div className="content">
            <h4 className="section-title">Loan Details</h4>
            <div className="details-grid">
              {formData.details.map((d, i) => (
                <div className="form-group" key={i}>
                  <label>Detail {i + 1}</label>
                  <input
                    type="text"
                    value={d}
                    onChange={(e) => handleDetailChange(i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="actions">
          <button
            className="btn-secondary"
            onClick={prev}
            disabled={step === 0}
          >
            Previous
          </button>
          {step < steps.length - 1 ? (
            <button className="btn-primary" onClick={next}>
              Next
            </button>
          ) : (
            <button className="btn-primary">Finish</button>
          )}
          <button className="btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default LoanWizard
