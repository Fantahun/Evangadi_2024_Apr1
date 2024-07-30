const express = require("express"); //import express for http request and response handling
const rand = require("./randomNumber"); // import our local module
const path = require("path"); // import path module
const fs = require("fs"); // import file system module

/*NOTE: INSTALL "nodemon" globally for automatic server restart using  npm i -g nodemon  
and then run the code using  nodemon 'filename.js'  instead of  node 'filename.js'
*/

const server = express();

//####for first request -  simple serving

    // server.get('/',(request,response)=>{
    //      response.send("Request received and processed") // first response test
    // })

// #####  for random number respnse   #######

// server.get('/',(request,response)=>{
//     let generatedNumber = rand.random();
//     response.statusCode=200;
//     response.send(generatedNumber.toString())  // send to client the generated random number   or use  `${generatedNumber}` to pass it without conversion
// })

// #####for about page respnse #############

// Middleware to serve static files // this will allow accessing static files - by default its not permitted
// server.use(express.static(path.join(__dirname, "static")));  // we can use this or the below

// server.use(express.static("static"));

// Route to serve about.html for the root URL "/"
// server.get("/", (request, response) => {

//     const filePath = path.join(
//       __dirname,
//       "static",
//       "apple-html-css-replica",
//       "about.html"
//     ); // file path of about.html
//     // response.statusCode=200;
//   response.sendFile(filePath);
// });

// ##### serving all static files respnse - based on user request #######

// server.use((request, response) => {
//   // static file serving....
//   /*   >>>>  in Express.js, setting the Content-Type header manually is not always necessary because Express will automatically set the appropriate Content-Type based on the file being served.

//  >>>>> This means we don't need to manually manage MIME types or file extensions for the majority of static file serving tasks.
// */

//   const filePath = path.join(
//     __dirname,
//     "static/apple-html-css-replica",
//     request.url === "/" ? "index.html" : request.url
//   ); // we get the requested url and serve it by taking absolute path of it. if the request is  /  we serve index.html since its the root

//   response.sendFile(filePath); // send the file to browser
// });



// start the server and make it ready to handle incoming requests.
server.listen(1234, () => {
  console.log("Server listening on port 1234");
});
