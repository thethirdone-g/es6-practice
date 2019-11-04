// This will be a file for practicing the JS destructuring technique, starting with arrays :

const numbers = [1, 2, 3, 4];

// In order to destructure the "numbers" array, the syntax looks like this :

[number1, number2] = numbers; 
console.log(number1, number2) // This will log the first two index values in the "numbers" array.

// Using destructuring assignment to extract values from objects :

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;