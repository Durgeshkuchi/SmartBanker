import React, { useState } from 'react'
import '../../../styles/DepositWizard.scss'

const DepositWizard = () => {
  const [mode, setMode] = useState('addition')
  const steps = [
    'Welcome',
    'Deposit Particulars',
    'Amount Details',
    'Deposit Details',
  ]
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    depositType: '',
    description: '',
    compounded: false,
    interestType: 'yearly',
    minDepositAmount: '',
    periodType: 'months',
    periodValue: '',
    termType: 'monthly',
    options: {
      cashTransfer: false,
      interestAccrued: false,
      installmentsAllowed: false,
      unitsAllowed: false,
      onlyMembersAllowed: false,
      reInvestmentAllowed: false,
      oddInstallmentsAllowed: false,
    },
    details: Array(6).fill(''),
  })

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    if (name.startsWith('details')) {
      const index = parseInt(name.replace('details', ''), 10)
      setFormData((prev) => {
        const updated = [...prev.details]
        updated[index] = value
        return { ...prev, details: updated }
      })
    } else if (Object.keys(formData.options).includes(name)) {
      setFormData((prev) => ({
        ...prev,
        options: { ...prev.options, [name]: checked },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }))
    }
  }
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const prev = () => setStep((s) => Math.max(s - 1, 0))

  return (
    <div className="deposit-wizard-page">
      <div className="wizard-card">
        <div className="step-bar">
          {steps.map((label, i) => (
            <div key={i} className={`step ${i === step ? 'active' : ''}`}>
              <div className="circle">0{i + 1}</div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>

        {/* Step 1: Welcome */}
        {step === 0 && (
          <div className="content">
            <h4 className="wizard-title">Welcome to Deposit Wizard</h4>
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
                <div className="radio-subtext">Add new deposit entry</div>
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
                <div className="radio-subtext">
                  Update existing deposit entry
                </div>
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
                <div className="radio-subtext">Remove deposit entry</div>
              </label>
            </div>
          </div>
        )}

        {/* Step 2: Deposit Particulars */}
        {step === 1 && (
          <div className="content">
            <h4 className="section-title">Deposit Particulars</h4>
            <div className="form-grid">
              <div className="form-group">
                <label>Deposit Type</label>
                <input
                  name="depositType"
                  value={formData.depositType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="checkbox-group single">
              <label>
                <input
                  type="checkbox"
                  name="compounded"
                  checked={formData.compounded}
                  onChange={handleChange}
                />
                Interest Compounded (Y/N)
              </label>
            </div>
            <div className="radio-group-inline">
              <h4 className="section-title">Interest Compounded</h4>
              {['Yearly', 'Half Yearly', 'Quarterly', 'Monthly'].map((v) => (
                <label key={v}>
                  <input
                    type="radio"
                    name="interestType"
                    value={v.toLowerCase().replace(' ', '-')}
                    checked={
                      formData.interestType ===
                      v.toLowerCase().replace(' ', '-')
                    }
                    onChange={handleChange}
                  />
                  {v}
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Amount Details */}
        {step === 2 && (
          <div className="content">
            <h4 className="section-title">Amount Details</h4>
            <div className="form-grid">
              <div className="form-group">
                <label>Min Deposit Amount</label>
                <input
                  name="minDepositAmount"
                  value={formData.minDepositAmount}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-grid compact">
              <div className="form-group">
                <label>Min Deposit Period</label>
                <div className="inline-options">
                  {['Years', 'Months', 'Days'].map((v) => (
                    <label key={v}>
                      <input
                        type="radio"
                        name="periodType"
                        value={v.toLowerCase()}
                        checked={formData.periodType === v.toLowerCase()}
                        onChange={handleChange}
                      />
                      {v}
                    </label>
                  ))}
                  <input
                    type="text"
                    name="periodValue"
                    value={formData.periodValue}
                    onChange={handleChange}
                    className="small-input"
                  />
                </div>
              </div>
            </div>
            <div className="checkbox-grid">
              {Object.keys(formData.options).map((key) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    name={key}
                    checked={formData.options[key]}
                    onChange={handleChange}
                  />
                  {key.replace(/([A-Z])/g, ' $1')}
                </label>
              ))}
            </div>
            <div className="radio-group-inline term-type">
              <h4 className="section-title">Term Type</h4>
              {['Monthly', 'Daily'].map((v) => (
                <label key={v}>
                  <input
                    type="radio"
                    name="termType"
                    value={v.toLowerCase()}
                    checked={formData.termType === v.toLowerCase()}
                    onChange={handleChange}
                  />
                  {v}
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Deposit Details */}
        {step === 3 && (
          <div className="content">
            <h4 className="section-title">Deposit Details</h4>
            <div className="details-grid">
              {formData.details.map((val, i) => (
                <div key={i} className="form-group">
                  <label>Detail {i + 1}</label>
                  <input
                    name={`details${i}`}
                    value={val}
                    onChange={handleChange}
                    placeholder={`Enter detail ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation buttons */}
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

export default DepositWizard
