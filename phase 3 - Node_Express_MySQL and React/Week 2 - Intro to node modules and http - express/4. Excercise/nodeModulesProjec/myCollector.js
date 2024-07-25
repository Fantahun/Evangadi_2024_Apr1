// file system core module
const fs = require('fs')

// es6 way of importing modules  (npm init and  "type":"module" in a package.json is a must)
// import { myMultiplier } from "./myFirst";
// import myMultiplier from "./mySecond";

// commonJs way of importing modules
const myMult = require('./myFirst');
const myMult2 = require('./mySecond');


// for the es6 moduele import testing
// let firstMult = myMultiplier(5)
// console.log(firstMult);

// let secondMult = myMultiplier(5)
// console.log(firstMult);


let firstMyMult = myMult.myMultiplier(5)
console.log(firstMyMult);


// let secondMyMult = myMult2(5)   // for module.exports = myMultiplier;

let secondMyMult = myMult2.myMultiplier(5)
console.log(secondMyMult);



// first write operation
let firstMult14 = `The value of 14 when passed through first module, myMultiplier function is ( ${myMult.myMultiplier(14)} )`
console.log(firstMult14);


fs.writeFile('results.txt',firstMult14,'utf-8',(error,data)=>{
    if (error){
        console.log('Error occured: '+ error);
    }
    else{
        console.log("File created and written succesfully!");
    }
})



// second write operation
let secondMult14 = `\nThe value of 14 when passed through second module, myMultiplier function is ( ${myMult2.myMultiplier(14)} )`

fs.appendFile('results.txt',secondMult14,'utf-8',(err,data)=>{
    if(err){
        console.log("Error occured while writing: ",err);
    }
    console.log("File written succusfully");
})
