import chalk from "chalk";
import inquirer from "inquirer";

async function askForCurrency(amount: number) {
  try {
    const answers = await inquirer.prompt([
      {
        type: "list",
        choices: ["1. USD", "2. Euro", "3. Pound", "4. Dirham", "5. Yuan"],
        name: "choice",
        message: "Select your choice:",
      },
    ]);

    const choice = answers.choice;

    if (choice === "1. USD") amount *= 1 / 287.22;
    else if (choice === "2. Euro") amount *= 1 / 306.54;
    else if (choice === "3. Pound") amount *= 1 / 351.53;
    else if (choice === "4. Dirham") amount *= 1 / 78.2;
    else if (choice === "5. Yuan") amount *= 1 / 39.36;

    console.log("Result: ", chalk.greenBright(amount.toFixed(2)));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function askForAmout() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "amount",
        message: "Enter your amount:",
      },
    ]);

    const amount = answers.amount;

    if (Number.isNaN(Number(amount))) {
      console.log(chalk.redBright("Invalid number"));
      prompt();
      return;
    }

    askForCurrency(amount);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function prompt() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "list",
        choices: ["1. Currency Converter", "2. Quit"],
        name: "choice",
        message: "Select your choice:",
      },
    ]);

    const choice = answers.choice;

    if (choice === "1. Currency Converter") askForAmout();
    else console.log("❌", chalk.blueBright("Quit..."));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

prompt();
