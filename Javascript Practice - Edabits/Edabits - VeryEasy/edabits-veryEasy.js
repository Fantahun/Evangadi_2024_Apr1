// Convert Age to Days
// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300

// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.  // leap year divisible by 4 and 400 but not divisible by 100
// Expect only positive integer inputs.

// // pseudocode
//     func  takes 1 parameter age
//       check if age is positive
//     return age * 365 > general soln

// function calcAge(years) {
//   if (years < 0 || isNaN(years) || typeof years === "string") {
//     return "Invalid Age";
//   }

//   let ageInDays = 365 * years;
//   return ageInDays;
// }

// console.log(calcAge("1.5"));
// console.log(calcAge(0));
// console.log(calcAge(20));

/////////////////////////////////////////////////////////

// Power Calculator
// Create a function that takes voltage and current and returns the calculated power.

// Examples
// circuitPower(230, 10) ➞ 2300

// circuitPower(110, 3) ➞ 330

// circuitPower(480, 20) ➞ 9600
// Notes
// Requires basic calculation of electrical circuits (see Resources for info).

// function circuitPower(voltage,current){

//     if(isNaN(voltage) || isNaN(current)){
//         return "voltage and current should be number values";
//     }
//     let power= voltage*current;
//     return power;
// }

// console.log(circuitPower(20, 3));

/////////////////////////////////////////////////////////

// Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// Examples
// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10
// Notes
// (side1 + side2) - 1 = maximum range of third edge.
// The side lengths of the triangle are positive integers.
// Don't forget to return the result.

function nextEdge(side1, side2) {
  if (isNaN(side1) || isNaN(side2) || side1 <= 0 || side2 <= 0) {
    return "invalid side provided";
  }
  let maxRange = side1 + side2 - 1;
  return maxRange;
}

let abb = nextEdge(2, "hghgh");
console.log(abb);
console.log();
