import React, { useState } from 'react'
import '../../styles/MemberCustomerModification.scss'

const MemberCustomerModification = () => {
  const [form, setForm] = useState({
    type: 'member',
    mode: 'add',
    memberNo: '',
    name: '',
    relation: '',
    designation: '',
    category: '',
    dateOfBirth: '',
    appointmentDate: '',
    retirementDate: '',
    empCode: '',
    bankAccNo: '',
    basicPay: '',
    shareAmt: '',
    bloodGroup: '',
    applicationNo: '',
    gender: 'male',
    membershipDate: '',
    address: {
      flatNo: '',
      street: '',
      village: '',
      city: '',
      state: 'Andhra Pradesh',
      pincode: '',
      phone: '',
      email: '',
      community: '',
    },
    branch: {
      branch: '',
      section: '',
      district: '',
      state: 'Andhra Pradesh',
      pin: '',
      module: '',
      region: '',
      zone: '',
      mbfNo: '',
      thriftDepNo: '',
      thriftAmt: '',
      mbfAmt: '',
      mbfDate: '',
    },
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleNestedChange = (section, field, value) => {
    setForm({
      ...form,
      [section]: { ...form[section], [field]: value },
    })
  }

  const handleClear = () => {
    window.location.reload()
  }

  const handleSubmit = () => {
    console.log('Customer Modification Submitted:', form)
    alert('Customer details updated successfully.')
  }

  return (
    <div className="customer-page">
      <div className="customer-card">
        <h3>Customer Master</h3>

        {/* ===== CUSTOMER DETAILS ===== */}
        <div className="section">
          <h4>Customer Details</h4>

          <div className="radio-group">
            <div>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="member"
                  checked={form.type === 'member'}
                  onChange={handleChange}
                />
                Member
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="nominee"
                  checked={form.type === 'nominee'}
                  onChange={handleChange}
                />
                Nominee
              </label>
            </div>
          </div>

          <div className="grid-4">
            <div className="field">
              <label>Member No</label>
              <input
                name="memberNo"
                value={form.memberNo}
                onChange={handleChange}
                placeholder="Enter Member No"
              />
            </div>
            <div className="field">
              <label>Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>
            <div className="field">
              <label>Relation</label>
              <select
                name="relation"
                value={form.relation}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="S/o">S/o</option>
                <option value="D/o">D/o</option>
                <option value="W/o">W/o</option>
              </select>
            </div>
            <div className="field">
              <label>Application No</label>
              <input
                name="applicationNo"
                value={form.applicationNo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-4">
            <div className="field">
              <label>Designation</label>
              <input
                name="designation"
                value={form.designation}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Category</label>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Membership Date</label>
              <input
                type="date"
                name="membershipDate"
                value={form.membershipDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-4">
            <div className="field">
              <label>Appointment Date</label>
              <input
                type="date"
                name="appointmentDate"
                value={form.appointmentDate}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Retirement Date</label>
              <input
                type="date"
                name="retirementDate"
                value={form.retirementDate}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Emp Code</label>
              <input
                name="empCode"
                value={form.empCode}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Bank Acc No</label>
              <input
                name="bankAccNo"
                value={form.bankAccNo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-4">
            <div className="field">
              <label>Basic Pay</label>
              <input
                type="number"
                name="basicPay"
                value={form.basicPay}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Share Amount</label>
              <input
                type="number"
                name="shareAmt"
                value={form.shareAmt}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Blood Group</label>
              <input
                name="bloodGroup"
                value={form.bloodGroup}
                onChange={handleChange}
              />
            </div>
            <div className="field gender-group">
              <label>Gender</label>
              <div className="radio-inline">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={form.gender === 'male'}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === 'female'}
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ADDRESS DETAILS ===== */}
        <div className="section">
          <h4>Address</h4>
          <div className="grid-3">
            <div className="field">
              <label>Flat / House No</label>
              <input
                value={form.address.flatNo}
                onChange={(e) =>
                  handleNestedChange('address', 'flatNo', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Street / Lane</label>
              <input
                value={form.address.street}
                onChange={(e) =>
                  handleNestedChange('address', 'street', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Village / Town</label>
              <input
                value={form.address.village}
                onChange={(e) =>
                  handleNestedChange('address', 'village', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>City</label>
              <input
                value={form.address.city}
                onChange={(e) =>
                  handleNestedChange('address', 'city', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>State</label>
              <input
                value={form.address.state}
                onChange={(e) =>
                  handleNestedChange('address', 'state', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Pin Code</label>
              <input
                value={form.address.pincode}
                onChange={(e) =>
                  handleNestedChange('address', 'pincode', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Phone</label>
              <input
                value={form.address.phone}
                onChange={(e) =>
                  handleNestedChange('address', 'phone', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Community</label>
              <input
                value={form.address.community}
                onChange={(e) =>
                  handleNestedChange('address', 'community', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Email ID</label>
              <input
                value={form.address.email}
                onChange={(e) =>
                  handleNestedChange('address', 'email', e.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* ===== BRANCH DETAILS ===== */}
        <div className="section">
          <h4>Branch Details</h4>

          <div className="grid-3">
            <div className="field">
              <label>Branch</label>
              <input
                value={form.branch.branch}
                onChange={(e) =>
                  handleNestedChange('branch', 'branch', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Section</label>
              <input
                value={form.branch.section}
                onChange={(e) =>
                  handleNestedChange('branch', 'section', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>District</label>
              <input
                value={form.branch.district}
                onChange={(e) =>
                  handleNestedChange('branch', 'district', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Module</label>
              <input
                value={form.branch.module}
                onChange={(e) =>
                  handleNestedChange('branch', 'module', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Region</label>
              <input
                value={form.branch.region}
                onChange={(e) =>
                  handleNestedChange('branch', 'region', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Zone</label>
              <input
                value={form.branch.zone}
                onChange={(e) =>
                  handleNestedChange('branch', 'zone', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>MBF No</label>
              <input
                value={form.branch.mbfNo}
                onChange={(e) =>
                  handleNestedChange('branch', 'mbfNo', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Thrift Dep No</label>
              <input
                value={form.branch.thriftDepNo}
                onChange={(e) =>
                  handleNestedChange('branch', 'thriftDepNo', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>Thrift Amount</label>
              <input
                type="number"
                value={form.branch.thriftAmt}
                onChange={(e) =>
                  handleNestedChange('branch', 'thriftAmt', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>MBF Amount</label>
              <input
                type="number"
                value={form.branch.mbfAmt}
                onChange={(e) =>
                  handleNestedChange('branch', 'mbfAmt', e.target.value)
                }
              />
            </div>
            <div className="field">
              <label>MBF Date</label>
              <input
                type="date"
                value={form.branch.mbfDate}
                onChange={(e) =>
                  handleNestedChange('branch', 'mbfDate', e.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="actions">
          <button className="btn-primary" onClick={handleSubmit}>
            Ok
          </button>
          <button className="btn-secondary" onClick={handleClear}>
            Cancel
          </button>
          <button
            className="btn-secondary"
            onClick={() => alert('Exiting Page')}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default MemberCustomerModification
