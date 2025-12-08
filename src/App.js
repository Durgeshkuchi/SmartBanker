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
import OnlinePayments from './components/Transactions/OnlinePayments'
import DemandList from './components/Transactions/DemandList'
import SettlementRetired from './components/Transactions/Settlement/SettlementRetired'
import SettlementDeath from './components/Transactions/Settlement/SettlementDeath'
import MonthlyTransfers from './components/Transactions/MonthlyTransfers'
import ShareHolderTransactions from './components/Transactions/ShareHolderTransactions'
import BankTransactions from './components/Transactions/BankTransactions'
import BankReconciliation from './components/Transactions/BankReconciliation/BankReconciliation'
import ReconciliationModification from './components/Transactions/BankReconciliation/ReconciliationModification'
import PhotoScan from './components/Utilities/PhotoScan'
import ChequeBooks from './components/Utilities/ChequeBooks'
import ExecutionOfStandingInstruction from './components/Utilities/ExecutionOfStandingInstruction'
import StandingInstructionAmendments from './components/Utilities/StandingInstructionAmendments'
import MemberCustomerModification from './components/Utilities/MemberCustomerModification'
import DayReports from './components/Outputs/DayReports'
import MonthlyReports from './components/Outputs/MonthlyReports'
import YearEndReports from './components/Outputs/YearEndReports'
import MemberDetailsReport from './components/Outputs/MemberDetailsReport'
import GLReports from './components/Outputs/GeneralReports/GLReports'
import DayBookReports from './components/Outputs/GeneralReports/DayBookReports'
import PaymentsReceiptsReport from './components/Outputs/GeneralReports/PaymentsReceiptsReport'
import BankStatementReport from './components/Outputs/GeneralReports/BankStatementReport'
import BalanceSheetReport from './components/Outputs/GeneralReports/BalanceSheetReport'
import ProfitLossReport from './components/Outputs/GeneralReports/ProfitLossReport'
import RetirementStatementReport from './components/Outputs/GeneralReports/RetirementStatementReport'
import GeneralMemberDetailsReport from './components/Outputs/GeneralReports/MemberDetailsReport'
import AuditReport from './components/Outputs/GeneralReports/AuditReport'
import BranchGreetingsReport from './components/Outputs/GeneralReports/BranchGreetingsReport'
import MemberGreetingsReport from './components/Outputs/GeneralReports/MemberGreetingsReport'
import TransactionBetweenDates from './components/Outputs/GeneralReports/TransactionBetweenDates'
import GeneralLedgerReport from './components/Outputs/GeneralReports/GeneralLedgerReport'
import AccountLedgerReport from './components/Outputs/AccountLedgerReport'
import SettlementReport from './components/Outputs/SettlementReport'
import BalanceReports from './components/Outputs/BalanceReports'
import MonthlyReceiptReport from './components/Outputs/MonthlyReceiptReport'
import ThriftInterestReport from './components/Outputs/ThriftInterestReport'
import DividendReport from './components/Outputs/DividendReport'
import NomineeList from './components/Outputs/NomineeList'
import AnyDateBalances from './components/Outputs/AnyDateBalances'
import StatementOfAccount from './components/Outputs/StatementOfAccount'
import SanctionLetter from './components/Outputs/Loans/SanctionLetter'
import LoansSanctioned from './components/Outputs/Loans/LoansSanctioned'
import LoansExpired from './components/Outputs/Loans/LoansExpired'
import LoanSchedule from './components/Outputs/Loans/LoanSchedule'
import DefaulterList from './components/Outputs/Defaulters/DefaulterList'
import DefaulterLetter from './components/Outputs/Defaulters/DefaulterLetter'
import DefaulterNotice from './components/Outputs/Defaulters/DefaulterNotice'
import ExpenseTransactions from './components/Transactions/InterestAccounts/ExpenseTransactions'

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
          <Route
            path="transactions/online-payments"
            element={<OnlinePayments />}
          />
          <Route path="transactions/demand-list" element={<DemandList />} />
          <Route
            path="transactions/settlement/retired"
            element={<SettlementRetired />}
          />
          <Route
            path="transactions/settlement/death"
            element={<SettlementDeath />}
          />

          <Route
            path="transactions/monthly-transfers"
            element={<MonthlyTransfers />}
          />
          <Route
            path="transactions/share-capital"
            element={<ShareHolderTransactions />}
          />
          <Route path="transactions/bank" element={<BankTransactions />} />
          <Route
            path="transactions/bank-reconciliation/reconciliation"
            element={<BankReconciliation />}
          />
          <Route
            path="transactions/bank-reconciliation/modification"
            element={<ReconciliationModification />}
          />
          <Route path="utilities/photo-scan" element={<PhotoScan />} />
          <Route path="utilities/cheque-books" element={<ChequeBooks />} />
          <Route
            path="utilities/execution-standing-instruction"
            element={<ExecutionOfStandingInstruction />}
          />
          <Route
            path="utilities/standing-instruction-amendments"
            element={<StandingInstructionAmendments />}
          />

          <Route
            path="utilities/member-modification"
            element={<MemberCustomerModification />}
          />
          <Route path="outputs/day-reports" element={<DayReports />} />
          <Route path="outputs/monthly-reports" element={<MonthlyReports />} />
          <Route path="outputs/year-end-reports" element={<YearEndReports />} />
          <Route
            path="outputs/member-details"
            element={<MemberDetailsReport />}
          />
          <Route
            path="outputs/general-reports/gi-report"
            element={<GLReports />}
          />
          <Route
            path="outputs/general-reports/day-book"
            element={<DayBookReports />}
          />
          <Route
            path="outputs/general-reports/payments-receipts"
            element={<PaymentsReceiptsReport />}
          />
          <Route
            path="outputs/general-reports/bank-statement"
            element={<BankStatementReport />}
          />
          <Route
            path="outputs/general-reports/balance-sheet"
            element={<BalanceSheetReport />}
          />
          <Route
            path="outputs/general-reports/profit-loss"
            element={<ProfitLossReport />}
          />
          <Route
            path="outputs/general-reports/retirement-statement"
            element={<RetirementStatementReport />}
          />
          <Route
            path="outputs/general-reports/member-details"
            element={<GeneralMemberDetailsReport />}
          />
          <Route
            path="outputs/general-reports/audit-report"
            element={<AuditReport />}
          />
          <Route
            path="outputs/general-reports/branch-greetings"
            element={<BranchGreetingsReport />}
          />
          <Route
            path="outputs/general-reports/member-greetings"
            element={<MemberGreetingsReport />}
          />
          <Route
            path="outputs/general-reports/transactions-between-dates"
            element={<TransactionBetweenDates />}
          />
          <Route
            path="outputs/general-reports/general-ledger"
            element={<GeneralLedgerReport />}
          />
          <Route
            path="outputs/account-ledger"
            element={<AccountLedgerReport />}
          />
          <Route path="outputs/settlement" element={<SettlementReport />} />
          <Route path="outputs/balances-report" element={<BalanceReports />} />
          <Route
            path="outputs/monthly-receipt"
            element={<MonthlyReceiptReport />}
          />
          <Route
            path="outputs/thrift-interest-report"
            element={<ThriftInterestReport />}
          />
          <Route path="outputs/dividend-report" element={<DividendReport />} />
          <Route path="outputs/nominee-list" element={<NomineeList />} />
          <Route
            path="outputs/any-date-balances"
            element={<AnyDateBalances />}
          />
          <Route
            path="outputs/statement-account"
            element={<StatementOfAccount />}
          />
          <Route
            path="outputs/loans/sanction-letter"
            element={<SanctionLetter />}
          />
          <Route
            path="outputs/loans/sanctioned"
            element={<LoansSanctioned />}
          />
          <Route path="outputs/loans/expired" element={<LoansExpired />} />
          <Route path="outputs/loans/schedule" element={<LoanSchedule />} />
          <Route path="outputs/defaulters/list" element={<DefaulterList />} />
          <Route
            path="outputs/defaulters/letter"
            element={<DefaulterLetter />}
          />
          <Route
            path="outputs/defaulters/notice"
            element={<DefaulterNotice />}
          />
          <Route
            path="transactions/interest/expense"
            element={<ExpenseTransactions />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
