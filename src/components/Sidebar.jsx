import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaRupeeSign,
  FaThLarge,
  FaExchangeAlt,
  FaClipboardCheck,
  FaTools,
  FaQuestionCircle,
  FaChevronDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaUniversity,
  FaMoneyCheckAlt,
  FaUsers,
  FaFileInvoiceDollar,
  FaPiggyBank,
  FaChartLine,
  FaRegListAlt,
  FaCreditCard,
} from 'react-icons/fa'
import SmartBankerIcon from '../assets/smartBankerIcon.png'
import '../styles/Sidebar.scss'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [openMenu, setOpenMenu] = useState('')
  const [openSubMenu, setOpenSubMenu] = useState({
    thrift: false,
    retirement: false,
    death: false,
    loans: false,
    newLoans: false,
    loanRepayment: false,
    generalReports: false,
    defaulters: false,
  })

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu)
  }

  const toggleSubMenu = (submenu) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }))
  }

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Header */}
      <div className="sidebar-header">
        <img src={SmartBankerIcon} alt="Smart Banker Icon" />
        {!isCollapsed && (
          <h2>
            <span className="smart">SMART</span>
            <br />
            <span className="banker">BANKER</span>
          </h2>
        )}
      </div>

      {/* Scrollable navigation */}
      <div className="nav-scroll">
        <div className="nav-links">
          {/* Dashboard */}
          <NavLink to="/dashboard" end>
            <FaThLarge />
            {!isCollapsed && <span>Dashboard</span>}
          </NavLink>

          {/* A/C Opening */}
          <div className={`submenu ${openMenu === 'ac-opening' ? 'open' : ''}`}>
            <div
              className="submenu-header"
              onClick={() => toggleMenu('ac-opening')}
            >
              <FaRupeeSign />
              {!isCollapsed && <span>A/C Opening</span>}
              {!isCollapsed && (
                <FaChevronDown
                  className={openMenu === 'ac-opening' ? 'rotate' : ''}
                />
              )}
            </div>

            {openMenu === 'ac-opening' && !isCollapsed && (
              <div className="submenu-items">
                <NavLink to="/dashboard/ac-opening/loans">
                  Loan Openings
                </NavLink>
                <NavLink to="/dashboard/ac-opening/customer">
                  Customer Opening
                </NavLink>
                <div className="submenu-group">
                  <span>General Ledger Heads</span>
                  <NavLink to="/dashboard/ac-opening/gl/income">Income</NavLink>
                  <NavLink to="/dashboard/ac-opening/gl/expenditure">
                    Expenditure
                  </NavLink>
                  <NavLink to="/dashboard/ac-opening/gl/loans">Loans</NavLink>
                  <NavLink to="/dashboard/ac-opening/gl/deposits">
                    Deposits
                  </NavLink>
                  <NavLink to="/dashboard/ac-opening/gl/assets">Assets</NavLink>
                  <NavLink to="/dashboard/ac-opening/gl/liabilities">
                    Liabilities
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* Transactions */}
          <div
            className={`submenu ${openMenu === 'transactions' ? 'open' : ''}`}
          >
            <div
              className="submenu-header"
              onClick={() => toggleMenu('transactions')}
            >
              <FaExchangeAlt />
              {!isCollapsed && <span>Transactions</span>}
              {!isCollapsed && (
                <FaChevronDown
                  className={openMenu === 'transactions' ? 'rotate' : ''}
                />
              )}
            </div>

            {openMenu === 'transactions' && !isCollapsed && (
              <div className="submenu-items">
                <NavLink to="/dashboard/transactions/cash">
                  Cash Transactions
                </NavLink>
                <NavLink to="/dashboard/transactions/member">
                  Member Transactions
                </NavLink>
                <NavLink to="/dashboard/transactions/member-branch">
                  Member Transactions (Branchwise)
                </NavLink>
                <NavLink to="/dashboard/transactions/single-multiple">
                  Single / Multiple Transactions
                </NavLink>

                {/* Thrift / MBF / Deposits */}
                <div className="submenu-group collapsible">
                  <div
                    className="submenu-group-header"
                    onClick={() => toggleSubMenu('thrift')}
                  >
                    <span>Thrift / MBF / Deposits</span>
                    <FaChevronDown
                      className={`chevron ${
                        openSubMenu.thrift ? 'rotate' : ''
                      }`}
                    />
                  </div>

                  <div
                    className={`submenu-collapse ${
                      openSubMenu.thrift ? 'open' : ''
                    }`}
                  >
                    {/* Retirement */}
                    <div className="submenu-nested">
                      <div
                        className="submenu-subheader-small clickable"
                        onClick={() => toggleSubMenu('retirement')}
                      >
                        Retirement
                        <FaChevronDown
                          className={`chevron ${
                            openSubMenu.retirement ? 'rotate' : ''
                          }`}
                        />
                      </div>
                      <div
                        className={`submenu-collapse-inner ${
                          openSubMenu.retirement ? 'open' : ''
                        }`}
                      >
                        <NavLink to="/dashboard/transactions/thrift/retirement/thrift-adjustment">
                          Thrift Adjustment / Settlement
                        </NavLink>
                        <NavLink to="/dashboard/transactions/thrift/retirement/mbf-adjustment">
                          MBF(DRB) Adjustment / Settlement
                        </NavLink>
                        <NavLink to="/dashboard/transactions/thrift/retirement/mbf-installments">
                          MBF Installments
                        </NavLink>
                        <NavLink to="/dashboard/transactions/thrift/retirement/mbf-payments">
                          MBF Payments
                        </NavLink>
                        <NavLink to="/dashboard/transactions/thrift/retirement/deposit-interest">
                          Deposit Interest Payments
                        </NavLink>
                      </div>
                    </div>

                    {/* Death */}
                    <div className="submenu-nested">
                      <div
                        className="submenu-subheader-small clickable"
                        onClick={() => toggleSubMenu('death')}
                      >
                        Death
                        <FaChevronDown
                          className={`chevron ${
                            openSubMenu.death ? 'rotate' : ''
                          }`}
                        />
                      </div>
                      <div
                        className={`submenu-collapse-inner ${
                          openSubMenu.death ? 'open' : ''
                        }`}
                      >
                        <NavLink to="/dashboard/transactions/thrift/death/thrift-adjustment">
                          Thrift Adjustment / Settlement
                        </NavLink>
                        <NavLink to="/dashboard/transactions/thrift/death/mbf-adjustment">
                          MBF(DRB) Adjustment / Settlement
                        </NavLink>
                        <NavLink to="/dashboard/transactions/thrift/death/mbf-installments">
                          MBF Installments
                        </NavLink>
                        <NavLink to="/dashboard/transactions/thrift/death/mbf-payments">
                          MBF Payments
                        </NavLink>
                        <NavLink to="/dashboard/transactions/thrift/death/deposit-interest">
                          Deposit Interest Payments
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Loans and Advances */}
                <div className="submenu-group collapsible loans-advances-group">
                  <div
                    className="submenu-group-header"
                    onClick={() => toggleSubMenu('loans')}
                  >
                    <span>Loans and Advances</span>
                    <FaChevronDown
                      className={`chevron ${openSubMenu.loans ? 'rotate' : ''}`}
                    />
                  </div>

                  <div
                    className={`submenu-collapse ${
                      openSubMenu.loans ? 'open' : ''
                    }`}
                  >
                    <NavLink to="/dashboard/transactions/loans/disbursements">
                      Disbursements
                    </NavLink>
                    <NavLink to="/dashboard/transactions/loans/loan-adjustments">
                      Loan Adjustments
                    </NavLink>
                    <NavLink to="/dashboard/transactions/loans/loan-repayments">
                      Loan Repayments
                    </NavLink>
                  </div>
                </div>

                <NavLink to="/dashboard/transactions/bank">
                  Bank Transactions
                </NavLink>
                <div className="submenu-group collapsible bankrecon-group">
                  <div
                    className="submenu-group-header"
                    onClick={() => toggleSubMenu('bankreconciliation')}
                  >
                    <span>Bank Reconciliation</span>
                    <FaChevronDown
                      className={`chevron ${
                        openSubMenu.bankreconciliation ? 'rotate' : ''
                      }`}
                    />
                  </div>

                  <div
                    className={`submenu-collapse ${
                      openSubMenu.bankreconciliation ? 'open' : ''
                    }`}
                  >
                    <NavLink to="/dashboard/transactions/bank-reconciliation/reconciliation">
                      Reconciliation
                    </NavLink>
                    <NavLink to="/dashboard/transactions/bank-reconciliation/modification">
                      Reconciliation Modification
                    </NavLink>
                  </div>
                </div>

                <div className="submenu-group collapsible interest-group">
                  <div
                    className="submenu-group-header"
                    onClick={() => toggleSubMenu('interest')}
                  >
                    <span>Interest Accounts</span>
                    <FaChevronDown
                      className={`chevron ${
                        openSubMenu.interest ? 'rotate' : ''
                      }`}
                    />
                  </div>

                  <div
                    className={`submenu-collapse ${
                      openSubMenu.interest ? 'open' : ''
                    }`}
                  >
                    <NavLink to="/dashboard/transactions/interest/expense">
                      Expense Account
                    </NavLink>
                    <NavLink to="/dashboard/transactions/interest/income">
                      Income Account
                    </NavLink>
                    <NavLink to="/dashboard/transactions/interest/receivable">
                      Receivable Account
                    </NavLink>
                    <NavLink to="/dashboard/transactions/interest/payable">
                      Payable Account
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/dashboard/transactions/share-capital">
                  Share Capital/Dividend Payments
                </NavLink>
                <NavLink to="/dashboard/transactions/monthly-transfers">
                  Monthly Transfers
                </NavLink>
                {/* Settlement */}
                <div className="submenu-group collapsible settlement-group">
                  <div
                    className="submenu-group-header"
                    onClick={() => toggleSubMenu('settlement')}
                  >
                    <span>Settlement</span>
                    <FaChevronDown
                      className={`chevron ${
                        openSubMenu.settlement ? 'rotate' : ''
                      }`}
                    />
                  </div>

                  <div
                    className={`submenu-collapse ${
                      openSubMenu.settlement ? 'open' : ''
                    }`}
                  >
                    <NavLink to="/dashboard/transactions/settlement/retired">
                      Settlement (Retired)
                    </NavLink>
                    <NavLink to="/dashboard/transactions/settlement/death">
                      Settlement (Death)
                    </NavLink>
                  </div>
                </div>

                <NavLink to="/dashboard/transactions/demand-list">
                  Demand List
                </NavLink>
                <NavLink to="/dashboard/transactions/online-payments">
                  Online Payments
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/dashboard/approvals">
            <FaClipboardCheck />
            {!isCollapsed && <span>Approvals</span>}
          </NavLink>

          {/* Utilities */}
          <div className={`submenu ${openMenu === 'utilities' ? 'open' : ''}`}>
            <div
              className="submenu-header"
              onClick={() => toggleMenu('utilities')}
            >
              <FaTools />
              {!isCollapsed && <span>Utilities</span>}
              {!isCollapsed && (
                <FaChevronDown
                  className={openMenu === 'utilities' ? 'rotate' : ''}
                />
              )}
            </div>

            {openMenu === 'utilities' && !isCollapsed && (
              <div className="submenu-items">
                <NavLink to="/dashboard/utilities/photo-scan">
                  Photo Scan
                </NavLink>
                <NavLink to="/dashboard/utilities/cheque-books">
                  Cheque Books
                </NavLink>
                <NavLink to="/dashboard/utilities/execution-standing-instruction">
                  Execution of Standing Instruction
                </NavLink>
                <NavLink to="/dashboard/utilities/standing-instruction-amendments">
                  Standing Instructions Amendments
                </NavLink>
                <NavLink to="/dashboard/utilities/member-modification">
                  Member / Customer Modification
                </NavLink>

                {/* Accessories */}
                {/* <div className="submenu-group collapsible accessories-group">
                  <div
                    className="submenu-group-header"
                    onClick={() => toggleSubMenu('accessories')}
                  >
                    <span>Accessories</span>
                    <FaChevronDown
                      className={`chevron ${
                        openSubMenu.accessories ? 'rotate' : ''
                      }`}
                    />
                  </div>

                  <div
                    className={`submenu-collapse ${
                      openSubMenu.accessories ? 'open' : ''
                    }`}
                  >
                    <NavLink to="/dashboard/utilities/accessories/system-config">
                      System Configuration
                    </NavLink>
                    <NavLink to="/dashboard/utilities/accessories/font-settings">
                      Font Settings
                    </NavLink>
                    <NavLink to="/dashboard/utilities/accessories/backup-restore">
                      Backup & Restore
                    </NavLink>
                    <NavLink to="/dashboard/utilities/accessories/calculator">
                      Calculator
                    </NavLink>
                  </div>
                </div> */}
              </div>
            )}
          </div>

          {/* ===== OUTPUTS MENU ===== */}
          <div className={`submenu ${openMenu === 'outputs' ? 'open' : ''}`}>
            <div
              className="submenu-header"
              onClick={() => toggleMenu('outputs')}
            >
              <FaFileInvoiceDollar />
              {!isCollapsed && <span>Outputs</span>}
              {!isCollapsed && (
                <FaChevronDown
                  className={openMenu === 'outputs' ? 'rotate' : ''}
                />
              )}
            </div>

            {openMenu === 'outputs' && !isCollapsed && (
              <div className="submenu-items">
                <NavLink to="/dashboard/outputs/day-reports">
                  Day Reports
                </NavLink>
                <NavLink to="/dashboard/outputs/monthly-reports">
                  Monthly Reports
                </NavLink>
                <NavLink to="/dashboard/outputs/year-end-reports">
                  Year End Reports
                </NavLink>
                <NavLink to="/dashboard/outputs/member-details">
                  Member Details
                </NavLink>

                {/* General Reports Group */}
                <div className="submenu-group collapsible">
                  <div
                    className="submenu-group-header"
                    onClick={() => toggleSubMenu('generalReports')}
                  >
                    <span>General Reports</span>
                    <FaChevronDown
                      className={`chevron ${
                        openSubMenu.generalReports ? 'rotate' : ''
                      }`}
                    />
                  </div>

                  <div
                    className={`submenu-collapse ${
                      openSubMenu.generalReports ? 'open' : ''
                    }`}
                  >
                    <NavLink to="/dashboard/outputs/general-reports/gi-report">
                      GI Report
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/day-book">
                      Day Book
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/payments-receipts">
                      Payments & Receipts
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/bank-statement">
                      Bank Statement
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/balance-sheet">
                      Balance Sheet
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/profit-loss">
                      Profit & Loss Reports
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/retirement-statement">
                      Retirement Statement
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/member-details">
                      Member Details
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/audit-report">
                      Audit Report
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/branch-greetings">
                      Branch Greetings
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/member-greetings">
                      Member Greetings
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/transactions-between-dates">
                      Transactions Between Dates
                    </NavLink>
                    <NavLink to="/dashboard/outputs/general-reports/general-ledger">
                      General Ledger
                    </NavLink>
                  </div>
                </div>

                {/* Loans Group */}
                <div className="submenu-group collapsible">
                  <div
                    className="submenu-group-header"
                    onClick={() => toggleSubMenu('loans')}
                  >
                    <span>Loans</span>
                    <FaChevronDown
                      className={`chevron ${openSubMenu.loans ? 'rotate' : ''}`}
                    />
                  </div>

                  <div
                    className={`submenu-collapse ${
                      openSubMenu.loans ? 'open' : ''
                    }`}
                  >
                    <NavLink to="/dashboard/outputs/loans/sanction-letter">
                      Sanction Letter
                    </NavLink>
                    <NavLink to="/dashboard/outputs/loans/sanctioned">
                      Loans Sanctioned
                    </NavLink>
                    <NavLink to="/dashboard/outputs/loans/expired">
                      Loans Expired
                    </NavLink>
                    <NavLink to="/dashboard/outputs/loans/schedule">
                      Loan Schedule
                    </NavLink>
                  </div>
                </div>

                <NavLink to="/dashboard/outputs/statement-account">
                  Statement of Account
                </NavLink>
                <NavLink to="/dashboard/outputs/any-date-balances">
                  Any Date Balances
                </NavLink>
                <NavLink to="/dashboard/outputs/nominee-list">
                  Nominee List
                </NavLink>
                <NavLink to="/dashboard/outputs/dividend-report">
                  Dividend Report
                </NavLink>
                <NavLink to="/dashboard/outputs/thrift-interest-report">
                  Thrift/MBF Interest Report
                </NavLink>
                <NavLink to="/dashboard/outputs/monthly-receipt">
                  Monthly Receipt
                </NavLink>
                <NavLink to="/dashboard/outputs/balances-report">
                  Balances Report
                </NavLink>
                <NavLink to="/dashboard/outputs/settlement">Settlement</NavLink>
                <NavLink to="/dashboard/outputs/account-ledger">
                  Account Ledger
                </NavLink>

                {/* Defaulters Group */}
                <div className="submenu-group collapsible">
                  <div
                    className="submenu-group-header"
                    onClick={() => toggleSubMenu('defaulters')}
                  >
                    <span>Defaulters</span>
                    <FaChevronDown
                      className={`chevron ${
                        openSubMenu.defaulters ? 'rotate' : ''
                      }`}
                    />
                  </div>

                  <div
                    className={`submenu-collapse ${
                      openSubMenu.defaulters ? 'open' : ''
                    }`}
                  >
                    <NavLink to="/dashboard/outputs/defaulters/list">
                      Defaulter List
                    </NavLink>
                    <NavLink to="/dashboard/outputs/defaulters/letter">
                      Defaulter Letter
                    </NavLink>
                    <NavLink to="/dashboard/outputs/defaulters/notice">
                      Defaulter Notice
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/dashboard/queries">
            <FaQuestionCircle />
            {!isCollapsed && <span>Queries</span>}
          </NavLink>
        </div>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div
          className="collapse-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </div>
        {!isCollapsed && <p>© SmartBanker</p>}
      </div>
    </div>
  )
}

export default Sidebar
