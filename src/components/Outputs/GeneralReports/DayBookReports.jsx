import React, { useState } from 'react'
import '../../../styles/DayBookReports.scss'

const DayBookReports = () => {
  const [bookType, setBookType] = useState('supplementary')
  const [reportDate, setReportDate] = useState('')
  const [reportCategory, setReportCategory] = useState('all')
  const [supplementaryType, setSupplementaryType] = useState('without')

  const handleGenerate = () => {
    alert(
      `Generating ${
        bookType === 'supplementary' ? 'Supplementary' : 'Daybook'
      } Report\n` +
        `As on Date: ${reportDate}\nCategory: ${reportCategory}\nSupplementary: ${
          supplementaryType === 'without'
            ? 'Without Particulars'
            : 'With Particulars'
        }`
    )
  }

  const handleClear = () => {
    setBookType('supplementary')
    setReportDate('')
    setReportCategory('all')
    setSupplementaryType('without')
  }

  return (
    <div className="daybookreports-page">
      <div className="daybookreports-card">
        <h3>Anydate - Day Book</h3>

        {/* Book Type Section */}
        <div className="booktype-section">
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="bookType"
                value="supplementary"
                checked={bookType === 'supplementary'}
                onChange={(e) => setBookType(e.target.value)}
              />
              Supplementary
            </label>
            <label>
              <input
                type="radio"
                name="bookType"
                value="daybook"
                checked={bookType === 'daybook'}
                onChange={(e) => setBookType(e.target.value)}
              />
              Daybook
            </label>
          </div>

          <div className="date-field">
            <label>As on Date:</label>
            <input
              type="date"
              value={reportDate}
              onChange={(e) => setReportDate(e.target.value)}
            />
          </div>
        </div>

        {/* Report Category Section */}
        <div className="report-category-section">
          <span className="section-title">Report Type</span>
          <div className="radio-group four-column">
            <label>
              <input
                type="radio"
                name="reportCategory"
                value="all"
                checked={reportCategory === 'all'}
                onChange={(e) => setReportCategory(e.target.value)}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                name="reportCategory"
                value="glhead"
                checked={reportCategory === 'glhead'}
                onChange={(e) => setReportCategory(e.target.value)}
              />
              GL Head Wise
            </label>
            <label>
              <input
                type="radio"
                name="reportCategory"
                value="deposits"
                checked={reportCategory === 'deposits'}
                onChange={(e) => setReportCategory(e.target.value)}
              />
              Deposits
            </label>
            <label>
              <input
                type="radio"
                name="reportCategory"
                value="loans"
                checked={reportCategory === 'loans'}
                onChange={(e) => setReportCategory(e.target.value)}
              />
              Loans
            </label>
          </div>
        </div>

        {/* Supplementary Type Section */}
        {bookType === 'supplementary' && (
          <div className="supplementary-section">
            <span className="section-title">Supplementary Options</span>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="supplementaryType"
                  value="without"
                  checked={supplementaryType === 'without'}
                  onChange={(e) => setSupplementaryType(e.target.value)}
                />
                Without Particulars
              </label>
              <label>
                <input
                  type="radio"
                  name="supplementaryType"
                  value="with"
                  checked={supplementaryType === 'with'}
                  onChange={(e) => setSupplementaryType(e.target.value)}
                />
                With Particulars
              </label>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="actions">
          <button className="btn-primary" onClick={handleGenerate}>
            Ok
          </button>
          <button className="btn-secondary" onClick={handleClear}>
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default DayBookReports
