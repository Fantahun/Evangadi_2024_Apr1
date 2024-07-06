// // Question 1
// 1.1 Select the element with an id of "sample1".
let sample1 = document.getElementById("sample1");
let sample2 = document.querySelector("#sample1");
console.log(sample1);
console.log(sample2);
console.log(sample1.innerText); // inner text  VS text content

// // question 2

// // 2.1 Select the element with an ID of "techCompanies" and display it on your  console. (Do not use "querySelector" for this question)

let tech_companies = document.getElementById("techCompanies");
console.log(tech_companies);

//  2.2 Use "querySelector" to select the element with an ID of "techCompanies" and  display it on your console.
let techCompanies2 = document.querySelector("#techCompanies");
console.log(techCompanies2);
console.log(techCompanies2);

//  2.3 How many tech companies are listed under the ul element with an id of
// "techCompanies"? Use "querySelectorAll" to count the total.

let techCompaniesItems = document.querySelectorAll("#techCompanies li");
console.log(techCompaniesItems);
console.log(techCompaniesItems.length);

// // 2.4 Select all elements with a class name of "red" and display them on the console.
// // Use both "querySelectorAll" and "getElementByClass"
let reds = document.querySelectorAll(".red");
let reds2 = document.getElementsByClassName("red");
console.log(reds2);

// console.log(reds);
// for(let i=0;i<reds.length;i++){
//   console.log(reds[i]);
// }

// reds.forEach((el) => {
//   console.log(el);
// });

// // 2.5 Create a new li HTML element with a content of "Facebook" and display it on  console
let fb = document.createElement("li");
fb.textContent = "facebook";

// 2.6 Give the newly created element a class of "blue" using JavaScript
fb.classList.add("blue");

// 2.7 Append the newly created element next to the the "Sony" li element
let techCompanies = document.querySelector("#techCompanies");

/// OPTION 1: TO INSERT ELEMENT USING nextSibling logic ...
let sony = techCompanies.children[9]; // sony is at 9th index (10th element inside the UL tag)
// inserting it below sony(inserting it before the next element that comes after sony)
techCompanies.insertBefore(fb, sony.nextElementSibling);

// OPTION 2 : Get techCompanies (ul) element and append it at the end below sony
techCompanies.appendChild(fb); //added below sony at the end since sony was the last item given

// // 2.8 How many of the tech companies are labeled blue?
// //Find the result using JavaScript and display the result inside the "blueCompanies" div.
let blues = document.querySelectorAll(".blue");
console.log(blues);
// console.log(blues.length);

let blueCompanies = document.getElementById("blueCompanies");
blueCompanies.innerText = "the number of blue companies: " + blues.length;

blues.forEach((el) => {
  blueCompanies.appendChild(el);
  console.log(el);
});

let blueCompaniess = document.querySelectorAll("#blueCompanies li");
blueCompaniess.forEach((el) => {
  el.style.width = "380px";
  el.style.backgroundColor = "#111";
  el.style.color = "white";
  el.style.listStyleType = "none";
  el.style.borderBottom = "1px solid white";
  el.style.padding = "10px";
});

// // Question 3:
// // Change the background color of the page to light-blue (#99ecff) when clicked on the text
// // that says "Yes". If there is a background color set already, change it to none when clicked  on "No"
// // Hint: First, write two functions to alter the backgroundColor of the page. One to add a  background color, another to remove. Then, select the "yesBackground" or "noBackground" element and bind the selected element with the click event. Finally, attach the function you wrote to alter the background color when the respective element  is clicked on.

// // below code will print on console log the backgroundColor the one we set inline bg on html side
let bodyBG = document.body.style.backgroundColor;
console.log(bodyBG);

// // this will get the background of the body regardless (if its set inline or in css file we are okay), it will fetch the latest background color of body after things are rendered fully

let bodyBG2 = window.getComputedStyle(document.body).backgroundColor;
console.log(bodyBG2);

function setBackground() {
  document.body.style.backgroundColor = "#99ecff";
}

function removeBackground() {
  document.body.style.backgroundColor = "";
}

// //  we can use onClick too on HTML side but not ideal
let yesBackground = document.getElementById("yesBackground");
yesBackground.addEventListener("click", setBackground);
let noBackground = document.getElementById("noBackground");
noBackground.addEventListener("click", removeBackground);

// // Question 4:
// // A form with two text fields is provided under the section which says "For question 4".
// // Write a JavaScript code which takes the values of the two fields, checks if they are  number values and calculate the sum of the two numbers.
// // 1. Display the result on the console
// // 2. Display the result underneath the form
// // 3. If any of the numbers provided is not a number, display a message that says
// // "Please enter numerical values only" underneath the form

let firstInput = document.getElementById("firstInput");
// console.log((firstInput));
let secondInput = document.getElementById("secondInput");
// console.log((secondInput));
let resultHolder = document.getElementById("sum");
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // dont refresh the page
  let num1 = firstInput.value.trim(); //remove spaces if any, from first input
  let num2 = secondInput.value.trim(); //remove spaces if any, from first input

  if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == "") {
    resultHolder.textContent =
      "Please enter numerical values only and values must not be empty";
    num1.value = "";
    num2.value = "";
    console.log(resultHolder);
    return;
  } else {
    let total = Number(num1) + Number(num2);
    resultHolder.innerText = "The sum is: " + total;
    console.log(total);
  }
});
