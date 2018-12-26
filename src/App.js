import React, { Component } from "react";
import Contracts from "./components/contracts";
import RateChart from "./components/rateChart";
import { Route, Redirect, Switch } from "react-router-dom";
import NavigationBar from "./components/navigationBar";
import ContractForm from "./components/contractForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <main className="container">
          <Switch>
            <Route path="/contracts/:id" component={ContractForm} />
            <Route path="/contracts" component={Contracts} />
            <Route path="/ratecharts" component={RateChart} />
            <Redirect from="/" exact to="/contracts" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
