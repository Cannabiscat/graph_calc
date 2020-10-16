import React from "react";

export default function FuncForm({ setData }: { setData: (x: any) => void }) {
  const changeDataHandler = (
    dataField: string,
    dataValueObject: { value: string | number }
  ): void => {
    const { value } = dataValueObject;
    setTimeout(() => {
      setData({ [dataField]: value });
    }, 200);
  };
  return (
    <form>
      <label htmlFor="funcExpression">Function expression</label>
      <input
        type="text"
        name="func_expression"
        id="funcExpression"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeDataHandler('expression', e.target)}
      />
      <label htmlFor="minX">Range minX</label>
      <input
        type="number"
        name="minX"
        id="minX"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeDataHandler('minX', e.target)}
      />
      <label htmlFor="maxX">Range maxX</label>
      <input
        type="number"
        name="maxX"
        id="maxX"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeDataHandler('maxX', e.target)}
      />
    </form>
  );
}
