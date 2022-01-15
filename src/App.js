import React, { Component } from "react"

import Layout from "./hoc/Layout/Layout"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import "./App.css"

import PersonalKPICreator from "./containers/kpi-member/PersonalKPICreator/PersonalKPICreator"

import Dashboard from "./containers/kpi-member/PersonalDashboard/PersonalDashboard"
import UnitKPICreator from "./containers/kpi-unit/UnitKPICreator/UnitKPICreator"
import PersonalManager from "./containers/kpi-member/PersonalManager/PersonalManager"
import PersonalDashboard from "./containers/kpi-member/PersonalDashboard/PersonalDashboard"
import UnitManager from "./containers/kpi-unit/UnitManager/UnitManager"
import UnitDashboard from "./containers/kpi-unit/UnitDashboard/UnitDashboard"
import Assesment from "./containers/kpi-unit/Assesment/Assesment"
import Help from "./containers/help-page/Help"
import Feedback from "./components/Feedback/Feedback"
import About from "./components/About/About"

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
            <Route path="/help" exact component={Help}></Route>
            <Route path="/feedback" exact component={Feedback}></Route>
            <Route path="/about" exact component={About} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App
