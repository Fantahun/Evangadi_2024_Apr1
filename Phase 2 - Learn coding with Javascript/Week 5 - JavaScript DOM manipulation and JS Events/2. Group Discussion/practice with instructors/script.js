// question 1
let backgrounds = {
  blue: "#5ab5ff",
  green: "#03c4a1",
  purple: "#c300ff",
  yellow: "#FFEB3B",
  black: "#000",
  white: "#fff",
};

let changeBgHolder = document.getElementById("changBgRadiosHolder");

changeBgHolder.addEventListener("change", (event) => {
  event.preventDefault();
  document.body.style.backgroundColor = backgrounds[`${event.target.id}`];
  if (event.target.id == "black") {
    document.body.style.color = "white";
  }
  if (event.target.id == "white") {
    document.body.style.color = "black";
  }
});

//TODO:RECTIFY THIS CODE BELOW
// let changeBgHolder2 = document.querySelectorAll(".changBgRadiosHolder input");

// changeBgHolder2.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     document.body.style.backgroundColor = backgrounds[`${event.target.id}`];

//   });
// });

// question 2
let add = document.getElementById("add");
let counter = document.getElementById("counter");
let sub = document.getElementById("sub");

let count = 0;
add.addEventListener("click", () => {
  count < 20 ? (count += 1) : (count = 20);
  counter.innerText = count;
});

sub.addEventListener("click", () => {
  count == 0 ? (count = 0) : (count -= 1);
  counter.innerText = count;
});

// question 3
let formHolder = document.getElementById("formHolder");
console.log(formHolder);
let username = document.getElementById("username");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submitBtn");

// submitBtn.onsubmit = (event) => {
//   event.preventDefault();
//   if (username.value == "" || password.value == "") {
//     alert("please fill all the fields");
//   } else {
//     alert("Form submitted");
//     formHolder.style.display = "none";
//   }
// };

submitBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (username.value == "" || password.value == "") {
    if (username.value == "") {
      username.style.backgroundColor = "pink";
    }
    if (password.value == "") {
      password.style.backgroundColor = "pink";
    }
  } else {
    console.log(formHolder);
    formHolder.style.display = "none";
    alert("Form submitted");
  }
});

// step up on submit , Change the background of the input boxes to pink if a user tries to
// submit empty form for each input box and if all the values are all fulfilled show a message saying
// "Form submitted" and hide the form upon displaying message.
