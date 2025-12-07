import React, { useState } from 'react'
import '../../styles/DemandList.scss'

const DemandList = () => {
  const [activeTab, setActiveTab] = useState('generation')

  // Demand Generation Form
  const [month, setMonth] = useState('')
  const [branchType, setBranchType] = useState('single')
  const [branch, setBranch] = useState('')
  const [statusMsg, setStatusMsg] = useState('')
  const [loading, setLoading] = useState(false)

  // Report Section
  const [reportBranchType, setReportBranchType] = useState('single')
  const [reportBranch, setReportBranch] = useState('')

  // ---------------- Handle Demand Generation ----------------
  const handleGenerate = async () => {
    if (!month) {
      setStatusMsg('Please select a month before generating demand.')
      return
    }

    setLoading(true)
    setStatusMsg('')

    try {
      const apiUrl = 'https://api.yourdomain.com/demand/generate'
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ month, branchType, branch }),
      })

      if (!response.ok) throw new Error('Failed to generate demand')

      setStatusMsg('Demand generated successfully!')
    } catch (err) {
      console.error(err)
      setStatusMsg('Error generating demand. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // ---------------- Handle Report Print ----------------
  const handlePrint = async () => {
    try {
      const apiUrl = 'https://api.yourdomain.com/demand/report'
      await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          month,
          branchType: reportBranchType,
          branch: reportBranch,
        }),
      })
      setStatusMsg('🖨️ Report generated successfully!')
      window.print()
    } catch (err) {
      console.error(err)
      setStatusMsg('Failed to generate report.')
    }
  }

  // ---------------- UI ----------------
  return (
    <div className="demand-list-page">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === 'generation' ? 'active' : ''}
          onClick={() => setActiveTab('generation')}
        >
          Demand Generation
        </button>
        <button
          className={activeTab === 'report' ? 'active' : ''}
          onClick={() => setActiveTab('report')}
        >
          Report
        </button>
      </div>

      {/* Demand Generation Tab */}
      {activeTab === 'generation' && (
        <div className="card demand-card">
          <div className="form-group">
            <label>Demand List for the Month of:</label>
            <input
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="branchType"
                value="single"
                checked={branchType === 'single'}
                onChange={(e) => setBranchType(e.target.value)}
              />
              Single Branch
            </label>
            <label>
              <input
                type="radio"
                name="branchType"
                value="all"
                checked={branchType === 'all'}
                onChange={(e) => setBranchType(e.target.value)}
              />
              All Branches (Including Already Calculated)
            </label>
          </div>

          {branchType === 'single' && (
            <div className="form-group">
              <label>Branch</label>
              <div className="branch-input">
                <input
                  type="text"
                  placeholder="Enter Branch Code or Name"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />
                <button className="lookup-btn">L</button>
              </div>
            </div>
          )}

          <div className="actions">
            <button onClick={handleGenerate} disabled={loading}>
              {loading ? 'Generating...' : 'Demand Generate'}
            </button>
            <button className="cancel">Exit</button>
          </div>

          {statusMsg && <div className="status-msg">{statusMsg}</div>}
        </div>
      )}

      {/* Report Tab */}
      {activeTab === 'report' && (
        <div className="card report-card">
          <div className="form-group">
            <label>Demand List for the Month of:</label>
            <input
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="reportBranchType"
                value="single"
                checked={reportBranchType === 'single'}
                onChange={(e) => setReportBranchType(e.target.value)}
              />
              Single Branch
            </label>
            <label>
              <input
                type="radio"
                name="reportBranchType"
                value="all"
                checked={reportBranchType === 'all'}
                onChange={(e) => setReportBranchType(e.target.value)}
              />
              All Branches
            </label>
            <label>
              <input
                type="radio"
                name="reportBranchType"
                value="complete"
                checked={reportBranchType === 'complete'}
                onChange={(e) => setReportBranchType(e.target.value)}
              />
              Complete Details
            </label>
          </div>

          {reportBranchType === 'single' && (
            <div className="form-group">
              <label>Branch</label>
              <div className="branch-input">
                <input
                  type="text"
                  placeholder="Enter Branch Code or Name"
                  value={reportBranch}
                  onChange={(e) => setReportBranch(e.target.value)}
                />
                <button className="lookup-btn">L</button>
              </div>
            </div>
          )}

          <div className="actions">
            <button onClick={handlePrint}>Print</button>
            <button className="cancel">Exit</button>
          </div>

          {statusMsg && <div className="status-msg">{statusMsg}</div>}
        </div>
      )}
    </div>
  )
}

export default DemandList
