import React from "react";
import StackChart from "./components/StackChart";
import LineChart from "./components/LineChart";
import BarAndLineChart from "./components/BarAndLineChart";
import AreaChart from "./components/AreaChart";

function App() {
  return (
    <div className="App">
      <BarAndLineChart />
      <StackChart />
      <LineChart />
      <AreaChart />
    </div>
  );
}

export default App;
