// // function add (a,b){
// //   console.log("i have two numbers "+a +" and "+b);
// //     return a+b
// // }
// // let added = add(5,10)//return 15

// // // function average(c,d){
// // //     let av = add(c,d)/2; //15
// // //     console.log("the average is "+av);
// // // }

// // function average(){
// //   let avv = added/2;
// //   console.log("the average is "+avv);

// // }

// // average()

// // // Questions on functions
// // // ********************
// // // Question 1
// // // ● Define a simple function named myFirst that prints the word "Hello" on the console

// // function myFirst(){
// // console.log('Hello');

// // }

// // const myFirst= ()=>{
// // console.log('Hello');

// // }

// // let myFirst = function(){
// // console.log('Hello');

// // }

// // myFirst();//calling the function

// // // Question 2
// // // ● Define a function called mySecond that takes a parameter and prints the parameter on console

// // function mySecond(param){
// //   console.log(param);
// // }

// let mySecond=(x)=>{
//   console.log(x);
// }

// // // Question 3
// // // ● Define a function called myThird that takes a parameter and prints the parameter on the console.
// // But, it uses mySecond function to print the parameter on the console

// function myThird (x,y){
//   let sum = x+y;
//   mySecond(sum); //calling mysecond function
// }

// myThird(3,4);

// // // Question 4
// // // ● Write a function named myFourth that takes an array as a parameter and prints only the first value of the array on the console.

// function myFourth(arr){
//   if(arr.length > 0){
//     console.log(arr[0]);
//   }
//   else{
//     console.log("hey, please make sure the array has atleast one element");
//   }
// }

// let arrayList=[5];

// console.log(arrayList.length);

// myFourth(arrayList)

// // // Question 5
// // // ● Write a function named myFifth that takes an array with two numbers in it as a parameter and
// // // prints the sum of the two numbers on console

let numsList = [23, 12];

let myFifth = (numbers) => {
  if (
    numbers.length != 2 ||
    typeof numbers[0] !== "number" ||
    typeof numbers[1] !== "number"
  ) {
    console.log("array should have two values and they should be numbers");
  } else {
    let sum = numbers[0] + numbers[1];
    console.log(`the sum is ${sum}.`);
  }
};

myFifth(numsList); //pre defined array

// // // Questions on functions from edabit (https://edabit.com)
// // // ************************************************

// // // Question 6
// // // ● Write a function that takes an integer minutes and converts it to seconds.
// // // ○ https://edabit.com/challenge/8q54MKnRrm89pSLmW

// // let minToSec = (min) => {
// //   console.log("hello");

// //   if (isNaN(min) || min < 1) {
// //     return "entered value is not a number or its not positive value";
// //   } else {
// //     let sec = min * 60;
// //     return `${min} min/s is/are equal with ${sec} seconds.`;
// //     return sec;
// //   }
// // };

// // let seconds = minToSec(1);
// // console.log(seconds);

// // // Question 7
// // // ● Create a function that takes a number as a parameter, increments the number by +1 and
// // // returns the result.
// // // ○ https://edabit.com/challenge/NAQhEoxbofPidLxm9

// // function addOne(number) {
// //   if (isNaN(number)) {
// //     console.log("Please enter a number");
// //   } else {
// //     return number + 1;
// //   }
// // }

// // let incremented = addOne(5);
// // console.log(incremented);

// // // Question 8
// // // ● Write a function that takes the base and height of a triangle and returns its area.
// // // ○ https://edabit.com/challenge/3CaszbdZYGN4otQD8

// // const triArea = (base, height) => {
// //   if (isNaN(base) || base < 1 || isNaN(height) || height < 1) {
// //     return "entered value is not a number or its not positive value";
// //   } else {
// //     let area = (base * height) / 2;
// //     return area;
// //   }
// // };

// // console.log(triArea(10, 10));

// // // Question 9
// // // ● Create a function that returns the total number of legs of all the animals. In this challenge, a
// // // farmer is asking you to tell him how many legs can be counted among all his animals. The
// // // farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the
// // // farmer wants to know the total number of legs and not the total number of animals.
// // // ○ https://edabit.com/challenge/8Qg78sf5SNDEANKti

function totalLegs(chicken, cow, pig) {
  if (
    !Number.isInteger(chicken) ||
    chicken < 0 ||
    !Number.isInteger(cow) ||
    cow < 0 ||
    !Number.isInteger(pig) ||
    pig < 0
  ) {
    return "please enter a value thats a positive number and it shouldnt be decimal place";
  } else {
    let totalLegs = chicken * 2 + cow * 4 + pig * 4;
    return totalLegs;
  }
}

console.log(totalLegs(5, 2, -1));

// // Question 10 (not from edabit.com)
// // ● Create a function that takes an array containing only TWO numbers as a parameter and returns
// // a value that is 3 times the first element of the array.

function threeTimes(arr) {
  if (
    arr.length == 2 &&
    typeof arr[0] == "number" &&
    typeof arr[1] == "number"
  ) {
    return 3 * arr[0];
  } else {
    console.log("array size is not 2 or the elements are are not number types");
  }
}

let nums = [100, 3];
console.log(threeTimes(nums));

// // Questions on Conditional statements and - practice exercise
// // ****************************************************

// // Question 11
// // ● Create a function that returns true when num1 is equal to num2; otherwise return false.
// // ○ https://edabit.com/challenge/QSnaSH5S3oxZkwcNc

function checkEquality(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("both values should be number type");
  } else {
    if (num1 === num2) {
      return true;
    } else {
      return false;
    }
  }
}
// console.log(checkEquality('2',2))

// // Question 12
// // ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// // return false.
// // ○ https://edabit.com/challenge/qMr6wYGr6NaXAPQGF

let isDivisible = function (num) {
  if (Number.isInteger(num)) {
    return num % 100 === 0 ? true : false;
  } else {
    return "value must be a number type";
  }
};

console.log(isDivisible(100));

// // Question 13
// // ● Create a function that takes a number as an argument and returns "even" for even numbers
// // and "odd" for odd numbers.
// // ○ https://edabit.com/challenge/kuzB5CMXiKDEYKXAP

let evenOrOdd = function (num) {
  if (typeof num == "number") {
    return num % 2 === 0 ? "Even" : "Odd";
  } else {
    return "value must be a number type";
  }
};
console.log(evenOrOdd("30"));

// // Question 14
// // ● Create a function that returns
// // ○ “Invalid score” if score is above 100 or score is a negative number
// // ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// // ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// // ○ “Grade C” for any score  79 and below

function checkScore(score) {
  let grade = "";

  if (Number.isInteger(score)) {
    if (score < 0 || score > 100) {
      console.log("invalid score");
    } else if (score >= 90 && score <=100) {
      console.log("Grade A");
    } else if (score >= 80 && score <90) {
      console.log("Grade B");
    } else {
      console.log("Grade C");
    }
  } else {
    return "value must be a number type";
  }
}

checkScore(79);
