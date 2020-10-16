import { getEmptyArray } from "../utils";
import { point } from "./../components/LineChart/LineChart";

export function getGraphPoints(
  min: number,
  max: number,
  func: Function,
  koeff: number
): point[] {
  if (func(0) == null) {
    return [
      {
        x: 0,
        y: 0,
      },
    ];
  }
  console.log('koeff >>', koeff);
  const result = getEmptyArray(max - min + 1).map((_, index) => {
    const x = (Number(min) + index);
    return {
      x,
      y: koeff * func(x / koeff),
    };
  });
  return result;
}
