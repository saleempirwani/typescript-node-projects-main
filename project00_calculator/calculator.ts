import inquirer from "inquirer";

const calculate = (
  n1: number,
  n2: number,
  operator: "+" | "-" | "x" | "/"
): string | number => {
  if (Number.isNaN(n1) || Number.isNaN(n2)) return "Invalid n1 or n2 entered";

  if (operator === "+") return n1 + n2;
  if (operator === "-") return n1 - n2;
  if (operator === "x") return n1 * n2;
  if (operator === "/") return n2 !== 0 ? n1 / n2 : "Cannot divide by 0";
  return "";
};

async function main() {
  try {
    const answers = await inquirer.prompt([
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

    const result = calculate(answers.n1, answers.n2, answers.operator);
    console.log("Result:", result);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
