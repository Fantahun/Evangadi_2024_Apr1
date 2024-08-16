// //TODO: Destructuring is a concise way to extract values from arrays and objects in JavaScript. Here are examples for both arrays and objects:

// //TODO: ##########  Array Destructuring   //TODO:
// // Purpose: Extract values from an array into individual variables.

// const numbers = [1, 2, 3, 4, 5];


// const first= numbers[0];
// const second= numbers[1];
// const third= numbers[2];


// // // Destructuring assignment
// const [a, second, c] = numbers;

// console.log(a);  // Output: 1
// console.log(second); // Output: 2
// console.log(c);  // Output: 3

//TODO: // Destructuring with default values:
// const numbers = [,5];

// const [first = 1, second = 2] = numbers;

// console.log(first);  // Output: 1
// console.log(second); // Output: 20

// // //TODO: #### Skipping Elements:
// const numbers = [1, 2, 3, 4, 5];

// // // Skipping elements
// const [, , third, , ] = numbers;

// console.log(third); // Output: 3
// // console.log(fifth); // Output: 5

// //TODO: ####### Array Destructuring: Extracts values from an array and assigns them to variables.
//         // Supports default values and skipping elements.

//
//
//
// //TODO: ######## Object Destructuring //TODO:
// // Purpose: Extract values from an object into individual variables.

// const person = {
//   name: 'Fantahun',
//   age: 26,
//   city: 'Addis Ababa'
// };

// // // Destructuring assignment
// const { name, age, city } = person;

// console.log(name);  // Output: 
// console.log(age);   // Output: 
// console.log(city);  // Output

// //TODO: Destructuring With New Variable Names:

// const person = {
//   name: 'Alice',
//   age: 30,
//   city: 'Wonderland'
// };

// //TODO: Destructuring with new variable names
// const { name: fullName, age: years, city: location } = person;

// console.log(fullName); // Output: Alice
// console.log(years);    // Output: 30
// console.log(location); // Output: Wonderland

// //TODO: Destructuring With Default Values:
const person = {
  name: 'Alice',
  city:"AA"
};

// // Destructuring with default values
const { name, city = 'Unknown' } = person;

console.log(name); // Output: Alice
console.log(city); // Output: Unknown

// //TODO: Nested Destructuring:
// const user = {
//   name: 'Alice',
//   address: {
//     city: 'Wonderland',
//     postalCode: '12345'
//   }
// };

// // Nested destructuring
// const { name, address: { city, postalCode } } = user;

// console.log(name);        // Output: Alice
// console.log(city);        // Output: Wonderland
// console.log(postalCode);  // Output: 12345

// //TODO: Object Destructuring: Extracts values from an object and assigns them to variables. Supports new variable names, default values, and nested objects.

// //TODO: Destructuring makes it easier to work with complex data structures and improves code readability.



function add(a,b){
  return a+b;
}

// add(5,6)
// add(55,6)
// add(500,6)