import React, { useState, useEffect } from 'react'
import { Country, State, City } from 'country-state-city'
import '../../styles/CustomerOpening.scss'

const steps = [
  'Customer Details',
  'Branch Details',
  'Nominee Details',
  'Documents',
]

const ACOpening = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [mode, setMode] = useState('add') // NEW: Mode state

  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  useEffect(() => {
    setCountries(Country.getAllCountries())
  }, [])

  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry))
      setCities([])
      setSelectedState('')
    }
  }, [selectedCountry])

  useEffect(() => {
    if (selectedCountry && selectedState) {
      setCities(City.getCitiesOfState(selectedCountry, selectedState))
      setSelectedCity('')
    }
  }, [selectedState, selectedCountry])

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1)
  }

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1)
  }

  const MARITAL_STATUS = ['Single', 'Married', 'Divorced', 'Widowed']

  return (
    <div className="ac-opening-page">
      {/* --- Header with Animated Toggle --- */}
      <div className="page-header">
        <div className="switch-container">
          <input
            type="checkbox"
            id="modeSwitch"
            className="switch-input"
            checked={mode === 'modify'}
            onChange={() => setMode(mode === 'add' ? 'modify' : 'add')}
          />
          <label htmlFor="modeSwitch" className="switch-button">
            <span className="switch-text add">Add</span>
            <span className="switch-text modify">Modify</span>
          </label>
        </div>
      </div>

      {/* Step Bar */}
      <div className="step-bar">
        {steps.map((label, index) => (
          <div
            key={index}
            className={`step ${index === activeStep ? 'active' : ''}`}
          >
            <div className="circle">0{index + 1}</div>
            <div className="label">{label}</div>
          </div>
        ))}
      </div>

      {/* Form Card */}
      <div className="form-card">
        {activeStep === 0 && (
          <form>
            <div className="grid">
              <div className="form-group">
                <label>
                  Application Number <span>*</span>
                </label>
                <input type="text" placeholder="Enter Application Number" />
              </div>
              <div className="form-group">
                <label>Member ID</label>
                <input type="text" placeholder="Enter ID" />
              </div>
              <div className="form-group">
                <label>
                  First Name <span>*</span>
                </label>
                <input type="text" placeholder="Enter First Name" />
              </div>
              <div className="form-group">
                <label>
                  Last Name <span>*</span>
                </label>
                <input type="text" placeholder="Enter Last Name" />
              </div>
              <div className="form-group">
                <label>Relation</label>
                <div className="input-pair">
                  <select>
                    <option>S/o</option>
                    <option>D/o</option>
                  </select>
                  <input type="text" placeholder="Enter Relation" />
                </div>
              </div>
              <div className="form-group">
                <label>Designation</label>
                <input type="text" placeholder="Enter Designation" />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" placeholder="Enter Mobile Number" />
              </div>
              <div className="form-group">
                <label>Email ID</label>
                <input type="text" placeholder="Enter Email ID" />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select>
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  Date of Birth <span>*</span>
                </label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Blood Group</label>
                <select>
                  <option>Select Blood Group</option>
                </select>
              </div>
              <div className="form-group">
                <label>Emergency Contact Number</label>
                <input type="text" placeholder="Enter Mobile Number" />
              </div>
              <div className="form-group">
                <label>
                  Appointment Date <span>*</span>
                </label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>
                  Retirement Date <span>*</span>
                </label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>
                  Membership Date <span>*</span>
                </label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Employee Code</label>
                <input type="text" placeholder="Enter Code" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" placeholder="Enter Full Address" />
              </div>
              <div className="form-group">
                <label>City</label>
                <select
                  disabled={!cities.length}
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Select City</option>
                  {cities.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>State</label>
                <select
                  disabled={!states.length}
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">Select State</option>
                  {states.map((s) => (
                    <option key={s.isoCode} value={s.isoCode}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>ZIP</label>
                <input type="text" placeholder="Enter ZIP Code" />
              </div>
              <div className="form-group">
                <label>Basic Pay</label>
                <input type="text" placeholder="Enter Amount" />
              </div>
              <div className="form-group">
                <label>Share Amount</label>
                <input type="text" placeholder="Enter Amount" />
              </div>
              <div className="form-group">
                <label>Marital Status</label>
                <select>
                  <option value="">Select</option>
                  {MARITAL_STATUS.map((status) => (
                    <option key={status} value={status.toLowerCase()}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Nationality</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c.isoCode} value={c.isoCode}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        )}

        {activeStep === 1 && (
          <form>
            <h4 className="section-title">Branch Details</h4>
            <div className="grid">
              <div className="form-group">
                <label>Branch</label>
                <input type="text" placeholder="Enter Branch Name" />
              </div>
              <div className="form-group">
                <label>Section</label>
                <input type="text" placeholder="Enter Section" />
              </div>
              <div className="form-group">
                <label>District</label>
                <input type="text" placeholder="Enter District" />
              </div>
              <div className="form-group">
                <label>State</label>
                <input type="text" value="Andhra Pradesh" readOnly />
              </div>
              <div className="form-group">
                <label>Pin</label>
                <input type="text" placeholder="Enter PIN Code" />
              </div>
              <div className="form-group">
                <label>Module</label>
                <input type="text" placeholder="Enter Module" />
              </div>
              <div className="form-group">
                <label>Zone</label>
                <input type="text" placeholder="Enter Zone" />
              </div>
              <div className="form-group">
                <label>Region</label>
                <input type="text" placeholder="Enter Region" />
              </div>
              <div className="form-group">
                <label>G No</label>
                <input type="text" placeholder="Enter G Number" />
              </div>
              <div className="form-group">
                <label>MBF No</label>
                <input type="text" placeholder="Enter MBF No" />
              </div>
              <div className="form-group">
                <label>MBF Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Thrift Dep No</label>
                <input type="text" placeholder="Enter Thrift Dep No" />
              </div>
              <div className="form-group">
                <label>Thrift Amount</label>
                <input type="text" value="0.00" readOnly />
              </div>
              <div className="form-group">
                <label>MBF Amount</label>
                <input type="text" value="0.00" readOnly />
              </div>
            </div>
          </form>
        )}

        {activeStep === 2 && <div>Nominee Details Form Here</div>}
        {activeStep === 3 && <div>Documents Upload Section</div>}

        <div className="actions">
          <button type="button" className="cancel" onClick={handleBack}>
            {activeStep === 0 ? 'Cancel' : 'Back'}
          </button>
          <button type="button" className="next" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ACOpening
