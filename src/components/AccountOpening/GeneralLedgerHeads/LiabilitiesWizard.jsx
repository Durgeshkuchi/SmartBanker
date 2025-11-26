import React, { useState } from 'react'
import '../../../styles/LiabilitiesWizard.scss'

const LiabilitiesWizard = () => {
  const steps = ['Welcome', 'Group Code Details']
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    liabilityType: 'glcode',
    operation: 'addition',
    groupCode: '',
    groupDescription: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const prevStep = () => setStep((s) => Math.max(s - 1, 0))

  return (
    <div className="liabilities-wizard-page">
      <div className="wizard-card">
        {/* Step Indicator */}
        <div className="step-bar">
          {steps.map((label, i) => (
            <div
              key={i}
              className={`step ${
                step === i ? 'active' : step > i ? 'done' : ''
              }`}
            >
              <div className="circle">{i + 1}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Step 1: Welcome */}
        {step === 0 && (
          <div className="content">
            <h4 className="wizard-title">
              Welcome to Miscellaneous Liabilities Wizard
            </h4>
            <div className="radio-group top-group">
              <label>
                <input
                  type="radio"
                  name="liabilityType"
                  value="glcode"
                  checked={formData.liabilityType === 'glcode'}
                  onChange={handleChange}
                />
                Miscellaneous Liabilities Glcode
              </label>
              <label>
                <input
                  type="radio"
                  name="liabilityType"
                  value="accno"
                  checked={formData.liabilityType === 'accno'}
                  onChange={handleChange}
                />
                Miscellaneous Liabilities Acc No
              </label>
            </div>

            <div className="radio-group box-group">
              <label>
                <input
                  type="radio"
                  name="operation"
                  value="addition"
                  checked={formData.operation === 'addition'}
                  onChange={handleChange}
                />
                Addition
              </label>
              <label>
                <input
                  type="radio"
                  name="operation"
                  value="modification"
                  checked={formData.operation === 'modification'}
                  onChange={handleChange}
                />
                Modification
              </label>
              <label>
                <input
                  type="radio"
                  name="operation"
                  value="deletion"
                  checked={formData.operation === 'deletion'}
                  onChange={handleChange}
                />
                Deletion
              </label>
            </div>
          </div>
        )}

        {/* Step 2: Group Code Details */}
        {step === 1 && (
          <div className="content">
            <h4 className="section-title">Group Code Details</h4>

            <div className="radio-group top-group">
              <label>
                <input
                  type="radio"
                  name="liabilityType"
                  value="glcode"
                  checked={formData.liabilityType === 'glcode'}
                  onChange={handleChange}
                />
                Miscellaneous Liabilities Glcode
              </label>
              <label>
                <input
                  type="radio"
                  name="liabilityType"
                  value="accno"
                  checked={formData.liabilityType === 'accno'}
                  onChange={handleChange}
                />
                Miscellaneous Liabilities Acc No
              </label>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="required">Group Code</label>
                <input
                  name="groupCode"
                  value={formData.groupCode}
                  onChange={handleChange}
                  placeholder="Enter Group Code"
                />
              </div>
              <div className="form-group wide">
                <label>Group Description</label>
                <input
                  name="groupDescription"
                  value={formData.groupDescription}
                  onChange={handleChange}
                  placeholder="Enter Description"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="button-row">
          <button onClick={prevStep} disabled={step === 0}>
            Previous
          </button>
          {step < steps.length - 1 ? (
            <button className="primary" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button className="primary">Finish</button>
          )}
          <button className="secondary">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default LiabilitiesWizard
