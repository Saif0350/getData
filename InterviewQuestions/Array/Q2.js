// Question: How do you remove duplicates from an array?Solution:

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
console.log("Array without duplicates:", removeDuplicates(arrayWithDuplicates));
