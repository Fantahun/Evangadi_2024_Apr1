const posts = [
  {
    id: 1,
    title: "SQL Server 2022",
    focus: "Database Administration",
    description:
      "Designed to equip students with the knowledge and skills necessary to manage and maintain SQL Server 2022 databases.",
    cost: "FREE",
    image:
      "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/sql.png",
  },
  {
    id: 2,
    title: "SharePoint 2019",
    focus: "SharePoint Development",
    description:
      "Focuses on providing comprehensive understanding and practical skills in SharePoint Development.",
    cost: "FREE",
    image:
      "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/sharepoint.png",
  },
  {
    id: 3,
    title: "MuleSoft 4",
    focus: "MuleSoft Development",
    description:
      "Aims to prepare participants for creating and integrating APIs and applications within the MuleSoft platform.",
    delivery: "Online",
    duration: "3 months",
    cost: "FREE",
    image:
      "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/mulesoft.png",
  },
  {
    id: 4,
    title: "Power BI Desktop",
    focus: "Power BI",
    description:
      "Focuses on empowering participants to analyze data, create insightful reports, and develop interactive dashboards.",
    delivery: "Online",
    duration: "3 months",
    cost: "FREE",
    image:
      "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/bi.png",
  },
  {
    id: 5,
    title: "Automated Testing",
    focus: "Software Testing",
    description:
      "Designed to prepare participants for the challenges of ensuring software quality and reliability.",
    delivery: "Online",
    duration: "3 months",
    cost: "FREE",
    image:
      "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/qa.png",
  },
  {
    id: 6,
    title: "Cloud Computing",
    focus: "AWS",
    description:
      "Crafted to train participant how to manage cloud infrastructure using Amazon Web Services (AWS).",
    delivery: "Online",
    duration: "3 months",
    cost: "FREE",
    image:
      "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/aws2.png",
  },
];

//TODO: ######## map Function
// Purpose: map creates a new array by applying a function to each element of the original array. It does not modify the original array.

const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
const squaredNumbers = numbers.map(function (number) {
  return number * number;
});

//squaredNumbers[1,2] this is gonna be holding items one by one when the map function run on every element

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
// Use Case: Use map when you want to transform each element of an array and produce a new array with the transformed values.

/////TODO:  map on the posts array
let postsMapped = posts.map((singlePost) => {
  console.log(singlePost);
  return singlePost;
});

// console.log(postsMapped);

//TODO: ##########  forEach Function
// Purpose: forEach executes a provided function once for each array element. It does not create a new array or return anything. It modifies the original array or performs side effects.

const numberss = [1, 2, 3, 4, 5];

// Using forEach to log each number to the console
numberss.forEach((number) => {
  console.log(number);
});

// Output:
// 1
// 2
// 3
// 4
// 5
// Use Case: Use forEach when you need to perform an action for each element of an array, such as logging values, updating elements in place;
