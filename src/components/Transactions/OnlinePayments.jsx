import React, { useState } from 'react'
import '../../styles/OnlinePayments.scss'

const OnlinePayments = () => {
  const [formData, setFormData] = useState({
    chqNo: '',
    amount: '',
    chqDate: '',
    acNo: '',
    memberId: '',
    memberName: '',
    bankAccountNo: '',
    entryDate: '',
  })

  const [entries, setEntries] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')

  // ------------------ FORM HANDLERS ------------------
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAdd = () => {
    if (
      !formData.memberId ||
      !formData.amount ||
      !formData.acNo ||
      !formData.chqNo
    ) {
      setStatusMsg('⚠️ Please fill mandatory fields before adding.')
      return
    }

    setEntries((prev) => [...prev, { ...formData, id: Date.now() }])
    setFormData({
      chqNo: '',
      amount: '',
      chqDate: '',
      acNo: '',
      memberId: '',
      memberName: '',
      bankAccountNo: '',
      entryDate: '',
    })
    setStatusMsg('✅ Record added successfully!')
  }

  const handleDelete = (id) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id))
    setStatusMsg('🗑️ Record deleted.')
  }

  // ------------------ SUBMIT HANDLER ------------------
  const handleSubmit = async () => {
    if (entries.length === 0) {
      setStatusMsg('⚠️ Please add at least one record before submitting.')
      return
    }

    setSubmitting(true)
    setStatusMsg('')

    try {
      // Replace with your actual backend API
      const apiUrl = 'https://api.yourdomain.com/online-payments'
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entries),
      })

      if (!response.ok) {
        throw new Error('Failed to submit data')
      }

      setStatusMsg('Records submitted successfully!')
      setEntries([])
    } catch (error) {
      console.error('Error submitting:', error)
      setStatusMsg('Submission failed. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  // ------------------ RENDER ------------------
  return (
    <div className="online-payments-page">
      <div className="payment-form">
        <div className="form-grid">
          <div className="field">
            <label>Chq No</label>
            <input
              name="chqNo"
              value={formData.chqNo}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Amt</label>
            <input
              name="amount"
              type="number"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Chq Date</label>
            <input
              type="date"
              name="chqDate"
              value={formData.chqDate}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>AC/No</label>
            <input name="acNo" value={formData.acNo} onChange={handleChange} />
          </div>

          <div className="field">
            <label>Member ID</label>
            <input
              name="memberId"
              value={formData.memberId}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Member Name</label>
            <input
              name="memberName"
              value={formData.memberName}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Bank Account No</label>
            <input
              name="bankAccountNo"
              value={formData.bankAccountNo}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Date</label>
            <input
              type="date"
              name="entryDate"
              value={formData.entryDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="actions">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSubmit} disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>

      {/* ---------------------- TABLE SECTION ---------------------- */}
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Member ID</th>
              <th>Name</th>
              <th>Cheque No</th>
              <th>AC No</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {entries.length === 0 ? (
              <tr>
                <td colSpan="8" className="empty">
                  No records added yet.
                </td>
              </tr>
            ) : (
              entries.map((entry, index) => (
                <tr key={entry.id}>
                  <td>{index + 1}</td>
                  <td>{entry.memberId}</td>
                  <td>{entry.memberName}</td>
                  <td>{entry.chqNo}</td>
                  <td>{entry.acNo}</td>
                  <td>{entry.amount}</td>
                  <td>{entry.entryDate}</td>
                  <td>
                    <button
                      className="del-btn"
                      onClick={() => handleDelete(entry.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {statusMsg && <div className="status-msg">{statusMsg}</div>}
    </div>
  )
}

export default OnlinePayments
