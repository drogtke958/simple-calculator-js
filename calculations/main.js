//Keily Drogt
//April 19 2024
//JS Simple Calculator


//Input

const firstName = 'Keily';
const lastName = 'Drogt';
const date = 'April 19 2024';
const title = 'JS Simple Calculator'

const numOne = parseInt(prompt('Number 1:'));
const numTwo = parseInt(prompt('Number 2:'));

//Process

//Addition
const addResult = numOne + numTwo;

//Subtraction
const subResult = numOne - numTwo;

//Mutiply
const mutliResult = numOne * numTwo;

//Division
const divideResult = numOne / numTwo;


//Output

const myOutput = `
${firstName} ${lastName}
${date}
${title}

Addition: ${addResult}
Subtraction: ${subResult}
Multiply: ${mutliResult}
Division: ${divideResult}`;

console.log(myOutput);

