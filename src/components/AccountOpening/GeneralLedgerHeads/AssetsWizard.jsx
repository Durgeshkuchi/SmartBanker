import React, { useState } from 'react'
import '../../../styles/AssetsWizard.scss'

const AssetsWizard = () => {
  const steps = ['Welcome', 'Group Code Details']
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    assetType: 'glcode',
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
    <div className="assets-wizard-page">
      <div className="wizard-card">
        {/* Step indicator */}
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
              Welcome to Miscellaneous Assets Wizard
            </h4>
            <div className="radio-group top-group">
              <label>
                <input
                  type="radio"
                  name="assetType"
                  value="glcode"
                  checked={formData.assetType === 'glcode'}
                  onChange={handleChange}
                />
                Miscellaneous Assets Glcode
              </label>
              <label>
                <input
                  type="radio"
                  name="assetType"
                  value="accno"
                  checked={formData.assetType === 'accno'}
                  onChange={handleChange}
                />
                Miscellaneous Assets Acc No
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
                  name="assetType"
                  value="glcode"
                  checked={formData.assetType === 'glcode'}
                  onChange={handleChange}
                />
                Miscellaneous Assets Glcode
              </label>
              <label>
                <input
                  type="radio"
                  name="assetType"
                  value="accno"
                  checked={formData.assetType === 'accno'}
                  onChange={handleChange}
                />
                Miscellaneous Assets Acc No
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

export default AssetsWizard
