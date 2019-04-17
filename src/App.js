import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "./store/modules/base";
import Chart from "./Chart";

class App extends Component {

  render() {
    return (
      <div>
        <Chart/>
        <Chart/>
        <Chart/>
        <Chart/>
        <Chart/>
        <Chart/>
        <Chart/>
      </div>
    );
  }
}

export default App;