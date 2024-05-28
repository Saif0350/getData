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

// Arrow function to extract last names using array.map()
const getLastNames = (data) => data.map((person) => person.last_name);

// Print last names obtained using array.map()
console.log(getLastNames(jsonData));
