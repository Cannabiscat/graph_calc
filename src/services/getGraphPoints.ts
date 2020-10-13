import { point } from './../components/LineChart/LineChart';

export function getGraphPoints (start: number, end: number, scale: number = 1): point[] {
  const func = (x: number): number => Math.random() * Math.sin(x);
  const arr = new Array(Math.floor((end - start) / scale))
  const result = Array.from(arr.keys()).map((_, index) => {
    const x = index * scale
    return {
      x,
      y: func(x)
    }
  })

  console.log(result);
  
  return result
}