import React, { Component } from "react";
import "./App.css";
import FuncForm from "./components/FuncForm/FuncForm";
// import FuncForm from './components/FuncForm/FuncForm'
import LineChart from "./components/LineChart/LineChart";
import formulaParser from "./utils";

interface AppState {
  expression: string;
  minX: number;
  maxX: number;
}

class App extends Component<{}, AppState> {
  private svgHeight = 700
  private svgWidth = 700
  constructor(props: any) {
    super(props);
    this.state = {
      expression: "x - 2",
      minX: -1,
      maxX: 10,
    };
  }
  setData = (data: any) => {
    this.setState({ ...this.state, ...data });
  };
  render() {
    const funcExpr = formulaParser(this.state.expression);
    return (
      <div className="App">
        <div className="header">Functional chart</div>
        <FuncForm setData={this.setData} />
        <LineChart svgHeight={this.svgHeight} svgWidth={this.svgWidth} expression={funcExpr} minX={this.state.minX} maxX={this.state.maxX} />
      </div>
    );
  }
}
export default App;
