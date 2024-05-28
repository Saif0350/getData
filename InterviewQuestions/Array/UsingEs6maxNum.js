// Function to find the maximum number in an array
const findMaxNumber = (arr) => Math.max(...arr);

// Function to handle user input and print maximum number
const handleInput = () => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter numbers separated by space: ", (input) => {
    const numbers = input.split(" ").map(Number);
    const maxNumber = findMaxNumber(numbers);
    console.log("Maximum number:", maxNumber);
    readline.close();
  });
};

// Call the function to handle user input
handleInput();
