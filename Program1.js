//  program for a simple calculator 

class Calculator {
  calculate(a, b, output) {
    switch (output) {
      case "addition":
        return a + b;
      case "subtraction":
        return a - b;
      case "multiplication":
        return a * b;
      case "division":
        if (b === 0) return " Cannot divide by zero";
        return a / b;
      default:
        return "Invalid ";
    }
  }
}
 
 const calculateProblem = new Calculator();
 console.log(calculateProblem.calculate(45, 57, "add"));
