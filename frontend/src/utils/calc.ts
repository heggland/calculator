const calc = (a: number, b: number, sign: string): number => {
  console.log(a, b, sign);

  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return a + b;
  }
};

export default calc;
