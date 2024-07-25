// console.log("connected");
let generatedNumber = $("#generatedNumber");

let generate = $("#generate");

let generateNumbers = function () {
  let minimum = $("#minimum").val(); //''
  let maximum = $("#maximum").val(); // ''

  let min = Number(minimum);
  let max = Number(maximum);

  console.log(minimum);
  console.log(maximum);

  //   let generatedNumber = minimum + Math.random() * (maximum - minimum);

  let genNumber = min + Math.random() * (max - min);

  let rounded = Math.round(genNumber);
  let first, second, third;
  first = 5;
  second = rounded;
  third = rounded + 1;
  console.log(first);
  console.log(second);
  console.log(third);

  generatedNumber.text(rounded);

  console.log(rounded);
};

generate.on("click", generateNumbers);
