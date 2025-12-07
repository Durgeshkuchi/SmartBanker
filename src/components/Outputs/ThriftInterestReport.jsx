import React, { useState } from 'react'
import '../../styles/ThriftInterestReport.scss'

const ThriftInterestReport = () => {
  const [reportType, setReportType] = useState('Single')
  const [postedDate, setPostedDate] = useState('')
  const [depType, setDepType] = useState('')
  const [depTypeName, setDepTypeName] = useState('')
  const [branchCode, setBranchCode] = useState('')
  const [branchName, setBranchName] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Thrift/MBF Interest Report:\nType: ${reportType}\nPosted Date: ${postedDate}\nDeposit Type: ${depType} - ${depTypeName}\nBranch: ${branchCode} - ${branchName}`
    )
  }

  const handleClear = () => {
    setReportType('Single')
    setPostedDate('')
    setDepType('')
    setDepTypeName('')
    setBranchCode('')
    setBranchName('')
  }

  return (
    <div className="thrift-page">
      <div className="thrift-card">
        <h3>Thrift / MBF Interest Posted Report</h3>

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

        {/* Thrift/MBF Section */}
        <div className="section">
          <h4>Thrift / MBF</h4>
          <div className="form-group">
            <label>Dep Type:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={depType}
                onChange={(e) => setDepType(e.target.value)}
              />
              <input
                type="text"
                placeholder="Deposit Type Name"
                value={depTypeName}
                onChange={(e) => setDepTypeName(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Branch Section */}
        <div className="section">
          <h4>Branch</h4>
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

export default ThriftInterestReport
