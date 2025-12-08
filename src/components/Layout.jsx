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
    '/dashboard/transactions/online-payments': 'Online Payments',
    '/dashboard/transactions/demand-list': 'Demand List',
    '/dashboard/transactions/settlement/retired': 'Settlement (Retired)',
    '/dashboard/transactions/settlement/death': 'Settlement (Death)',
    '/dashboard/transactions/monthly-transfers': 'Monthly Transfers',
    '/dashboard/transactions/share-capital': 'Share Capital/Dividend Payments',
    '/dashboard/transactions/bank': 'Bank Account Transactions',
    '/dashboard/transactions/bank-reconciliation/reconciliation':
      'Bank Reconciliation',
    '/dashboard/transactions/bank-reconciliation/modification':
      'Reconciliation Modification',
    '/dashboard/transactions/interest/expense': 'Expenditure Transactions',
    '/dashboard/approvals': 'Approvals',
    '/dashboard/utilities/photo-scan': 'Photo Scan',
    '/dashboard/utilities/cheque-books': 'Cheque Books',
    '/dashboard/utilities/execution-standing-instruction':
      'Execution of Standing Instruction',
    '/dashboard/utilities/standing-instruction-amendments':
      'Standing Instruction Amendments',
    '/dashboard/utilities/member-modification': 'Member/Customer Modification',
    '/dashboard/outputs/day-reports': 'Day Reports',
    '/dashboard/outputs/monthly-reports': 'Monthly Reports',
    '/dashboard/outputs/year-end-reports': 'Year End Reports',
    '/dashboard/outputs/member-details': 'Member Details Report',
    '/dashboard/outputs/general-reports/gi-report': 'GL Reports',
    '/dashboard/outputs/general-reports/day-book': 'Day Book Report',
    '/dashboard/outputs/general-reports/payments-receipts':
      'Payments & Receipts Report',
    '/dashboard/outputs/general-reports/bank-statement':
      'Bank Statement Report',
    '/dashboard/outputs/general-reports/balance-sheet': 'Balance Sheet Report',
    '/dashboard/outputs/general-reports/profit-loss': 'Profit & Loss Report',
    '/dashboard/outputs/general-reports/retirement-statement':
      'Retirement Statement Report',
    '/dashboard/outputs/general-reports/member-details':
      'Member Details Report',
    '/dashboard/outputs/general-reports/audit-report': 'Audit Report',
    '/dashboard/outputs/general-reports/branch-greetings':
      'Branchwise Greetings Report',
    '/dashboard/outputs/general-reports/member-greetings':
      'Member Greetings Report',
    '/dashboard/outputs/general-reports/transactions-between-dates':
      'Transactions Between Dates',
    '/dashboard/outputs/general-reports/general-ledger':
      'General Ledger Report',
    '/dashboard/outputs/account-ledger': 'Account Ledger Report',
    '/dashboard/outputs/settlement': 'Settlement Report',
    '/dashboard/outputs/balances-report': 'Balance Reports',
    '/dashboard/outputs/monthly-receipt': 'Monthly Receipt Report',
    '/dashboard/outputs/thrift-interest-report': 'Thrift/MBF Interest Report',
    '/dashboard/outputs/dividend-report': 'Dividend Report',
    '/dashboard/outputs/nominee-list': 'Nominee List',
    '/dashboard/outputs/any-date-balances': 'Any Date Balances',
    '/dashboard/outputs/statement-account': 'Statement Of Account',
    '/dashboard/outputs/loans/sanction-letter': 'Sanction Letter',
    '/dashboard/outputs/loans/sanctioned': 'Loans Sanctioned Reports',
    '/dashboard/outputs/loans/expired': 'Loans About To Expire',
    '/dashboard/outputs/loans/schedule': 'Loan Schedule',
    '/dashboard/outputs/defaulters/list': "Defaulter's List",
    '/dashboard/outputs/defaulters/letter': 'Defaulter Letter',
    '/dashboard/outputs/defaulters/notice': 'Defaulter Notice',
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
