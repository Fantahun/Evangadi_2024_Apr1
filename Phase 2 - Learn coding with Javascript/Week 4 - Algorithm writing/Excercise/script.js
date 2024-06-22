/////////// Advanced JavaScript Algorithms  - practice exercise  //////////////////
/*
Question 1 Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○Test 1:  getOnlyEvens([1, 2, 3, 6, 4, 8]) prints  [ 4]
○Test 2:  getOnlyEvens([0, 1, 2, 3, 4]) prints  [0, 2, 4]
*/

// function getOnlyEvens(arr) {
//     let evensArray = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 == 0 && arr[i] % 2 == 0) {
//         evensArray.push(arr[i]);
//       }
//     }
//     console.log(evensArray);
//   }

//   getOnlyEvens([0, 1, 2, 3, 4]);

/*
  Question 2
  ●Create a function that takes a two-digit number as an parameter and prints "Ok" in
  the console if the given string is greater than its reversed digit version. If not, the
  function will print "Not ok"
  ○Test 1: reverseCompare(72)  prints "ok" because  72 > 27
  ○reverseCompare(23) prints  "Not ok", because 23 is not greater than 32
  */

//   function reverseCompare(num) {
//     let strNum = num.toString();
//     let reversedNum = "";
//     if (strNum.length === 2 && Number.isInteger(num)) {
//   reversedNum += strNum[1];
//   reversedNum += strNum[0];

// if (Number(strNum) > Number(reversedNum)) //converted via line 34 and 35

//     let revNum = strNum.split("").reverse().join("");
//       if (Number(strNum) > Number(revNum)) {
//         console.log("ok");
//       } else {
//         console.log("Not ok");
//       }
//     } else {
//       console.log("Entered value is not a number or its not two digit number");
//     }
//   }
//   reverseCompare(72);

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

//   function returnFactorial(num) {
//     let factorial = 1;7
//     if (Number.isInteger(num) && num >= 0) {
//       if (num === 0 || num==1) {
//         return 1;
//       } else {
//         for (let i = num; i > 1; i--) {
//           factorial *= i;
//         }
//         return factorial;
//       }
//     } else {
//       console.log("Number is not positive number or is not integer");
//     }
//   }

//   let fact = returnFactorial(4);
//   console.log(fact);

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
  
  ○Test 1: checkMeera([10,0, 4,0, 5]) outputs “I am NOT a Meera array” because 5*2 is 10
  ○Test 2: checkMeera("[1, 4', 9]") outputs “I am a Meera array”
  ○Test 1: checkMeera([1,2,3,'rich','birukti']) outputs “I am NOT a Meera array” because -3*2 is -6
  */

//////// OPTION ONE /////////////
/*
function checkMeera(arr) {
  let isMeeraArray = true;
  // the provided value must be be an arry
  //check if the array is fully number value
  if (Array.isArray(arr) && arr.every((item) => typeof item == "number")) {
    // check if every item multiplied by 2 is found in the array
    for (let i = 0; i < arr.length; i++) {
      //if item is 0 skip that iteration and move forward(if its required...)
      if (arr[i] == 0) {
        continue;
      } else {
        if (arr.includes(arr[i] * 2)) {
          isMeeraArray = false;
          break;
        }
      }
    }
    if (isMeeraArray) {
      console.log("I am a meera array");
    } else {
      console.log("I am not a meera array");
    }
  } else {
    console.log(
      "invalid input, input must be array and all elements must be number types"
    );
  }
}

checkMeera([1, 0, 1, 3]); // not meera
*/

////////OPTION TWO/////////////
//   function checkMeera(arr) {
//     let isMeera = true;
//     if (Array.isArray(arr) && arr.every((value) => typeof value == "number")) {
//       for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(arr[i] * 2)) {
//           isMeera = false;
//           break;
//         }
//       }

//       isMeera
//         ? console.log("I am a Meera array")
//         : console.log("I am a not a Meera array");
//     //   return isMeera;
//     } else {
//       console.log(
//         "the value passed is not an array or all the array values are not numbers"
//       );
//     //   return false;
//     }
//   }

//   checkMeera([10, 4, 0, 5]);
//   checkMeera([7, 4, 9])
//   checkMeera([1, -6, 4, -3]);

/*
  Question 5 (Dual array)
  ●Define a Dual array to be an array where every value occurs exactly twice. 
  For example,
  [1, 2, 1, 3, 3, 2] is a dual array.The following arrays are not Dual arrays [2, 5, 2, 5, 5] (5
  occurs three times instead of two times) [3, 3, 1, 2, 2] (3 occurs once instead of two
  times) 

  Write a function named isDual that returns 1 if its array argument is a Dual array.
  Otherwise it returns 0.
  */

function dualArray(arr) {
  let itemOccurance = {};

  if (!Array.isArray(arr) || arr.length % 2 !== 0 || arr.length < 2) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    // if ((itemOccurance.hasOwnProperty(arr[i]))) {
    // below condition is based on truthy and flasy logic(if item exist with a value its truthy if not it will be undefined and it will be falsy)
    if (itemOccurance[arr[i]]) {
      itemOccurance[arr[i]] += 1;
      if (itemOccurance[arr[i]] > 2) { //when we found an item which has occured morethan two times, we return 0 and no need of checking the rest
        console.log(itemOccurance);
        return 0;
      }
    } else {
      itemOccurance[arr[i]] = 1;
    }
  }

  // check the item occurance object for the result
  for (key in itemOccurance) {
    if (itemOccurance[key] !== 2) {
      console.log(itemOccurance);
      return 0;
    }
  }

  console.log(itemOccurance);
  return 1;
}
console.log(dualArray([1, 2, 1, 1, 3, 3, 2])); // Output: 1
// console.log(dualArray([2, 5, 2, 5, 5])); // Output: 0
// console.log(dualArray([3, 1, 1, 2, 2])); // Output: 0
// console.log(dualArray([4, 4, 6, 6])); // Output: 1

/*
  Question 6
  ●Write a function that takes the number of seconds and returns the digital format clock
  time as a string. Time should be counted from 00:00:00.
  ○Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
  secs.
  ■digitalClock(61201) as "17:00:01"   No AM/PM. 24h format.
  ■digitalClock(87000) as "00:10:00" It's 00:10 next day
  */

// function digitalClock(seconds) {
//   // hour how much sec     3600 sec
//   // minute how much sec   60 sec
//   let hour = 0;
//   let minute = 0;
//   let second = 0;

// hour = Math.floor((seconds % 86400) / 3600);
// minute = Math.floor((seconds % 3600) / 60);
// second = seconds % 60;

//   hour = (seconds % 86400) / 3600;
//   let convHour = String(hour);
//   let hourWithoutDot='';
// for(let i=0;i<3;i++){
//   if(convHour[i]!='.'){
//     hourWithoutDot+=convHour[i];
//   }
//   else if(convHour[i]==0){
//     break;
//   }
// }
// console.log('dot removed: '+hourWithoutDot);

//   console.log(typeof convHour);

//   minute = (seconds % 3600) / 60;
//   let convMin = String(minute);

//   // second = seconds % 60;
//   // let convSec = String(second);

//   // console.log(hour + ":" + minute + ":" + second);

//   if (hour < 10) {
//     hour = "0" + hour;
//   }

//   if (minute < 10) {
//     minute = "0" + minute;
//   }

//   if (second < 10) {
//     second = "0" + second;
//   }
//   console.log(hour + ":" + minute + ":" + second);
// }

// digitalClock(61201);

/*
function digitalClock(seconds) {
  let hour, min, sec;
  hour = Math.floor((seconds % 86400) / 3600); // calculate times in the current day otherwise we will get greater than 24 hours
  min = Math.floor(((seconds % 3600) / 60); // remaining minutes after extracting hours.
  sec = Math.floor(((seconds % 60); // remaining seconds after extracting minutes.

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

digitalClock(5025); //as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45 secs.
digitalClock(61201); //as "17:00:01"   No AM/PM. 24h format.
digitalClock(87000); //as "00:10:00" It's 00:10 next day
*/
