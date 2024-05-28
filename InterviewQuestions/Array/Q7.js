// Function to find the maximum number in an array
function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to handle user input and print maximum number
function handleInput() {
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
}

// Call the function to handle user input
handleInput();
