import inquirer, { Answers } from "inquirer";
import chalk from "chalk";

const countPara = (para: string): void => {
  const splitPara = para.split(" ");

  const charCount = splitPara.join("").length;
  const wordCount = charCount < 2 ? 0 : splitPara.length;

  console.log(
    "Words Count: ",
    chalk.greenBright(wordCount),
    "Characters count: ",
    chalk.greenBright(charCount)
  );
};

async function promptPara() {
  try {
    const answers: Answers = await inquirer.prompt([
      {
        type: "input",
        name: "para",
        message: "Enter your paragraph: ",
      },
    ]);

    const para: string = answers.para;

    if (!para) prompt();
    else countPara(para);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function prompt() {
  try {
    const answers: Answers = await inquirer.prompt([
      {
        type: "list",
        choices: ["1. Please enter a paragraph", "2. Quit"],
        name: "choice",
        message: "Select your choice:",
      },
    ]);

    const choice = answers.choice;

    if (choice === "1. Please enter a paragraph") promptPara();
    else console.log("❌", chalk.blueBright("Quit..."));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

prompt();
