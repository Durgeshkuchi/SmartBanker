import React, { useState } from 'react'
import '../../../styles/DefaulterLetter.scss'

const DefaulterLetter = () => {
  const [memberId, setMemberId] = useState('')
  const [memberName, setMemberName] = useState('')
  const [date, setDate] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Defaulter Letter:\nMember ID: ${memberId} - ${memberName}\nDate: ${date}`
    )
  }

  const handleClear = () => {
    setMemberId('')
    setMemberName('')
    setDate('')
  }

  return (
    <div className="defaulter-letter-page">
      <div className="defaulter-letter-card">
        <h3>Defaulter Letter</h3>

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

        {/* Date Section */}
        <div className="section">
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="actions">
          <button className="btn-primary" onClick={handleGenerate}>
            Report
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

export default DefaulterLetter
