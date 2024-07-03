/*Squares and Cubes
Create a function that takes an array of two numbers and checks 
if the square root of the first number is equal to the cube root of the second number and the thirsd number is even.

Examples
checkSquareAndCube([4, 8]) ➞ true

checkSquareAndCube([16, 48]) ➞ false

checkSquareAndCube([9, 27]) ➞ true
Notes
Remember to return either true or false.
All arrays contain two positive numbers.
If you're stuck, check the group members :).
*/
// function definition .  func expression   . arrow function

// let checkSquareAndCube = function (arr) {
//   if (
//     !Array.isArray(arr) || //is it not an array?
//     arr.length !== 2 || // if it doesnt have two elements
//     // !Number.isInteger(arr[0]) || // first element is not integer?
//     // !Number.isInteger(arr[1]) || // second element is not integer?
//     arr.every((i) => !Number.isInteger(i)) ||
//     // arr[0] < 1 || // first element is positive no?
//     // arr[1] < 1 // second element is positive no?
//     arr.every((element) => element < 1)
//   ) {
//     return "invalid input";
//   }

//   if (Math.sqrt(arr[0]) === Math.cbrt(arr[1])) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // console.log(checkSquareAndCube([1,-3]));  // invalid input

// console.log(checkSquareAndCube([9, 27])); //true

// // console.log(checkSquareAndCube([4, 8]));  //true

// //  console.log(checkSquareAndCube([16, 48]));  //false

//////////////////////////////////////////////
/*
Write a function, tellMyPersonality, that takes a number parameter 
and returns the personality type based on argument supplied.
a. If the argument is an even number function should return “Fair”
b. Otherwise, it should return “Biased”
E.g.,
tellMyPersonality(4) returns "Fair"
tellMyPersonality(3) returns "Biased"
*/

// let tellMyPersonality = (num) => {
//   if (!Number.isInteger(num)) {
//     // console.log("invalid input");
//     return "Invalid Input";
//   }

//   //  if(num%2==0) {
//   //     return("Fair");
//   //  }
//   //  else{
//   //     return("Biased");
//   //  }

//   //using tirnary operator   ?   :

// //   let result = num%2==0?"Fair" : "Biased";
// //   return result

//   return num % 2 == 0 ? "Fair" : "Biased";
// };

// console.log(tellMyPersonality(21));

////////////   using arrow function without validation

// let tellMyPersonality = (num) =>   num % 2 == 0 ? "Fair" : "Biased";

//   console.log(tellMyPersonality(2));

// Write a function, countDown, that counts (prints) backward starting at 100 with the step down
// of 4. Last value to be printed should be 0.

// function countDown() {
//   // for(let i=100;i>=0;i-=4){
//   //     console.log(i);
//   // }

//   // using while loop?

//   let i = 100;
//   while (i >= 0) {
//     console.log(i);
//     i=i-4;
//   }
// }

// countDown();

/////////////////////////////////////////////////////
/*
3. Write a function, reverseDigits, that takes an integer parameter and then returns the number
with the digits reversed.
E.g.,
reverseDigits(1234) returns 4321
*/

let reverseDigits = (number) => {
  if (!Number.isInteger(number)) {
    return "invalid input: value must be an integer";
  }

  // convert the integer number to string
  //   let stringNumber = number.toString();
  //   let converted = stringNumber.split("").reverse().join(""); //1234   4321

  let stringNumber = number.toString().split("").reverse().join(""); //1234   4321

  return stringNumber;
};

console.log(reverseDigits(2365));
