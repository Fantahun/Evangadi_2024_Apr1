console.log("My  first  module");


function myMultiplier(num){
   return 2*num;
}

let test = myMultiplier(4);
console.log(`inside mySecond Module: ${test}`)


// export {myMultiplier} // es6 module exporting

module.exports.myMultiplier = myMultiplier; // commonJS way