import parser from "../index";

test("multiplication test", () => {
  const expString = "2 * x";
  const parsedExpression = parser(expString);

  expect(parsedExpression(-7)).toBe(-14);
  expect(parsedExpression(1)).toBe(2);
});

test("addition test", () => {
  const expString = "2 + x";
  const parsedExpression = parser(expString);

  expect(parsedExpression(-7)).toBe(-5);
  expect(parsedExpression(1)).toBe(3);
});

test("subtraction test", () => {
  const expString = "2 - x";
  const parsedExpression = parser(expString);

  expect(parsedExpression(-7)).toBe(9);
  expect(parsedExpression(1)).toBe(1);
});

test("division test", () => {
  const expString = "2 / x";
  const parsedExpression = parser(expString);

  expect(parsedExpression(0)).toBe(Infinity);
  expect(parsedExpression(-1)).toBe(-2);
});

test("unary minus test", () => {
  const expString = "-x";
  const parsedExpression = parser(expString);

  expect(parsedExpression(-7)).toBe(7);
  expect(parsedExpression(1)).toBe(-1);
});

test("parentheses test", () => {
  const expString = "(2 + x) - (x * 5 + (2 * x - 3))";
  const parsedExpression = parser(expString);

  expect(parsedExpression(-7)).toBe(47);
  expect(parsedExpression(1)).toBe(-1);
});
