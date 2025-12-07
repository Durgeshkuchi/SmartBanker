import React, { useState } from 'react'
import '../../../styles/ProfitLossReport.scss'

const ProfitLossReport = () => {
  const [mode, setMode] = useState('pl')
  const [reportDate, setReportDate] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Profit & Loss Report\nMode: ${
        mode === 'month' ? 'Any Month' : mode === 'date' ? 'Any Date' : 'P & L'
      }\nDate: ${reportDate}`
    )
  }

  const handleClear = () => {
    setMode('pl')
    setReportDate('')
  }

  return (
    <div className="plreport-page">
      <div className="plreport-card">
        <h3>Profit & Loss / Income & Expenditure</h3>

        <div className="report-content">
          {/* Mode selection */}
          <div className="mode-section">
            <h4>Report Type</h4>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="month"
                  checked={mode === 'month'}
                  onChange={(e) => setMode(e.target.value)}
                />
                Any Month
              </label>
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="date"
                  checked={mode === 'date'}
                  onChange={(e) => setMode(e.target.value)}
                />
                Any Date
              </label>
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="pl"
                  checked={mode === 'pl'}
                  onChange={(e) => setMode(e.target.value)}
                />
                P & L
              </label>
            </div>
          </div>

          {/* Date Picker */}
          <div className="date-section">
            <h4>Date Selection</h4>
            <div className="row">
              <label>Date:</label>
              <input
                type="date"
                value={reportDate}
                onChange={(e) => setReportDate(e.target.value)}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="actions">
            <button className="btn-primary" onClick={handleGenerate}>
              Print
            </button>
            <button className="btn-secondary" onClick={handleClear}>
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfitLossReport
