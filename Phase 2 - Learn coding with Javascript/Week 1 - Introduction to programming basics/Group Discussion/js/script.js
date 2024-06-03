// Introduction to programming basics - Practice exercise
// _______________________________________________________

// Question 1: Find out the answers for these by displaying it on the console. You will need to
// compare the value on the left of the operator with the value on the right. 
// Please note that the answer for each question below should be either True or False.
// A. 24 > 3 
console.log(24 > 3)  // true

// B. 2 < "12"
console.log(2 < "12")  // true    2 < 12

// C. 0 == 2
console.log(0 == 2)  // false

// D. 2.0 === 2
console.log(2.0 === 2)  // true 

// E. 2.0 == "2"
console.log(2.0 === "2")  // false  

// F. 2 < "John"
console.log(2 < 1)  // 2<NaN   false    unicode  2<
// comparison with NaN is gonna be true only   NaN!=NaN or NaN !== NaN

// G. 2 > "John"
console.log(2 > "John")  // 2>NaN   false     comparison with NaN is gonna be true only   NaN!=NaN or NaN !== NaN

// H. "2" < "2"
console.log("2" < "2")  //  false             
/* 
comparison is made left to right with a unicode value of each character
and result is concluded as soon as difference is found (aCC  vs bBB) 
*/


// I. "32225555555" > "22155555552"
console.log()  // true    
a  97  
A  65  
0  48  


// J. 1 == 1 || 3 == 2 || 3 == 7
console.log(1 == 1 || 3 == 2 || 3 == 7)  // true 



// K. 1 == 1 && 2 == 2 && 3 == 7
console.log()  // false

true && true && 3 == 7


// L. true || false
console.log()  // true  1==1||false    based on precedence   ! > && > ||

// M. true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")  // true


console.log(1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1") )  // true



// Note:
// ● To see the answers for each question, you will need to use the console. For example, for the
// Question 1(A), write your code like this: console.log(4 > 3)
// ● When you meet in groups with your friends, please make sure to discuss the reason why the
// answer for each question is either true or false.




// Question 2: Answer the following questions. Make sure to think about each question and
// try to solve it in your brain before you see the result on the console.

// 1. Which expression returns true?
// A/ '1' === 1  // false  b/c of strict equality check no coercion will be done
console.log('1' === 1)  

// B/ 1 == 1  // true
console.log(1 == 1)  

// C/ 1 === 1 // true
console.log(1 === 1)  

// D/ B and C from above  // true  
 


// 2. What is the value of x in this statement?
let x = (1 == true);
true  

console.log(x);
// A/ 1
// 👉B/ true
// C/ false
// D/ undefined


// 3. What is the value of l from the following statements?
let k = 10;
let l = true
console.log("l is: " + l)
// A/ 10
// B/ 5
// C/ 15
// 👉D/ true



// 4. What is the value of e from the following statements?
let e = 5;
e += 3; // adds 3 to x and x becomes 8

console.log(e);
// A/ 3
// 👉B/ 8
// C/ 15
// D/ 5


// 5. What is the value of g from the following statements?
let f = 10;
let g = f++; 

console.log("g is: " + g + " and f is: " +f)
// 👉A/ 10  (post increment > y takes the origional value of x and then x is incremented so if we log x its 11 )
// B/ 11
// C/ 12
// D/ 13


// 6. What is the value of i in the following statements?
let h = 1;
let i = (2 !== 2); 

console.log(i)
// A/ 1
// B/ 2
// C/ false
// 👉D/ true

// 7. What is the output of (+”2”+2)?  
console.log((+ "2"+2))  //4
// 4 (unary + operator applied to a string, 
//it convert the string to a number)

// 8. What is the output of (6 % 3)? 0  
console.log((7 % 3))   
// 1  (modulus operator returns the remainder (ቀሪ) of the divsion )

// 9. What is the output of (2+true)? 
console.log((2+1))  //3   true is converted to integer 1 


// Question 3:
// ● Write a simple script that adds 1 and 2 and displays the result on the console
// ● Use variables a, b & c
// ● Use "let" to declare the variables
// ● Use the formula c = a + b
// ● Display the value of c on console

let num1,num2;
num1=10;
num2=5;

let sum = num1 + num2;
console.log(sum)


// Question 4:
// ● Create a variable to hold your first name
// ● Create another variable to hold your last name
// ● Create a third variable to hold your full name
// ● Assign the value of your first name and last name to the first two variable
// ● Use "+" to concatenate your first name and last name to assign the result to your last name's
// variable

// ● Don't forget to include space between your first and last name
// ● Display the value of your full name on the console

let fName; 
let FullName
let full_name

fName = "Fantahun";

let lName; 
lName = "Bishaw";

let fullName = "Hello :) my name is: " + fName + " " + lName + ".";
console.log(fullName);






