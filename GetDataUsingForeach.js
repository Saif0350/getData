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

// Arrow function to print all last names
const printLastNames = (data) => {
  data.forEach((person) => console.log(person.last_name));
};

const printLastNum = (data) => {
  data.forEach((person) => console.log(person.number));
};

// Call the function to print last names
printLastNames(jsonData);
printLastNum(jsonData);
