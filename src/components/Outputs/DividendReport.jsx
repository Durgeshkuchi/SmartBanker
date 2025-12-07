import React, { useState } from 'react'
import '../../styles/DividendReport.scss'

const DividendReport = () => {
  const [reportType, setReportType] = useState('Single')
  const [postedDate, setPostedDate] = useState('')
  const [branchCode, setBranchCode] = useState('')
  const [branchName, setBranchName] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Dividend Report:\nType: ${reportType}\nPosted Date: ${postedDate}\nBranch: ${branchCode} - ${branchName}`
    )
  }

  const handleClear = () => {
    setReportType('Single')
    setPostedDate('')
    setBranchCode('')
    setBranchName('')
  }

  return (
    <div className="dividend-page">
      <div className="dividend-card">
        <h3>Dividend Report</h3>

        {/* Report Type */}
        <div className="section">
          <h4>Report Type</h4>
          <div className="report-type-row">
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="reportType"
                  value="Single"
                  checked={reportType === 'Single'}
                  onChange={(e) => setReportType(e.target.value)}
                />
                Single
              </label>

              <label>
                <input
                  type="radio"
                  name="reportType"
                  value="All Branches"
                  checked={reportType === 'All Branches'}
                  onChange={(e) => setReportType(e.target.value)}
                />
                All Branches
              </label>
            </div>

            <div className="date-field">
              <label>Posted Date:</label>
              <input
                type="date"
                value={postedDate}
                onChange={(e) => setPostedDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Branch Section */}
        <div className="section">
          <h4>Branch Details</h4>
          <div className="form-group">
            <label>Branch:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={branchCode}
                onChange={(e) => setBranchCode(e.target.value)}
                disabled={reportType === 'All Branches'}
              />
              <input
                type="text"
                placeholder="Branch Name"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                disabled={reportType === 'All Branches'}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="actions">
          <button className="btn-primary" onClick={handleGenerate}>
            Report
          </button>
          <button className="btn-secondary" onClick={handleClear}>
            Cancel
          </button>
          <button
            className="btn-secondary"
            onClick={() => window.history.back()}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default DividendReport
