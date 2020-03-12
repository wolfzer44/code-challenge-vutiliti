import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import LoginPage from "./pages/login/LoginPage"
import DashboardPage from "./pages/dashboard/DashboardPage"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  )
}
