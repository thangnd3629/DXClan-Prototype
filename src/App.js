import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

import routes from "./routes";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            {routes.map(({ path, name, Component }) => (
              <Route
                path={path}
                render={(props) => {
                  console.log("rendering");
                  const crumbs = routes
                    .filter(({ path }) => props.match.path.includes(path))
                    .map(({ path, ...rest }) => ({
                      path: Object.keys(props.match.params).length
                        ? Object.keys(props.match.params).reduce(
                            (path, param) =>
                              path.replace(
                                `:${param}`,
                                props.match.params[param]
                              ),
                            path
                          )
                        : path,
                      ...rest,
                    }));
                  console.log(`Generated crumbs for ${props.match.path}`);
                  crumbs.map(({ name, path }) => console.log({ name, path }));
                  return (
                    <div className='app__container'>
                      <Breadcrumb crumbs={crumbs} />
                      <Component {...props} />
                    </div>
                  );
                }}
              ></Route>
            ))}
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
