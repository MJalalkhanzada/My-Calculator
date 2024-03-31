import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numOne",
        message: (chalk.yellow("Enter your first number"))
    },
    {
        type: "number",
        name: "numTwo",
        message: (chalk.blue.bold("Enter your second number"))
    },
    {
        type: "list",
        name: "operator",
        message: "Enter your operator",
        choices: ["+", "-", "*", "/", "%"]
    }
]);
const { numOne, numTwo, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = numOne + numTwo;
        break;
    case "-":
        result = numOne - numTwo;
        break;
    case "*":
        result = numOne * numTwo;
        break;
    case "/":
        result = numOne / numTwo;
        break;
    case "%":
        result = numOne % numTwo;
        break;
    default:
        console.log("Invalid Operator");
}
console.log(`${numOne} ${operator} ${numTwo} = ${result}`);
