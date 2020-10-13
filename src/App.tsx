import React, { Component } from "react";
import "./App.css";
// import FuncForm from './components/FuncForm/FuncForm'
import LineChart from "./components/LineChart/LineChart";
import { getGraphPoints } from './services/getGraphPoints';

class App extends Component {
  render() {
    const result = getGraphPoints(0, 300, 1)
    return (
      <div className="App">
        <div className="header">Functional chart</div>
        <LineChart data={result} />
      </div>
    );
  }
}
export default App;
