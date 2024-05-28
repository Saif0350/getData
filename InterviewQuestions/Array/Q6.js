function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
const numbersToAdd = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(numbersToAdd));
