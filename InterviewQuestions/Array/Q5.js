// Question: Write a function to sort an array of numbers in ascending order.Solution:

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Example usage:
const unsortedArray = [5, 2, 8, 1, 3];
console.log("Sorted array:", sortArray(unsortedArray));
