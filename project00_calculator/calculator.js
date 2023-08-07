import inquirer from "inquirer";
async function main() {
    try {
        const answers = await inquirer.prompt([]);
        console.log("Answers:", answers);
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
main();
