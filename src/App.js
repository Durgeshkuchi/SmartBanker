import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import DashboardHome from './components/DashboardHome'
import CustomerOpening from './components/AccountOpening/CustomerOpening'
import LoanOpening from './components/AccountOpening/LoanOpening'
import Income from './components/AccountOpening/GeneralLedgerHeads/Income'
import Expenditure from './components/AccountOpening/GeneralLedgerHeads/Expenditure'
import LoanWizard from './components/AccountOpening/GeneralLedgerHeads/LoanWizard'
import DepositWizard from './components/AccountOpening/GeneralLedgerHeads/DepositWizard'
import AssetsWizard from './components/AccountOpening/GeneralLedgerHeads/AssetsWizard'
import LiabilitiesWizard from './components/AccountOpening/GeneralLedgerHeads/LiabilitiesWizard'
import CashTransactions from './components/Transactions/CashTransactions'
import MemberTransactions from './components/Transactions/MemberTransactions'
import MemberTransactionsBranchwise from './components/Transactions/MemberTransactionsBranchwise'
import SingleMultipleTransactions from './components/Transactions/SingleMultipleTransactions'
import ThriftAdjustmentRetirement from './components/Transactions/Thrift/Retirement/ThriftAdjustmentRetirement'

const App = () => {
  return (
    <Router basename="/SmartBanker">
      <Routes>
        {/* Public route for login */}
        <Route path="/" element={<Login />} />

        {/* Protected route layout */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* Dashboard Home */}
          <Route index element={<DashboardHome />} />

          {/* A/C Opening Routes */}
          <Route path="ac-opening/customer" element={<CustomerOpening />} />
          <Route path="ac-opening/loans" element={<LoanOpening />} />

          {/* General Ledger Heads → Income */}
          <Route path="ac-opening/gl/income" element={<Income />} />
          <Route path="ac-opening/gl/expenditure" element={<Expenditure />} />
          <Route path="ac-opening/gl/loans" element={<LoanWizard />} />
          <Route path="ac-opening/gl/deposits" element={<DepositWizard />} />
          <Route path="ac-opening/gl/assets/" element={<AssetsWizard />} />
          <Route
            path="ac-opening/gl/liabilities/"
            element={<LiabilitiesWizard />}
          />
          <Route path="transactions/cash" element={<CashTransactions />} />
          <Route path="transactions/member" element={<MemberTransactions />} />
          <Route
            path="transactions/member-branch"
            element={<MemberTransactionsBranchwise />}
          />
          <Route
            path="transactions/single-multiple"
            element={<SingleMultipleTransactions />}
          />
          <Route
            path="transactions/thrift/retirement/thrift-adjustment"
            element={<ThriftAdjustmentRetirement />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
