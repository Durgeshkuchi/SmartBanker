import React, { useState } from 'react'
import '../../styles/LoanOpening.scss'
import { FaCheckCircle } from 'react-icons/fa'
import axios from 'axios'

const steps = [
  'Application Details',
  'Sanction Details',
  'Applicant Details',
  'Property & Security',
  'Loan Schedule',
]

const LoanOpening = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const [formData, setFormData] = useState({
    // Step 1
    customerType: '',
    customerId: '',
    membershipDate: '',
    retirementDate: '',
    basicPay: '',
    gender: 'Male',
    relation: '',
    address: {
      houseNo: '',
      street: '',
      city: '',
      state: '',
      pin: '',
      phone: '',
      branchCode: '',
    },
    // Step 2
    sanctionDetails: {
      duration: '',
      interestRate: '',
      installments: '',
      disbursementDate: '',
      sanctionAmount: '',
      firstRepaymentDate: '',
      installmentAmount: '',
      emi: 'Yes',
    },

    applicantDetails: {},
    propertySecurity: {},
    loanSchedule: {},
  })

  // Handle input changes dynamically
  const handleChange = (e, section, field) => {
    const { name, value } = e.target

    if (section) {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field || name]: value,
        },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  // Navigation
  const handleNext = async () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1)
    } else {
      await handleSubmit()
    }
  }

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1)
  }

  const handleSubmit = async () => {
    setLoading(true)
    setSuccessMsg('')
    setErrorMsg('')

    try {
      const API_URL = 'https://your-backend-api.com/api/loan/opening'

      const response = await axios.post(API_URL, formData, {
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.status === 200 || response.status === 201) {
        setSuccessMsg('Loan details submitted successfully!')
        setActiveStep(0)
        setFormData({})
      }
    } catch (error) {
      console.error('Submission failed:', error)
      setErrorMsg('Failed to submit loan details. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="loan-opening-page">
      {/* Step Progress */}
      <div className="step-progress">
        {steps.map((label, index) => (
          <div
            key={index}
            className={`step-item ${
              index === activeStep
                ? 'active'
                : index < activeStep
                ? 'completed'
                : ''
            }`}
          >
            <div className="circle">
              {index < activeStep ? <FaCheckCircle /> : `0${index + 1}`}
            </div>
            <span className="label">{label}</span>
            {index !== steps.length - 1 && <div className="line"></div>}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="form-wrapper">
        <div className="form-card">
          {/* STEP 1 */}
          {activeStep === 0 && (
            <>
              <div className="info-card">
                <h4>Customer Details</h4>
                <div className="grid">
                  <div className="field">
                    <label>Customer Type</label>
                    <input
                      type="text"
                      name="customerType"
                      value={formData.customerType}
                      onChange={handleChange}
                      placeholder="Enter Type"
                    />
                  </div>
                  <div className="field">
                    <label>Customer ID</label>
                    <input
                      type="text"
                      name="customerId"
                      value={formData.customerId}
                      onChange={handleChange}
                      placeholder="Enter ID"
                    />
                  </div>
                  <div className="field">
                    <label>Membership Date</label>
                    <input
                      type="date"
                      name="membershipDate"
                      value={formData.membershipDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label>Retirement Date</label>
                    <input
                      type="date"
                      name="retirementDate"
                      value={formData.retirementDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label>Basic Pay</label>
                    <input
                      type="number"
                      name="basicPay"
                      value={formData.basicPay}
                      onChange={handleChange}
                      placeholder="0.00"
                    />
                  </div>
                  <div className="field">
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Relation (S/O, W/O, D/O)</label>
                    <input
                      type="text"
                      name="relation"
                      value={formData.relation}
                      onChange={handleChange}
                      placeholder="Enter Relation"
                    />
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h4>Address</h4>
                <div className="grid">
                  {Object.entries(formData.address).map(([key, value]) => (
                    <div key={key} className="field">
                      <label>{key.replace(/([A-Z])/g, ' $1')}</label>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(e, 'address', key)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeStep === 1 && (
            <div className="info-card">
              <h4>Sanction Details</h4>
              <div className="grid">
                {Object.entries(formData.sanctionDetails).map(
                  ([key, value]) => (
                    <div key={key} className="field">
                      <label>{key.replace(/([A-Z])/g, ' $1')}</label>
                      {key === 'emi' ? (
                        <select
                          value={value}
                          onChange={(e) =>
                            handleChange(e, 'sanctionDetails', key)
                          }
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      ) : key.includes('Date') ? (
                        <input
                          type="date"
                          value={value}
                          onChange={(e) =>
                            handleChange(e, 'sanctionDetails', key)
                          }
                        />
                      ) : (
                        <input
                          type="text"
                          value={value}
                          onChange={(e) =>
                            handleChange(e, 'sanctionDetails', key)
                          }
                        />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="placeholder-card">Applicant Details Form Here</div>
          )}
          {activeStep === 3 && (
            <div className="placeholder-card">
              Property & Security Details Here
            </div>
          )}
          {activeStep === 4 && (
            <div className="placeholder-card">Loan Schedule Table Here</div>
          )}
        </div>
        <div className="actions">
          <button className="btn-secondary" onClick={handleBack}>
            {activeStep === 0 ? 'Cancel' : 'Back'}
          </button>
          <button
            className="btn-primary"
            onClick={handleNext}
            disabled={loading}
          >
            {loading
              ? 'Submitting...'
              : activeStep === steps.length - 1
              ? 'Submit'
              : 'Next'}
          </button>
        </div>

        {successMsg && <p className="success-msg">{successMsg}</p>}
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
      </div>
    </div>
  )
}

export default LoanOpening
