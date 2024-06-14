// // console.log("connected");

// Decision loop and object oriented programing:
// practice exercises
// Questions on decision loops
// ************************
// Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

/*
for (let i = 1; i<=10; i++) {
  console.log(i);
}*/

// Question 2
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9[1, "Hello", 8, 44]
// 10
// 11
// 12

// let nextFive = (num)=>{
// for(i=num+1;i<=num+5;i++){
//     console.log(`${i}\n`);
// }
// }
// nextFive(7)

// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

// function sumUp(n) {
//   let sum = 0;
//   for (let i = n + 1; i <= n + 10; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumUp(7));

// Question 4
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44

// function printArray(arr) {
//   let counter = 0;
//   while (counter <= arr.length - 1) {
//     console.log(arr[counter]);
//     counter++;
//   }
// }

// let arr1 = [1, "Hello", 8, 44];
// printArray(arr1);

// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = , output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2

// function arrayLength(arr) {
//   console.log(arr.length);
// }
// let arr2 = ["world", 13];
// arrayLength(arr2);

// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0
// let sumArray = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// };

// sumArray([3, 0]);

// Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

// let evenFromOdd = (arr) => {
//   let evens = 0;
//   let odds = 0;

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] % 2 == 0 ? (evens += arr[i]) : (odds += arr[i]);
//   }
//   return evens - odds;
// };

// console.log(evenFromOdd([5, 6, 99, 8, 76, 4, 68, 44]));

// Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car

// let evenItems = (arr) => {
//   for (i = 0; i < arr.length; i += 2) {
//     console.log(arr[i]);
//   }
// };

// evenItems([5, 6, 99, 8, 76, 4, 68, 44]);

// Questions on built in JavaScript methods
// ****************************************
// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

// let popPush = (arr) => {
//   arr.pop();
//   arr.push(32);
//   console.log(arr);
// };
// popPush([5, 6, 99, 8, 76, 4, 68, 44]);

// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

// let sortAsc = (arr) => {
//   console.log(arr.sort((a, b) => a - b));
// };
// sortAsc([5, 6, 99, 8, 76, 4, 68, 44]);

// Questions on JavaScript objects
// ****************************
// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};
// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the console
// ○ // Use the dot notation "." to call the property you want to change

evangadiClass.lengthOfCourse = "5 Month";
console.log(`Length of course: ${evangadiClass.lengthOfCourse}`);

// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method

evangadiClass.topicsCovered.push("Bootstrap");
console.log(`topics covered: ${evangadiClass.topicsCovered}`);

// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console

function calcAverage(obj) {
  let totalAge = 0;
  let averageAge = 0;
  for (let i = 0; i < obj.students.length; i++) {
    totalAge += obj.students[i].age;
  }
  averageAge = totalAge / evangadiClass.students.length;
  console.log(`Average Age: ${averageAge}`);
}

calcAverage(evangadiClass);

// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console

let malesPercent = (obj) => {
  let malesCount = 0;
  for (i = 0; i < obj.students.length; i++) {
    if (obj.students[i].sex === "M") malesCount += 1;
  }

  let malesPercentage = (malesCount * 100) / obj.students.length;
  console.log(`males percentage: ${malesPercentage}`);
};
malesPercent(evangadiClass);

// // Puzzles
// // *******
// // Question 15: Test the divisors of three
// // ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// // numbers (on the console) between low and high, and for each of these numbers print
// // whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// // "div3" directly after the number.
function highLow(low, high) {
  for (let i = low; i <= high; i++) {
    i % 3 == 0 ? console.log(`${i} -> div3`) : console.log(i);
  }
}
highLow(1, 13);

// // Question 16: The famous coding interview question (FizzBuzz)
// // ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// // three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// // numbers which are multiples of both three and five print "FizzBuzz".

let fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();

// // Question 19: Evens number
// // ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// // number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// // integer argument is an Evens number. The function prints 0 otherwise

// TODO: TRY TO CREATE A SOLUTION USING ARRAYS BY PUSHING AND THEN CHECKING IF ALL ARRAY ELEMENTS HOLD SAME VALUE

let isEvens = (num) => {
  let numStr = String(num); //convert it to string coz, we have to iterate throught the digits
  for (let i = 0; i < numStr.length; i++) {
    if (parseInt(numStr[i]) % 2 !== 0) {
      //convert the digits to integer and then check if item isn't divisible by 2 (one non divisible item = argument is not fully even)
      console.log(0);
      return 0;
    }
  }
  console.log(1);
};

isEvens(268420);
isEvens(2618320);
