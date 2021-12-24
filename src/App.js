import React, { Component } from "react"

import Layout from "./hoc/Layout/Layout"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import "./App.css"

import PersonalKPICreator from "./containers/kpi-member/PersonalKPICreator"

import Dashboard from "./containers/kpi-member/PersonalDashboard"
import UnitKPICreator from "./containers/kpi-unit/UnitKPICreator"
import PersonalManager from "./containers/kpi-member/PersonalManager"
import PersonalDashboard from "./containers/kpi-member/PersonalDashboard"
import UnitManager from "./containers/kpi-unit/UnitManager"
import UnitDashboard from "./containers/kpi-unit/UnitDashboard"
import Assesment from "./containers/kpi-unit/Assesment"

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route
              path="/kpi-personal/create"
              exact
              component={PersonalKPICreator}
            ></Route>
            <Route
              path="/kpi-personal/manager"
              exact
              component={PersonalManager}
            ></Route>
            <Route
              path="/kpi-personal/dashboard"
              exact
              component={PersonalDashboard}
            ></Route>
            <Route
              path="/kpi-unit/create"
              exact
              component={UnitKPICreator}
            ></Route>
            <Route
              path="/kpi-unit/manager"
              exact
              component={UnitManager}
            ></Route>
            <Route
              path="/kpi-unit/dashboard"
              exact
              component={UnitDashboard}
            ></Route>
            <Route
              path="/kpi-member/manager"
              exact
              component={Assesment}
            ></Route>
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App
