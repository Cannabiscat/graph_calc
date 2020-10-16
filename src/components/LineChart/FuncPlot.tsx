import React from 'react'
import { point } from './LineChart'

interface FuncPlotProps {
  data: point[]
}

export default function(props: FuncPlotProps): JSX.Element {
  const { data } = props
  const pathD = "M " + data.map((point: point): string => `${point.x} ${point.y}`).join(' L ')
  return (
    <path
        className="linechart_path main_line"
        d={pathD}
      />
  )
}