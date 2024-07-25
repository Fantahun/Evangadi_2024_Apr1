/*
/* #########################  QUESTION 1 ############################## */
// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1".

// 1.1. Select the element with an id of "sample1" using jQuery.
// let sample = $("#sample1");
// // 1.2. Print the element itself on the console upon page refresh.
// console.log(sample);
// // 1.3. Print the content of the element on the console upon page refresh.
// //Use jQuery to select the content of the element
// console.log(sample.text()); //text content
// console.log(sample.html()); // html contentu

/* #########################  QUESTION 2 ############################## */
// Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".
// 2.1. Select the element with an ID of "techCompanies" and display it on your console.
// let techCompanies = $("#techCompanies");
// console.log(techCompanies);

// // 2.2. How many tech companies are listed under the ul element with an id of
// // "techCompanies"?
// // let techCompaniesList = $("#techCompanies li");

// // console.log(techCompaniesList);
// // console.log(techCompaniesList).length; // number of companies

// // 2.3. Select all elements with a class of "red" and display them on the console.
// let redTech = $(".red");
// // DRY    DONT  REPEAT YOURSELF

// // to list each company

// // redTech.each((index, element) => {
// //   console.log($(element).text());
// //   });

// // 2.4. Create a new li HTML element with a content of "Facebook" and display it on console
// let facebook = $("<li>facebook</li>");
// console.log(facebook);
// // 2.5. Give the newly created element a class of "blue" using jQuery
// facebook.addClass("blue");
// console.log(facebook);

// // 2.6. Append the newly created element next to the the "Sony" <li> element
// // OPTION ONE
// // techCompanies.append(facebook)  // add items at the end

// // OPTION TWO
// let sony = $("#techCompanies :nth-child(10)");
// sony.after(facebook)
// console.log(sony);

// // OPTION THREE
// let sonyy = $("#techCompanies li").filter((index, element) => {
//   return $(element).text() === "Sony";
// });
// // console.log(sonyy);
// $(sonyy).after(facebook);

// // 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
// // display the result inside the "blueCompanies" div.
// let blueTech = $(".blue").length;
// console.log(blueTech);

// let blueCompaniesHolder = $("#blueCompanies p");
// blueCompaniesHolder.text('Blue companies size is: ' +blueTech )

/* #########################  QUESTION 3 ############################## */

//Question 3:
// A form with two text fields is provided under the section which says "For question 3". Write a
// jQuery code which takes the values of the two fields, checks if they are number values and
// calculate the sum and average of the two numbers.
// 3.1. Display the result on the console
// 3.2. Display the result underneath the form
// 3.3. If any of the numbers provided is not a number, display a message that says "Please
// enter numerical values only" underneath the form

// let firstInput = $("#first-value"); // input selection
// let secondInput = $("#second-value"); // input selection
// let sumAndAverage = $("#submitButton");
// let resultHolder = $("#sum");

// sumAndAverage.on("click", (ev) => {
//   ev.preventDefault(); // stop loading the page

//   let num1 = firstInput.val(); // get the value of the input
//   let num2 = secondInput.val(); // get the value of the input

//   console.log(num1);
//   console.log(num2);

//   if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
//     resultHolder.text(
//       "Please make sure both inputs are not empty and are numbers"
//     );
//     return;
//   } else {
//     let sum = Number(num1) + Number(num2);
//     let average = sum / 2;

//     resultHolder.text(`Sum of two numbers: ${sum}, Average : ${average}`);
//   }
// });

/* #########################  QUESTION 4 ############################## */

// Question 4:
// Create an HTML form which asks users to provide their First name, Last name and Email
// address. All the fields should be labeled as required. Once the user submits, write a JavaScript
// function that checks if all the fields are provided. If not, it should show an error message above
// the form.
// If the user provides all the values, hide the form input fields, and display all the values provided
// by the user on the browser.

let formHolder = $("#formHolder");

let responseMessage = $("#responseMessage");

let form = $("#form");

let fName = $("#fName");
let lName = $("#lName");
let email = $("#email");

let submitBtn = $("#submitBtn");

submitBtn.on("click", (event) => {
  event.preventDefault(); // dont refresh the page

  if (fName.val() === "" || lName.val() === "" || email.val() === "") {
    responseMessage.text("Please fill out the fields properly!");
  } else {
    responseMessage.html(
      `<h5>Registration Details:</h5>
      <P>First Name: ${fName.val()}<br>Last Name: ${lName.val()}<br>Email: ${email.val()}`
    );

    form.hide();
  }
});

// #######  question 5 is done separately ############

// #######  question 6  ############
// Question 6: on asynchronous JavaScript (promise)
// ● Visit the link https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time to find three quizzes. Please provide the output of the code for each quiz.
// Please do not work on the quizzes online, rather create HTML and JavaScript files by
// following the instructions below.

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject(); // error occures / failure
//   });
// }

// let promise = job();

// promise
//   .then(function () {
//     console.log("Success 1");
//   })

//   .then(function () {
//     console.log("Success 2");
//   })

//   .then(function () {
//     console.log("Success 3");
//   })

//   .catch(function () {
//     console.log("Error 1");
//     // error handling mechanism
//   })

//   .then(function () {
//     console.log("Success 4");
//   });
// // What is the output of the code above ?

// // #########################################

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data); // success

//     return job(false);
//   })

//   .catch(function (error) {
//     console.log(error); // error
//     return "Error caught"; //  Error caught and stop the
//   })

//   // unreachable
//   .then(function (data) {
//     console.log(data); // ? success

//     return job(true);
//   })

//   .catch(function (error) {
//     console.log(error); // unreachable
//   });
// // What is the output of the code above?

// // #########################################

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data); // success

    return job(true);
  })

  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat"; // jump to catch area
    }

    return job(true); // unreachable code
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log(error); // defeat

    return job(false);
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error); // error

    return "Error caught"; //pass this to the next .then
  })

  .then(function (data) {
    console.log(data); //error caught

    return new Error("test"); // pass this to the next .then
  })

  .then(function (data) {
    console.log("Success:", data.message);
  })

  .catch(function (data) {
    console.log("Error:", data.message);
  });

// // What is the output of the code above?

// // #########################################
