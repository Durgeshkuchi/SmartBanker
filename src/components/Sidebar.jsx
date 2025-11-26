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
                <div className="submenu-group collapsible">
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
                    <NavLink to="/dashboard/transactions/loans/new">
                      New Loans
                    </NavLink>
                    <NavLink to="/dashboard/transactions/loans/repayment">
                      Loan Repayment
                    </NavLink>
                  </div>
                </div>

                <NavLink to="/dashboard/transactions/bank">
                  Bank Transactions
                </NavLink>
                <NavLink to="/dashboard/transactions/bank-reconciliation">
                  Bank Reconciliation
                </NavLink>
                <NavLink to="/dashboard/transactions/interest-accounts">
                  Interest Accounts
                </NavLink>
                <NavLink to="/dashboard/transactions/share-capital">
                  Share Capital/Dividend Payments
                </NavLink>
                <NavLink to="/dashboard/transactions/monthly-transfers">
                  Monthly Transfers
                </NavLink>
                <NavLink to="/dashboard/transactions/settlement">
                  Settlement
                </NavLink>
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

          <NavLink to="/dashboard/utilities">
            <FaTools />
            {!isCollapsed && <span>Utilities</span>}
          </NavLink>

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
