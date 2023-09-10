import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];

const showAllTodos = () => {
  if (!todos.length)
    console.log("\n❌", chalk.redBright("You have no todos yet...\n"));
  else {
    console.log("\n");
    todos.forEach((todo: string, index) => {
      console.log(`${index + 1}.`, todo);
    });
    console.log("\n");
  }

  prompt();
};

async function addTo() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter your todo",
      },
    ]);

    const text = answers.text;
    if (!text)
      console.log("\n❌", chalk.redBright("You did not enter anthing.\n"));

    todos = [text, ...todos];
    console.log("\n✅", chalk.greenBright("Todo added successfully.\n"));

    prompt();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function prompt() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "list",
        choices: ["1. Add a todo", "2. Show all todos", "3. Quit"],
        name: "choice",
        message: "Select your choice:",
      },
    ]);

    const choice = answers.choice;

    if (choice === "1. Add a todo") {
      addTo();
    } else if (choice === "2. Show all todos") {
      showAllTodos();
    } else {
      console.log("❌", chalk.blueBright("Quit..."));
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

prompt();
