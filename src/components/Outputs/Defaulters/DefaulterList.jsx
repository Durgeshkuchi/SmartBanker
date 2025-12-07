import React, { useState } from 'react'
import '../../../styles/DefaulterList.scss'

const DefaulterList = () => {
  const [reportType, setReportType] = useState('branch')
  const [branchCode, setBranchCode] = useState('')
  const [branchName, setBranchName] = useState('')
  const [memberId, setMemberId] = useState('')
  const [memberName, setMemberName] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Defaulter's List:\nType: ${reportType}\nBranch: ${branchCode} - ${branchName}\nMember: ${memberId} - ${memberName}\nFrom: ${fromDate}\nTo: ${toDate}`
    )
  }

  const handleClear = () => {
    setBranchCode('')
    setBranchName('')
    setMemberId('')
    setMemberName('')
    setFromDate('')
    setToDate('')
  }

  return (
    <div className="defaulter-list-page">
      <div className="defaulter-list-card">
        <h3>Defaulter's List</h3>

        {/* Report Type Section */}
        <div className="section">
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="branch"
                checked={reportType === 'branch'}
                onChange={(e) => setReportType(e.target.value)}
              />
              Single Branch
            </label>
            <label>
              <input
                type="radio"
                value="member"
                checked={reportType === 'member'}
                onChange={(e) => setReportType(e.target.value)}
              />
              Member
            </label>
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
              />
              <input
                type="text"
                placeholder="Branch Name"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Member Section */}
        <div className="section">
          <h4>Member Details</h4>
          <div className="form-group">
            <label>Member ID:</label>
            <div className="input-pair">
              <input
                type="text"
                placeholder="Code"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
              />
              <input
                type="text"
                placeholder="Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Date Range Section */}
        <div className="section">
          <h4>Date Range</h4>
          <div className="form-group">
            <label>From:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <label>To:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="btn-primary" onClick={handleGenerate}>
            OK
          </button>
          <button className="btn-secondary" onClick={handleClear}>
            Clear
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

export default DefaulterList
