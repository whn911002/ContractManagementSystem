import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
  render() {
    const { chartData } = this.props;
    return (
      <div className="chart">
        <Bar data={chartData} options={{}} />
      </div>
    );
  }
}

export default BarChart;
