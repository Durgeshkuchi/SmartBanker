import React, { useState } from 'react'
import '../../../styles/IncomeWizard.scss'

const IncomeWizard = () => {
  const [step, setStep] = useState(0)
  const [mode, setMode] = useState('addition')
  const [codeType, setCodeType] = useState('group')
  const [groupCode, setGroupCode] = useState('')
  const [groupDesc, setGroupDesc] = useState('')

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 1))
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0))

  return (
    <div className="income-wizard-page">
      <div className="wizard-card">
        {/* --- Header Section --- */}
        <div className="wizard-header">
          <h2>Income Wizard</h2>
          <div className="underline"></div>
          <div className="step-info">
            <div className="circle">{step + 1}</div>
            <span className="step-text">Step {step + 1} of 2</span>
          </div>
        </div>
        {/* --- Code Type Selection --- */}
        <div className="header-toggle">
          <label className={codeType === 'group' ? 'selected' : ''}>
            <input
              type="radio"
              name="codeType"
              value="group"
              checked={codeType === 'group'}
              onChange={() => setCodeType('group')}
            />
            <span>Income Group Code</span>
          </label>
          <label className={codeType === 'account' ? 'selected' : ''}>
            <input
              type="radio"
              name="codeType"
              value="account"
              checked={codeType === 'account'}
              onChange={() => setCodeType('account')}
            />
            <span>Income Account Code</span>
          </label>
        </div>
        {/* --- Operation Section --- */}
        {step === 0 && (
          <div className="content">
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
                <div className="radio-subtext">Add new income entry</div>
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
                  Update existing income entry
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
                <div className="radio-subtext">Remove income entry</div>
              </label>
            </div>
          </div>
        )}
        {/* --- Step 2: Code Entry --- */}{' '}
        {step === 1 && (
          <div className="content">
            {' '}
            <h4 className="section-title">
              {' '}
              {codeType === 'group'
                ? 'Group Code Details'
                : 'Account Code Details'}{' '}
            </h4>{' '}
            <div className="grid">
              {' '}
              <div className="form-group">
                {' '}
                <label>
                  {' '}
                  {codeType === 'group' ? 'Group Code' : 'Account Code'}{' '}
                </label>{' '}
                <input
                  type="text"
                  placeholder="Enter Code"
                  value={groupCode}
                  onChange={(e) => setGroupCode(e.target.value)}
                />{' '}
              </div>{' '}
              <div className="form-group full-width">
                {' '}
                <label>
                  {' '}
                  {codeType === 'group'
                    ? 'Group Description'
                    : 'Account Description'}{' '}
                </label>{' '}
                <input
                  type="text"
                  placeholder="Enter Description"
                  value={groupDesc}
                  onChange={(e) => setGroupDesc(e.target.value)}
                />{' '}
              </div>{' '}
            </div>{' '}
          </div>
        )}
        {/* --- Actions --- */}
        <div className="actions">
          <button
            type="button"
            className="btn-secondary"
            disabled={step === 0}
            onClick={handlePrev}
          >
            Previous
          </button>
          <button type="button" className="btn-primary" onClick={handleNext}>
            Next
          </button>
          <button type="button" className="btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default IncomeWizard
