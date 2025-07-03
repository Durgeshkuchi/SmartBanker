import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import '../styles/Layout.scss'

const Layout = () => {
  const location = useLocation()

  // Map routes to titles
  const routeTitleMap = {
    '/dashboard': 'Dashboard',
    '/dashboard/ac-opening': 'A/C Opening',
    '/dashboard/transactions': 'Transactions',
    '/dashboard/approvals': 'Approvals',
    '/dashboard/utilities': 'Utilities',
    '/dashboard/queries': 'Queries',
  }

  const pageTitle = routeTitleMap[location.pathname] || ''
  console.log(location.pathname)
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
