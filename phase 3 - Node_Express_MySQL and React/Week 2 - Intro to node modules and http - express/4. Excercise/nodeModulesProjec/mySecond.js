



function myMultiplier(num){
    return 3*num;
 }
 

 let testMultiplication =  myMultiplier(4)
 console.log(`inside mySecond Module: ${testMultiplication}`);


//  export default myMultiplier;  // we can export is as a default since there are no other features to be exported
//  export {myMultiplier};  // es6 module export


// module.exports = myMultiplier;  // use the variable in the import as a function
module.exports.myMultiplier = myMultiplier;  // CommonJs export  (use   import variable.myMultiplier)