var readlineSync = require('readline-sync');
const num1 = parseInt(readlineSync.question ('Please enter your first number'))
console.log(num1)
const num2 = parseInt(readlineSync.question ('Please enter your second number'))
console.log(num2)
var calculate = readlineSync.question ('Please enter the operation to perform: add, sub, mul, div')


if (calculate === "add"){
    console.log('The result is'+' '+ add(num1, num2))
} else if (calculate === "sub"){
    console.log('The result is'+' '+ sub(num1, num2))
} else if (calculate === "mul"){
    console.log('The result is'+' '+ mul(num1, num2))
}else if (calculate === "div"){
    console.log('The result is'+' '+ div(num1, num2))
}

function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function mul(num1, num2) {
    return num1 * num2;
}



