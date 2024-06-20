/////////// Advanced JavaScript Algorithms  - practice exercise  //////////////////
/*
Question 1 Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○Test 1:  getOnlyEvens([1, 2, 3, 6, 4, 8]) prints  [ 4]
○Test 2:  getOnlyEvens([0, 1, 2, 3, 4]) prints  [0, 2, 4]
*/

function getOnlyEvens(arr) {
  let evensArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0 && arr[i] % 2 == 0) {
      evensArray.push(arr[i]);
    }
  }
  console.log(evensArray);
}

getOnlyEvens([0, 1, 2, 3, 4]);

/*
Question 2
●Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○Test 1: reverseCompare(72)  prints "ok" because  72 > 27
○reverseCompare(23) prints  "Not ok", because 23 is not greater than 32
*/

function reverseCompare(num) {
  let strNum = num.toString();
  let reversedNum = "";
  if (strNum.length === 2 && Number.isInteger(num)) {
    reversedNum += strNum[1];
    reversedNum += strNum[0];

    let revNum = strNum.split("").reverse().join("");
    console.log(revNum);

    // if (Number(strNum) > Number(reversedNum)) //converted via line 34 and 35

    if (Number(strNum) > Number(revNum)) {
      console.log("ok");
    } else {
      console.log("Not ok");
    }
  } else {
    console.log("Entered value is not a number or its not two digit number");
  }
}
reverseCompare(72);

/*
Question 3
●Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○Test 1: returnFactorial(5) outputs 120
○Test 2: returnFactorial(6) outputs 720
○Test 3: returnFactorial(0) outputs 1
*/

function returnFactorial(num) {
  let factorial = 1;
  if (Number.isInteger(num) && num >= 0) {
    if (num === 0) {
      return 1;
    } else {
      for (let i = num; i >= 1; i--) {
        factorial *= i;
      }
      return factorial;
    }
  } else {
    console.log("Number is not positive number or is not integer");
  }
}

let fact = returnFactorial(0);
console.log(fact);

/*
Question 4 (Meera array)
●A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. 

Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”

○Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3*2 is -6
*/

function checkMeera(arr) {
  let isMeera = true;
  if (Array.isArray(arr) && arr.every((value) => typeof value == "number")) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.includes(arr[i] * 2)) {
        isMeera = false;
        break;
      }
    }

    isMeera
      ? console.log("I am a Meera array")
      : console.log("I am a not a Meera array");
    return isMeera;
  } else {
    console.log(
      "the value passed is not an array or all the array values are not numbers"
    );
    return false;
  }
}

// checkMeera([10, 4, 0, 5]);
// checkMeera([7, 4, 9])
checkMeera([1, -6, 4, -3]);

/*
Question 5 (Dual array)
●Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0.
*/

function dualArray(arr) {}

/*
Question 6
●Write a function that takes the number of seconds and returns the digital format clock
time as a string. Time should be counted from 00:00:00.
○Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.
■digitalClock(61201) as "17:00:01"   No AM/PM. 24h format.
■digitalClock(87000) as "00:10:00" It's 00:10 next day
*/

function digitalClock(seconds) {
  let hour, min, sec;
  hour = Math.floor((seconds % 86400) / 3600); // calculate times in the current day otherwise we will get greater than 24 hours
  min = Math.floor((seconds % 3600) / 60); // remaining minutes after extracting hours.
  sec = seconds % 60; // remaining seconds after extracting minutes.

  //make 24 hours be displayed as 00
  if (hour == 24) {
    hour == "00";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  let time = `${hour}:${min}:${sec}`;
  console.log(time);
}

digitalClock(100000); //as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45 secs.
digitalClock(61201); //as "17:00:01"   No AM/PM. 24h format.
digitalClock(87000); //as "00:10:00" It's 00:10 next day
