// Question: Write a function to find the maximum number in an array.Solution:

function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
const numbers = [5, 2, 9, 1, 7];
console.log("Maximum number:", findMaxNumber(numbers));
