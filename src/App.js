import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PoliciesList from "./components/policies-list.component";
import PolicyAdd from "./components/policy-add.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <li>
            <Link to="/policies">
              Policies
            </Link>
          </li>
          <li>
            <Link to="/policyAdd">
              Add Policy
            </Link>
          </li>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
        </nav>

        <div>
          <Switch>
            <Route exact path={"/policies"} component={PoliciesList} />
            <Route exact path={"/policyAdd"} component={PolicyAdd} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
