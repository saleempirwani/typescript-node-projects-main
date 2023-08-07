import inquirer from "inquirer";

const GUESS_NO = Math.round(Math.random() * 9);

const guess = (num: number): string | number => {
  if (Number.isNaN(num)) return "Invalid type number";

  if (num === GUESS_NO) return "Yahh... You won the game";

  return `It was ${GUESS_NO}. Sorry! Please try again`;
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

    const result = guess(answers.n1);
    console.log("Result:", result);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
