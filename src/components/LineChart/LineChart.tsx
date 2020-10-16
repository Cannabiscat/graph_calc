import React, { Component } from "react";
import { getGraphPoints } from "../../services/getGraphPoints";
import Grid from "./Grid";
import FuncPlot from './FuncPlot'
import "./LineChart.css";

export type point = {
  x: number;
  y: number;
};

export interface LineChartProps {
  svgHeight: number;
  svgWidth: number;
  minX: number;
  maxX: number;
  expression: Function;
}

class LineChart extends Component<LineChartProps, {}> {
  getMinX(data: point[]) {
    return data[0].x;
  }
  getMaxX(data: point[]) {
    return data[data.length - 1].x || 10;
  }
  getMinY(data: point[]) {
    console.log('data >>', data);
    return data.reduce(
      (min: number, p: point) => (p.y < min ? p.y : min),
      data[0].y
    );
  }
  getMaxY(data: point[]) {
    return data.reduce(
      (max: number, p: point) => (p.y > max ? p.y : max),
      data[0].y
    );
  }
  render() {
    const { minX, maxX, expression, svgWidth, svgHeight } = this.props,
      kx = svgWidth / (maxX - minX),
      minRawSvgX = kx * minX,
      maxRawSvgX = kx * maxX,
      rawData = getGraphPoints(minRawSvgX, maxRawSvgX, expression, kx),
      minRawSvgY = this.getMinY(rawData),
      maxRawSvgY = this.getMaxY(rawData),
      data: point[] = rawData.map((point: point) => ({
        x: (svgWidth * point.x) / (maxRawSvgX - minRawSvgX),
        y: (svgHeight * point.y) / (maxRawSvgY - minRawSvgY),
      })),
      maxSvgX=this.getMaxX(data),
      minSvgX=this.getMinX(data),
      minSvgY=this.getMinY(data),
      maxSvgY=this.getMaxY(data)
    return Number.isNaN(minSvgY) || (
      <svg viewBox={`${minSvgX - 5} ${minSvgY - 5} ${svgWidth + 10} ${svgHeight + 10}`} transform="scale(1, -1)">
        <FuncPlot data={data} />
        <Grid
          minX={minX}
          maxX={maxX}
          minSvgX={minSvgX}
          minSvgY={minSvgY}
          maxSvgX={maxSvgX}
          maxSvgY={maxSvgY}
        />
      </svg>
    );
  }
}

export default LineChart;
