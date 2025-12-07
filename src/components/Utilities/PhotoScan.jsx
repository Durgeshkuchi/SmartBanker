import React, { useState } from 'react'
import '../../styles/PhotoScan.scss'

const PhotoScan = () => {
  const [form, setForm] = useState({
    option: 'new',
    memberId: '',
    scanType: 'photo',
    selectedFile: null,
    previewPhoto: null,
    previewSignature: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      if (form.scanType === 'photo') {
        setForm({ ...form, selectedFile: file, previewPhoto: previewUrl })
      } else {
        setForm({ ...form, selectedFile: file, previewSignature: previewUrl })
      }
    }
  }

  const handleAssign = () => {
    console.log('Assigned:', form)
    alert(
      `${
        form.scanType === 'photo' ? 'Photo' : 'Signature'
      } assigned successfully.`
    )
  }

  const handleClear = () => {
    setForm({
      option: 'new',
      memberId: '',
      scanType: 'photo',
      selectedFile: null,
      previewPhoto: null,
      previewSignature: null,
    })
  }

  return (
    <div className="photo-scan-page">
      <div className="photo-scan-card">
        {/* Option Section */}
        <div className="options-group">
          <label className="group-label">Option:</label>
          <div className="radio-group">
            {['new', 'modify', 'delete'].map((opt) => (
              <label key={opt}>
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={form.option === opt}
                  onChange={handleChange}
                />
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Member Info */}
        <div className="grid-2 member-group">
          <div className="field">
            <label>Member ID</label>
            <input
              type="text"
              name="memberId"
              value={form.memberId}
              onChange={handleChange}
              placeholder="Enter Member ID"
            />
          </div>

          <div className="field scan-type">
            <label>Scan Type</label>
            <div className="radio-group-inline">
              <label>
                <input
                  type="radio"
                  name="scanType"
                  value="photo"
                  checked={form.scanType === 'photo'}
                  onChange={handleChange}
                />
                Photo
              </label>
              <label>
                <input
                  type="radio"
                  name="scanType"
                  value="signature"
                  checked={form.scanType === 'signature'}
                  onChange={handleChange}
                />
                Signature
              </label>
            </div>
          </div>
        </div>

        {/* Upload */}
        <div className="upload-section">
          <label className="upload-label">Select File:</label>
          <input type="file" accept="image/*" onChange={handleFileSelect} />
        </div>

        {/* Preview Section */}
        <div className="grid-2 preview-section">
          <div className="preview-box">
            <h4>Photo</h4>
            {form.previewPhoto ? (
              <img src={form.previewPhoto} alt="Photo Preview" />
            ) : (
              <div className="placeholder">No Photo Uploaded</div>
            )}
          </div>
          <div className="preview-box">
            <h4>Signature</h4>
            {form.previewSignature ? (
              <img src={form.previewSignature} alt="Signature Preview" />
            ) : (
              <div className="placeholder">No Signature Uploaded</div>
            )}
          </div>
        </div>

        {/* Assign */}
        <div className="assign-section">
          <button type="button" onClick={handleAssign} className="btn-assign">
            Assign &gt;&gt;
          </button>
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="btn-primary">Ok</button>
          <button className="btn-secondary" onClick={handleClear}>
            Cancel
          </button>
          <button className="btn-secondary">Exit</button>
        </div>
      </div>
    </div>
  )
}

export default PhotoScan
