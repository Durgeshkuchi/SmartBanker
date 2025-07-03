import React from 'react'
import '../styles/CustomerForm.scss'

const CustomerForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-button" onClick={onClose}>
          ✖
        </button>

        <h3 className="modal-title">Customer Master</h3>

        {/* Customer Details Section */}
        <div className="form-section">
          <div className="form-group">
            <label>Member No:</label>
            <input type="text" value="2373" readOnly />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Relation:</label>
            <select>
              <option value="S/o">S/o</option>
              <option value="D/o">D/o</option>
            </select>
          </div>
          <div className="form-group">
            <label>Designation:</label>
            <input type="text" value="REGIONAL COMMIS" readOnly />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input type="text" value="CBOCATEGORY" readOnly />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Membership Date:</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Appointment Date:</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Retirement Date:</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Emp Code:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Bank Account No:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Basic Pay:</label>
            <input type="text" value="0.00" readOnly />
          </div>
          <div className="form-group">
            <label>Share Amount:</label>
            <input type="text" value="0.00" readOnly />
          </div>
          <div className="form-group">
            <label>Blood Group:</label>
            <input type="text" />
          </div>
        </div>

        {/* Address Section */}
        <h4 className="section-title">Address</h4>
        <div className="form-section">
          <div className="form-group">
            <label>H No/Flat No/D No:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Lane No/Street No:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Village/Town:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input type="text" value="Andhra Pradesh" readOnly />
          </div>
          <div className="form-group">
            <label>Pin Code:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Email ID:</label>
            <input type="email" />
          </div>
        </div>

        {/* Branch Details Section */}
        <h4 className="section-title">Branch Details</h4>
        <div className="form-section">
          <div className="form-group">
            <label>Branch:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Section:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>District:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input type="text" value="01" readOnly />
          </div>
          <div className="form-group">
            <label>Pin:</label>
            <input type="text" />
          </div>
        </div>

        {/* Other Details Section */}
        <h4 className="section-title">Other Details</h4>
        <div className="form-section">
          <div className="form-group">
            <label>Module:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Zone:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>MBF No:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Thrift Dep No:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Thrift Amount:</label>
            <input type="text" value="0.00" readOnly />
          </div>
          <div className="form-group">
            <label>MBF Date:</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>MBF Amount:</label>
            <input type="text" value="0.00" readOnly />
          </div>
        </div>

        {/* Buttons */}
        <div className="modal-buttons">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="save">OK</button>
        </div>
      </div>
    </div>
  )
}

export default CustomerForm
