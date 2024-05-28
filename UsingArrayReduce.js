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

// Arrow function to extract last names using array.reduce()
const getLastNames = (data) =>
  data.reduce((acc, person) => {
    acc.push(person.last_name);
    return acc;
  }, []);

const getNum = (data) =>
  data.reduce((acc, person) => {
    acc.push(person.number);
    return acc;
  }, []);

// const getNumbers = (data) =>
//   data.reduce((acc, person) => {
//     acc.push(person.number);
//     return acc;
//   }, []);

// Print last names obtained using array.reduce()
// console.log(getLastNames(jsonData));
console.log(getNum(jsonData));
