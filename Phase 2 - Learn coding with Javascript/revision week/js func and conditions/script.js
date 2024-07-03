// // console.log("connected");

// // using function keyword (function declaration)
// console.log("above functions");
// // variables in function definition = parameter
// function greet( userAge,userName) {
//   console.log(" Happy Birthday, you have turned " + userAge + " hello, welcome " + userName );
// }

// // birth date   may 01 1998
// // calculateAge     return

// // using function expression
// let selam = function (name) {
//   console.log("ሰላም ሰላም "+name);
// };

// // greet(26,"Fantahun");
// // real value = argument
// greet(27,"Fantahun");

// selam("Mekbib");

// using func expression define a function  called sum that hold two parameters and return their sum

//

// function sumAndCount(...args) {
//   const sum = args.reduce((acc, current) => acc + current, 0);
//   const count = args.length;
//   return { sum, count };
// }

// function calculateAverage(...args) {
//   let total = sumAndCount(...args);
//   let average = total.sum / total.count;
//   console.log("average is: " + average);
// }

// calculateAverage(20, 30);

// let studentName='fantahun'

// // using function expression
// let selam = function () {
//   console.log("student name: " + studentName);
// };

// selam()
// console.log(studentName);

// const name2 = "tina"; //global

// if (true) {
//   console.log(name2);
//   let blockVar = "I'm block-scoped"; //block
//   console.log(blockVar); // Accessible here
// }

// // // console.log(blockVar); // Error: blockVar is not defined

// let name4 = 'test' //global

// function greet (){
//     console.log(name4);
//     let name='fantahun';
//     let name3 = 'Mekbibe'  // function scoped

//     // console.log(name);
//     if(true){
//         console.log(name4);
//         console.log(name);
//         let name2='kefe'  // blocked scopped
//         console.log(name2);
//         name3='fantahun'
//         console.log(name3);
//     }

//     // console.log(name2); // not defined error
//     console.log(name3);
// }
// // name3='dave'
// // console.log(name3);
// // console.log( name4);

// greet();

//conditionals    true   or   false

// if burger
// TRUTY AND FALSY

// 0
// ''
// NaN
// undefined
// NULL

let burgerAvailablity = true;
let eggAvailable = false;
let peanutButterAvailable = false;

// if (burgerAvailablity) {
//   console.log("morning ear your burger");
// } else if (eggAvailable) {
//   console.log("eat your egg");
// } else if (peanutButterAvailable) {
//   console.log("eat your peanut butter");
// } else {
//   console.log("ohhh you have too cook");
// }

// console.log("eating done? go to work");

// if   burg
// else   cook

// if  burg
// else if  egg
// else if  peanut
// else if  cook

// else go to cafe

// // ternary operator     if else

// let age =19;
// if(age>18){
//     console.log("welcome");
// }
// else{
//     console.log("meet us next year");
// }

// (conditon)? if true : if false;

// (age>18) ?  console.log("welcome") : console.log("meet us next year");

let day = "saturday";

switch (day) {
  case "monday":
    console.log("wake up and go to work");
    break;

  case "tuesday":
    console.log("second day to work");
    break;

  case "wed":
    console.log("third day to work");
    break;

  default:
    console.log("take a rest");
}
