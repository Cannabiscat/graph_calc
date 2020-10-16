function getValidForumula(str: string): Function {
  const allowedSymbols = "x+-*/()0123456789. ";
  const isValid = str.split("").every((sym: string) => allowedSymbols.includes(sym));

  if (!isValid) {
    return () => null;
  }
  try {
    // console.log("str >>", str);
    // eslint-disable-next-line
    return new Function("x", `return ${str}`);
  } catch (error) {
    return () => null;
  }
}
export default (str: string) => getValidForumula(str);
export function getEmptyArray(size: number) {
  if (size >= 0 && Math.floor(size) === size) {
    return Array.from(Array(size))
  }
  return []
}
