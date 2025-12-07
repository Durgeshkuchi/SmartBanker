import React, { useState } from 'react'
import '../../../styles/MemberGreetingsReport.scss'

const MemberGreetingsReport = () => {
  const [memberId, setMemberId] = useState('')
  const [memberName, setMemberName] = useState('')
  const [greetingMessage, setGreetingMessage] = useState('')

  const handleGenerate = () => {
    alert(
      `Generating Member Greetings Report\nMember ID: ${memberId}\nName: ${memberName}\nMessage: ${greetingMessage}`
    )
  }

  const handleClear = () => {
    setMemberId('')
    setMemberName('')
    setGreetingMessage('')
  }

  return (
    <div className="membergreetings-page">
      <div className="membergreetings-card">
        <h3>Member Greetings Report</h3>

        {/* Member Section */}
        <div className="section">
          <h4>Member Details</h4>
          <div className="form-group">
            <label>Member ID:</label>
            <div className="member-fields">
              <input
                type="text"
                placeholder="Member ID"
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

        {/* Greeting Message */}
        <div className="section">
          <label>Greeting Message:</label>
          <textarea
            placeholder="Enter custom message or preview..."
            rows="4"
            value={greetingMessage}
            onChange={(e) => setGreetingMessage(e.target.value)}
          />
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

export default MemberGreetingsReport
