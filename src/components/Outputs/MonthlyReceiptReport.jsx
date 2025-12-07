import React, { useState } from 'react'
import '../../styles/MonthlyReceiptReport.scss'

const MonthlyReceiptReport = () => {
  const [viewType, setViewType] = useState('Single Branch')
  const [branchCode, setBranchCode] = useState('')
  const [branchName, setBranchName] = useState('')
  const [memberId, setMemberId] = useState('')
  const [memberName, setMemberName] = useState('')
  const [receiptMonth, setReceiptMonth] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Monthly Receipt Report:\nView: ${viewType}\nBranch: ${branchCode} - ${branchName}\nMember: ${memberId} - ${memberName}\nMonth: ${receiptMonth}`
    )
  }

  const handleClear = () => {
    setViewType('Single Branch')
    setBranchCode('')
    setBranchName('')
    setMemberId('')
    setMemberName('')
    setReceiptMonth('')
  }

  return (
    <div className="monthlyreceipt-page">
      <div className="monthlyreceipt-card">
        <h3>Monthly Receipt Report</h3>

        {/* Report Type */}
        <div className="section">
          <h4>Report Type</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="viewType"
                value="Single Branch"
                checked={viewType === 'Single Branch'}
                onChange={(e) => setViewType(e.target.value)}
              />
              Single Branch
            </label>

            <label>
              <input
                type="radio"
                name="viewType"
                value="All Branches"
                checked={viewType === 'All Branches'}
                onChange={(e) => setViewType(e.target.value)}
              />
              All Branches
            </label>

            <label>
              <input
                type="radio"
                name="viewType"
                value="Member"
                checked={viewType === 'Member'}
                onChange={(e) => setViewType(e.target.value)}
              />
              Member
            </label>
          </div>
        </div>

        {/* Branch Details */}
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
                disabled={viewType === 'All Branches'}
              />
              <input
                type="text"
                placeholder="Branch Name"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                disabled={viewType === 'All Branches'}
              />
            </div>
          </div>
        </div>

        {/* Member Details */}
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
                disabled={viewType !== 'Member'}
              />
              <input
                type="text"
                placeholder="Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                disabled={viewType !== 'Member'}
              />
            </div>
          </div>
        </div>

        {/* Receipt Month */}
        <div className="section">
          <h4>Receipt Month</h4>
          <div className="form-group">
            <label>Month:</label>
            <input
              type="month"
              value={receiptMonth}
              onChange={(e) => setReceiptMonth(e.target.value)}
            />
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

export default MonthlyReceiptReport
