#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 4 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "Number",
        message: "Guess a number:",
    }
]);
if (answers.randomNumber === answers.userGuessedNumber) {
    console.log("Congratulations You won the game");
}
else {
    console.log("Sorry try again you lost the match");
}
