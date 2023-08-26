import inquirer from "inquirer";
import chalk from "chalk";

// Types
type Operator = "+" | "-" | "x" | "/";
interface IAnswer {
  n1: number;
  n2: number;
  operator: Operator;
}

type Calc = (n1: number, n2: number, operator: Operator) => void;

// Console Functions
const log = console.log;

const calculate: Calc = (n1, n2, operator): void => {
  if (Number.isNaN(n1) || Number.isNaN(n2))
    return log("❌", chalk.red("Invalid n1 or n2 entered"));

  let result: number;

  if (operator === "+") result = n1 + n2;
  else if (operator === "-") result = n1 - n2;
  else if (operator === "x") result = n1 * n2;
  else if (operator === "/" && n2 !== 0) result = n1 / n2;

  if (n2 === 0) log("❌", chalk.red("Cannot divide by 0"));
  else log("✅ Result", chalk.green(result));
};

async function main() {
  try {
    const answers: IAnswer = await inquirer.prompt([
      {
        type: "number",
        name: "n1",
        message: "Enter number1:",
      },
      {
        type: "list",
        name: "operator",
        choices: ["+", "-", "x", "/"],
      },
      {
        type: "number",
        name: "n2",
        message: "Enter number2:",
      },
    ]);

    calculate(answers.n1, answers.n2, answers.operator);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
