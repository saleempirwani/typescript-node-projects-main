import inquirer from "inquirer";
import chalk from "chalk";

// Types
interface IAnswer {
  n1: number;
}

type Guess = (num: number) => void;

// Console functions
const log = console.log;

// Generating random number
const GUESS_NO = Math.round(Math.random() * 9);

const guess: Guess = (num) => {
  if (Number.isNaN(num)) log("❌", chalk.red("Invalid number type"));
  else if (num === GUESS_NO) log("✅", chalk.green("Yahh... You won the game"));
  else
    log("ℹ️", chalk.blueBright(`It was ${GUESS_NO}. Sorry! Please try again`));
};

async function main() {
  try {
    const answers: IAnswer = await inquirer.prompt([
      {
        type: "number",
        name: "n1",
        message: "Guess a number:",
      },
    ]);

    guess(answers.n1);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
