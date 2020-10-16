import React from "react";
import { getEmptyArray } from "../../utils";
import Axis from "./Axis";

interface GridProps {
  minX: number;
  maxX: number;
  minSvgX: number;
  minSvgY: number;
  maxSvgX: number;
  maxSvgY: number;
}

export default function Grid(props: GridProps): JSX.Element {
  const { minSvgX, minSvgY, maxSvgX, maxSvgY, minX, maxX } = props;
  const unitX = (maxSvgX - minSvgX) / (maxX - minX);
  const vLinesArr = getEmptyArray(maxX - minX + 1).map((_: any, index: number) => (
    <line
      key={index}
      x1={(Number(minX) + index) * unitX}
      y1={minSvgY}
      x2={(Number(minX) + index) * unitX}
      y2={maxSvgY}
    />
  ));
  // const hLinesArr = getEmptyArray()
  return (
    <g className="linechart_axis">
      <Axis  minX={minSvgX} minY={minSvgY} maxX={maxSvgX} maxY={maxSvgY} />
      {vLinesArr}
    </g>
  );
}
