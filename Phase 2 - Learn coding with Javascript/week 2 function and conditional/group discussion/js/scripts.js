// console.log("connected");

// // defining a function
// function greet ()
// {
//     console.log("hello you have called greet function");
// }
// // calling a funtion
// greet ();

// // function expression
// let sayGoodBye = function(){
//     console.log("good bye");
// }
// // calling a function
// sayGoodBye();

// // function with parameters
// function add(num1,num2){
//  console.log("sum is:"+ (num1+num2));
// }

// // calling a function with an argument
// add(7000,650);
// add(2,7)

// function printNUm(a,b,c){
//       //string literals
//     console.log(`my lucky numbers are ${a}, ${b}, ${c}`);
//     // return a;
//    }

// //    functions that return a value
// function product(num1,num2){
//     let result=num1*num2;
//     return result;
// }

// //   let prodResult = product(10,9); //63
// //   let xy = prodResult+50;

// console.log(product(10,9));

// function adder(x,y){
//     // console.log(x + y);
//     return x + y
// }

// let name1 ="fantahun"  // accessed globally
// var name2=  "alex"
// const name3 ='Mame'

// function average (w,t){
//     var name4="mr x"
//     let name5="mr y"
//     const name6="mr z"

//     {
//         console.log(name3);
//         console.log(name4);
//         console.log(name6);
//     }

//     // console.log(name3);
//     var result=adder(w,t)/2;
//     return result;
// }

// // console.log(avarage(100,20))
// console.log(average(200, 10));

// // ***************************************
// // function scope
// // ***************************************
// function myCar() {
//   var firstCar = "Toyota"; // has function Scope
//   let secondCar = "Honda"; // has function Scope
//   const thirdCar = "Volvo"; // has function Scope
// //   console.log(firstCar);
// //   console.log(secondCar);
// //   console.log(thirdCar);
// }
// myCar();
// //   console.log(firstCar);
// //   console.log(secondCar);
// //   console.log(thirdCar);

// // function num(){

// //    {
// //         let cy = 5;
// //         var dy = 6;
// //         const ey = 7;
// //     }
// //     // console.log(cy);
// //     console.log(dy);
// //     // console.log(ey);
// // }

// // num();

// let arrowFunction = () => {
// console.log("hello");
// }

// arrowFunction()

// let arrow2= ()=>console.log("hello2");
// arrow2()

// let arrow3 = name=> console.log("hellow "+name);
// arrow3("fantahun")

//  check condition is met  if true  execute
/*
if
if else if
if else
switch
*/

let age = 19;

if (age < 18) {
  //true
  console.log("please go home");
} else {
  console.log("please get inside");
}

let day = "saturday";

if (day == "monday") {
  console.log("plese wake up and go to work");
} else if (day == "tuesday" || day == "wednesday" || day == "thursday") {
  console.log("plese wake up and go to work for second time");
} else if (day == "friday" || day == "saturday") {
  console.log("plese wake up and go to work for s time");
} else if (day == "sunday") {
  console.log("time to relax");
} else {
  console.log("unknown date entered");
}

console.log("you are here");
