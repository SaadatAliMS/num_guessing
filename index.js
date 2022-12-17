#!/usr/bin/env node
// console.log("Hello world");
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => new Promise((res, rej) => setTimeout(res, 2000));
async function welcome() {
    const animate = chalkAnimation.rainbow("Let's Start Game :");
    // setTimeout(() => {
    //     animate.stop(); // Animation stops
    // }, 3000);
    await sleep();
}
welcome();
let playerlife = 3;
async function askQuestion() {
    await welcome(); // it waits until welcome function execued
    let rand = Math.floor(Math.random() * 11);
    console.log(`Your player has ${playerlife} life!!`);
    do {
        playerlife--;
        var que = await inquirer.prompt([{
                type: "number",
                name: "usr_num",
                message: chalkAnimation.neon("Enter a number between 1-10: ")
            }]);
        if (rand === que.usr_input) {
            console.log(chalk.green("You Guess the right number"));
        }
        else if (que.usr_num < rand) {
            console.log(chalk.redBright(`Your Number ${que.usr_num} is less then guess number`));
        }
        else if (que.usr_num > rand) {
            console.log(chalk.redBright(`Your Number ${que.usr_num} is greater then guess number`));
        }
        console.log(`Remaining Player Life is: ${playerlife}`);
    } while (playerlife > 0 && que.usr_num !== rand);
}
async function startAgain() {
    do {
        playerlife = 3;
        await askQuestion();
        var againStart = await inquirer.prompt([{
                type: "input",
                name: "restart",
                message: chalkAnimation.neon("DO you want to restart the game?? Press Y or N:")
            }]);
    } while (againStart.restart == "y" || againStart.restart == "Y");
}
startAgain();
