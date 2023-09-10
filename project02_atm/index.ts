import inquirer from "inquirer";
import chalk from "chalk";

// Types
interface IUser {
  user_id: string;
  user_name: string;
  user_pin: string;
  amount: number;
}

// Console function
const log = console.log;

// User Record
const userData: IUser[] = [
  {
    user_id: "1",
    user_name: "Saleem",
    user_pin: "1234",
    amount: 10000,
  },
  {
    user_id: "2",
    user_name: "Ahmed",
    user_pin: "0000",
    amount: 5000,
  },
  {
    user_id: "3",
    user_name: "Ali",
    user_pin: "1111",
    amount: 1500,
  },
];

const getAmount = async (user: IUser) => {
  try {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "amount",
        message: "Enter your amount:",
      },
    ]);

    const amount = answer.amount;

    if (!amount) {
      log("\n❌", chalk.redBright("You did not enter anthing.\n"));
    } else if (user.amount < amount) {
      log("\n❌", chalk.redBright("You have insufficient amount of money.\n"));
    } else {
      const index = userData.findIndex((_user) => _user === user);
      user.amount -= amount;
      userData[index] = user;
      log(
        "\n✅",
        chalk.greenBright(`You have widthdrawn ${amount} amount of money\n`)
      );
    }

    prompt();
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const checkPin = (pin: string) => {
  const user = userData.find((item) => item.user_pin === pin);

  if (!user) {
    log("\n❌", chalk.redBright("Invalid pin\n"));
    prompt();
  } else {
    getAmount(user);
  }
};

const getPin = async () => {
  try {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "pin",
        message: "Enter your pin:",
      },
    ]);

    const pin = answer.pin;

    if (!pin) {
      log("\n❌", chalk.redBright("You did not enter anthing.\n"));
      prompt();
      return;
    }

    checkPin(pin);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

async function prompt() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        choices: ["1. Widthdrawn money", "2. Quit"],
        message: "Select your choice",
      },
    ]);

    const choice = answers.choice;

    if (choice === "1. Widthdrawn money") return getPin();

    console.log("❌", chalk.blueBright("Quit..."));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

prompt();
