#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { message: "Enter your first number:", type: "number", name: "firstnumber" },
    { message: "Enter your second number:", type: "number", name: "secondnumber" },
    {
        message: "Select the operator you want to perform",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
    }
]);
if (answers.operator === "Addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "Substraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("Please select a valid operator");
}
;
