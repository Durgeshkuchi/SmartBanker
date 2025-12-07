import React, { useState } from 'react'
import '../../../styles/AuditReport.scss'

const AuditReport = () => {
  const [reportDate, setReportDate] = useState('')

  const handleGenerate = () => {
    alert(`Generating Audit Report\nReport as on: ${reportDate}`)
  }

  const handleClear = () => {
    setReportDate('')
  }

  return (
    <div className="auditreport-page">
      <div className="auditreport-card">
        <h3>Audit Report</h3>

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

export default AuditReport
