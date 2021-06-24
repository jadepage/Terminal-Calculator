var rs = require('readline-sync');

// Global variables
var num1, num2, answer = 0

// Start the program
getUserMathOp();

// Gets the user's math operation & check if math operation is valid
function getUserMathOp() {
  var userMathOp =  rs.question('What math operation would you like to perform? ');
  var mathOp = userMathOp.match(/[-+*/%]/g);
  doMathOp(mathOp, userMathOp);
}  

// If math operation is valid then perform whichever math operation
function doMathOp(mathOp, userMathOp) {
  if (mathOp) {
    num1 = parseInt(rs.question('Please enter the first number '));
    num2 = parseInt(rs.question('Please enter the second number '));

    if (userMathOp === '+') {
        answer = num1 + num2;
    } else if (userMathOp === '-') {
        answer = num1 - num2;
    } else if (userMathOp === '/') {
        answer = num1 / num2;
    } else if (userMathOp === '*') {
        answer = num1 * num2
    } else if (userMathOp === '%') {
        answer = num1 % num2;

      // Output the answer to the user 
    } console.log(`The answer to ${num1} ${mathOp} ${num2} = ${answer}`);
  } else {

    // If math !operation then let user know and start the program again
    console.log('That is an invalid character, please enter either +, -, *, /, %');
    getUserMathOp();
  }
}
