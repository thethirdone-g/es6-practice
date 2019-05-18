// Example of the new arrow function syntax :

function printMyName(name) {
  console.log(name);
};

printMyName('George');

const pleasePrintMyName = (name) => {
  console.log(name);
};

pleasePrintMyName('Georgie Porgie');

// These are JavaScript equivalents but the second one - the arrow function - doesn't have the "this" keyword hiccups of the previous updates.

function multiply(number) {
  console.log(number * 2);
};

multiply(5); // This will of course give us 10.

const multiplyPlease = (number) => {
  return number * 2;
};

console.log(multiplyPlease(5)); // This will of course give us 10.

// or..

const multiplyPrettyPlease = number => number * 2; // Omitting the "return" keyword.

console.log(multiplyPrettyPlease(5)); // This will stil give us 10;