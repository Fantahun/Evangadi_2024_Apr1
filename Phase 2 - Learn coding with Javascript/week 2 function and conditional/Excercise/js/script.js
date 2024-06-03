// console.log("connected");

// Questions on functions
// ********************
// Question 1
// ● Define a simple function named myFirst that prints the word "Hello" on the console
function hello() {
  console.log("Hello");
}
hello();

// Question 2
// ● Define a function called mySecond that takes a parameter and prints the parameter on console
let mySecond = function (second) {
  console.log(second);
};
mySecond(23);

// Question 3
// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console
let myThird = (sec) => {
  mySecond(sec);
};
myThird(32);

// Question 4
// ● Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console.
let nums = [2, 4, 6, 8, 10];
let myFourth = (arr) => {
  console.log(arr[0]);
};

myFourth(nums);

// Question 5
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter and
// prints the sum of the two numbers on console

let numsList = [23, 16];

let myFifth = (numbers) => {
  if (
    numbers.length != 2 ||
    typeof numbers[0] !== "number" ||
    typeof numbers[1] !== "number"
  ) {
    console.log("array should have two values and they should be numbers");
  } else {
    let sum = numbers[0] + numbers[1];
    console.log(`sum is: ${sum}`);
  }
};

myFifth(numsList);
