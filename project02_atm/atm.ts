import inquirer from "inquirer";
import chalk from "chalk";

// Types

interface IUserData {
  user_id: string;
  user_pin: string;
  amount: number;
}

type Atm = (user_id: string, user_pin: string) => void;

// Console function
const log = console.log;

// User Record
const userData: IUserData[] = [
  {
    user_id: "1",
    user_pin: "1234",
    amount: 10000,
  },
  {
    user_id: "2",
    user_pin: "0000",
    amount: 5000,
  },
  {
    user_id: "3",
    user_pin: "1111",
    amount: 1500,
  },
];

const atm: Atm = async (user_id, user_pin) => {
  const user = userData.find(
    (item) => item.user_id === user_id && item.user_pin === user_pin
  );

  if (!user) return log("❌", chalk.redBright(`Invalid User ID OR Pin`));

  const amount = await askForWithdrawalMoney();

  if (user.amount < Math.abs(amount))
    return log("❌", chalk.redBright(`You have insufficient amout of money`));

  log(
    "✅",
    chalk.greenBright(
      `You have widthdrawn ${amount}. Thanks for using our ATM service`
    ),
    "👍"
  );
};

async function askForUserDetails() {
  try {
    const answers: IUserData = await inquirer.prompt([
      {
        type: "string",
        name: "user_id",
        message: "Enter your user ID",
      },
      {
        type: "string",
        name: "user_pin",
        message: "Enter your user pin",
      },
    ]);

    atm(answers.user_id, answers.user_pin);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function askForWithdrawalMoney() {
  try {
    const answers: IUserData = await inquirer.prompt([
      {
        type: "number",
        name: "amount",
        message: "Enter widthdrawn amount:",
      },
    ]);

    return answers.amount;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

askForUserDetails();
