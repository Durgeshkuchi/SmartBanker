import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import '../styles/Layout.scss'

const Layout = () => {
  const location = useLocation()

  const routeTitleMap = {
    '/dashboard': 'Dashboard',
    '/dashboard/ac-opening': 'A/C Opening',
    '/dashboard/ac-opening/customer': 'Customer Opening',
    '/dashboard/ac-opening/loans': 'Loan Opening',
    '/dashboard/ac-opening/deposits': 'Deposits Opening',
    '/dashboard/ac-opening/gl/income': 'Income',
    '/dashboard/ac-opening/gl/expenditure': 'Expenditure Wizard',
    '/dashboard/ac-opening/gl/loans': 'Loan Wizard',
    '/dashboard/ac-opening/gl/deposits': 'Deposit Wizard',
    '/dashboard/ac-opening/gl/assets': 'Assets Wizard',
    '/dashboard/ac-opening/gl/liabilities': 'Liabilities Wizard',
    '/dashboard/transactions': 'Transactions',
    '/dashboard/transactions/cash': 'Cash Transactions',
    '/dashboard/transactions/member': 'Member Transactions',
    '/dashboard/transactions/member-branchwise':
      'Member Transactions (Branchwise)',
    '/dashboard/transactions/single-multiple': 'Single/Multiple Transactions',
    '/dashboard/transactions/thrift/retirement/thrift-adjustment':
      'Thrift Adjustment/Settlement',
    '/dashboard/approvals': 'Approvals',
    '/dashboard/utilities': 'Utilities',
    '/dashboard/queries': 'Queries',
  }

  const pageTitle = routeTitleMap[location.pathname] || ''

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="page-title-bar">
          <h2>{pageTitle}</h2>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
