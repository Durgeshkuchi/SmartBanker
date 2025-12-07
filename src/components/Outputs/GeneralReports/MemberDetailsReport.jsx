import React, { useState } from 'react'
import '../../../styles/GeneralMemberDetailsReport.scss'

const MemberDetailsReport = () => {
  const [reportDate, setReportDate] = useState('')

  const handleGenerate = () => {
    alert(`Generating Member Details Report\nDate: ${reportDate}`)
  }

  const handleClear = () => {
    setReportDate('')
  }

  return (
    <div className="memberreport-page">
      <div className="memberreport-card">
        <h3>Member Details Report</h3>

        <div className="section">
          <h4>Report as on</h4>
          <div className="form-row">
            <label>Date:</label>
            <input
              type="date"
              value={reportDate}
              onChange={(e) => setReportDate(e.target.value)}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="actions">
          <button className="btn-primary" onClick={handleGenerate}>
            OK
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

export default MemberDetailsReport
