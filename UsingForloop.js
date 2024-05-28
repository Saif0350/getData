// JSON data containing first names, last names, and numbers
const jsonData = [
  {
    first_name: "Alice",
    last_name: "Johnson",
    number: 123456789,
  },
  {
    first_name: "Bob",
    last_name: "Smith",
    number: 987654321,
  },
  {
    first_name: "Charlie",
    last_name: "Brown",
    number: 24681012,
  },
];

// Function to print all last names using for...of loop
function printLastNames(data) {
  for (const person of data) {
    console.log(person.last_name);
  }
}

function printLastNum(data) {
  for (const num of data) {
    console.log(num.number);
  }
}

// Call the function to print last names
// printLastNames(jsonData);
printLastNum(jsonData);
