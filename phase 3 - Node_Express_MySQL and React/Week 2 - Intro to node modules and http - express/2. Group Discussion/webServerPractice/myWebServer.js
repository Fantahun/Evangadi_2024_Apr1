// http core module
const http = require("http"); // importing http core module
const random = require("./randomNumber"); //random number imported

const pathModule = require("path"); // imported path module    to get file pathes
const fsModule = require("fs"); // implrted file system    to read and write ....

// //$$$$  creating server for first request
// const server = http.createServer((request, response) => {
//   response.write("Request received and processed!");
//   response.end(); // eyetebeke endaykoy maregiya
// });

// ###  related to random number
// const server = http.createServer((request, response) => {

//   let randNumber = random.rand(); //generate random number

//     response.write(randNumber.toString());  // random number accepted and converted to string
//     response.end(); // eyetebeke endaykoy maregiya
//   });

// ####  related to about.html response
// const server = http.createServer((request, response) => {
//   //we have to get the absolute path of the about.html ??
//   // how to get the path??  -> path module import
//   // get path
//   let aboutPagePath = pathModule.join(
//     __dirname,
//     "static/apple-html-css-replica",
//     "about.html"
//   );
//   console.log(aboutPagePath);

//   // C:\Users\F\Desktop\Evangadi_2024_A
//   // pr1\phase 3 - Node_Express_MySQL and React\Week 2 - Intro to node modules and http - express\2. Group Discussion\webServerPractice\static\apple-html-css-replica\about.html

//   // read the content of about.html based on the above path  ?? how to read ???  -> fs module
//   fsModule.readFile(aboutPagePath, (error, data) => {
//     if (error) {
//       console.log("error occured: " + error);
//     } else {
//       response.write(data); // pass about.html content to browser
//       response.end(); // eyetebeke endaykoy maregiya
//     }
//   });
// });

//// ### related to full static files.....
const server = http.createServer((request, response) => {
  //we have to get the absolute path of the about.html ??
  // how to get the path??  -> path module import
  // get path
  let aboutPagePath = pathModule.join(
    __dirname,
    "static/apple-html-css-replica",
    "about.html"
  );
  console.log(aboutPagePath);

  //    /    index.html
  //  file extension
  //  content type about the files

  // read the content of about.html based on the above path  ?? how to read ???  -> fs module
  fsModule.readFile(aboutPagePath, (error, data) => {
    if (error) {
      console.log("error occured: " + error);
    } else {
      response.write(data); // pass about.html content to browser
      response.end(); // eyetebeke endaykoy maregiya
    }
  });
});

server.listen(1234, () => {
  console.log("server is listening on port 1234");
});

// server = request accept -> response provide

// localhost:1234/
// 127.0.0.1

// npm  node package manager   - manage packages

// npm commands

// initialize node project

// npm init --- prompt  we have to hit Enter key
// npm init -y  -- no prompt

// package install        npm install express
