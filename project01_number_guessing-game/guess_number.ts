import inquirer from "inquirer";
import chalk from "chalk";

const log = console.log;

const GUESS_NO = Math.round(Math.random() * 9);

const guess = (num: number): void => {
  if (Number.isNaN(num)) log("❌", chalk.red("Invalid number type"));
  else if (num === GUESS_NO) log("✅", chalk.green("Yahh... You won the game"));
  else
    log("ℹ️", chalk.blueBright(`It was ${GUESS_NO}. Sorry! Please try again`));
};

async function main() {
  try {
    const answers = await inquirer.prompt([
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
