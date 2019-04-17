import React, { Component } from "react";
import RTChart from "react-rt-chart";
import "./chart.css";

class Chart extends Component {
  
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }
  getRandomValue = () => Math.floor(Math.random() * 100);

  render() {
    const { getRandomValue } = this;
    const data = {
      date: new Date(),
      Car: getRandomValue(),
      Bus: getRandomValue(),
      Taxi: getRandomValue(),
      Truck: getRandomValue(),
      Movie: getRandomValue(),
      A: getRandomValue(),
    };

    return <RTChart fields={["Car", "Bus", "Taxi", "Truck", "Movie", "A"]} data={data} />;
  }
}

export default Chart;