import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import DashboardHome from './components/DashboardHome'
import ACOpening from './components/ACopening'

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
          <Route index element={<DashboardHome />} />
          <Route path="ac-opening" element={<ACOpening />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
