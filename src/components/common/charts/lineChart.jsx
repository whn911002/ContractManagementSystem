import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
  render() {
    const { chartData } = this.props;
    return (
      <div className="chart">
        <Line data={chartData} options={{}} />
      </div>
    );
  }
}

export default LineChart;
