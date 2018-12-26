import React, { Component } from "react";
import BarChart from "./common/charts/barChart";
import LineChart from "./common/charts/lineChart";
import { getCurrentRates, getHistoryRates } from "../services/rateService";

class RateChart extends Component {
  state = {
    currentRates: {},
    currentChartData: {},
    historyRates: {},
    historyChartData: {}
  };

  componentDidMount = () => {
    this.getRates();
  };

  getRates = async () => {
    const { data: currentRates } = await getCurrentRates();
    this.setState({ currentRates });
    this.convertCurrentRatesToChartdata();

    const { data: historyRates } = await getHistoryRates();
    this.setState({ historyRates });
    this.convertHistoryRatesToChartdata();
  };

  convertCurrentRatesToChartdata = () => {
    let currentChartData = {
      labels: [],
      datasets: [
        {
          label: "ETH to USD/CHF/EUR Rate",
          data: [],
          backgrouldColor: ""
        }
      ]
    };

    Object.keys(this.state.currentRates).map(key => {
      currentChartData.labels.push(key);
      currentChartData.datasets[0].data.push(this.state.currentRates[key]);
    });

    this.setState({ currentChartData });
  };

  convertHistoryRatesToChartdata = () => {
    let historyChartData = {
      labels: [],
      datasets: [
        {
          label: "Last 30 Days ETH/USD Exchange Rates",
          data: [],
          backgrouldColor: ""
        }
      ]
    };

    for (let i = 0; i < 31; i++) {
      historyChartData.labels.push(i);
      historyChartData.datasets[0].data.push(
        this.state.historyRates.Data[i].close
      );
    }

    this.setState({ historyChartData });
  };

  render = () => {
    return (
      <div className="chart">
        <div className="col-md-10">
          <LineChart chartData={this.state.historyChartData} options={{}} />
        </div>
        <div className="col-md-10">
          <BarChart chartData={this.state.currentChartData} options={{}} />
        </div>
      </div>
    );
  };
}

export default RateChart;
