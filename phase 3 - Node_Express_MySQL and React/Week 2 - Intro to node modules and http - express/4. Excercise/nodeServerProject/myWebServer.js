const http = require("http"); //importing the http core module from node
// const rand = require("./randomNumber"); // import our local module
const path = require("path"); // import path module
const fs = require("fs"); // import file system module
// const mimeTypes = require("mime-types"); // mime types from other module via npm

/*NOTE: INSTALL "nodemon" globally for automatic server restart using  npm i -g nodemon  
and then run the code using  nodemon 'filename.js'  instead of  node 'filename.js'
*/

// ####for first request
// const server = http.createServer(function (req, res) {
//   // respond a welcome  message to a request

//   res.write("welcome dear user");
//   res.end();
// }); // request accept  // proper respose     // listen

// server.listen(777); //localhost:777

// #####for random number respnse
// const server = http.createServer((request,response)=>{
//     response.write(rand.random().toString()) // respond random number by converting it to string
//     response.end();
// });

// #####for about page respnse ######################

/* first get the about.html page file path  (for this we have to import 'path' module)
    - path.resolve() and __dirname provides absolute path of folders

    __dirname  => for this where we run the server doesnt matter
    path.resolve() = > for this it will take the folder where the server run is triggered
*/

// let aboutPagePath = (__dirname+"/static/apple-html-css-replica/about.html");// manual
// let aboutPagePath = path.join(
//   __dirname,
//   "/static/apple-html-css-replica",
//   "about.html"
// );

// // console.log(__dirname);
// console.log("\npath of about.html is: " + aboutPagePath);

// const server = http.createServer(function (request, response) {
//   // code logic  to serve about.html????

//   // ye about.html path
//   let aboutPagePath = path.join(
//     __dirname,
//     "static/apple-html-css-replica",
//     "about.html"
//   ); // get the path of the file
//   // console.log(aboutPagePath);

//   // contentun manbeb   <doc...... </html>
//   fs.readFile(
//     aboutPagePath,

//     function (error, data) {
//       if (error) {
//         console.log("error happened: " + error);
//       }

//       // send/write the content
//       response.write(data);
//       response.end();
//     }
//   );
//   // const extname = path.extname(aboutPagePath); // .html
//   // // const contentType = mimeTypes.lookup(extname);// text/html
//   // response.write(data);
//   // response.end();
// });
// read file content of the specified absolute path to send it to the browser
//        - for this we have to import 'fs' module

// fs.readFile(aboutPagePath, (error, data) => fun(error, data, req, res));

// ##### serving all static files respnse - based on user request #######

/* first get the about.html page file path  (for this we have to import 'path' module)
    - path.resolve() and __dirname provides absolute path of folders

    __dirname  => for this where we run the server doesnt matter
    path.resolve() = > for this it will take the folder where the server run is triggered
*/

const server = http.createServer(
  
  
  (request, response) => {
  //get absolute path of the requests for static files
  const replicaRequestPath = path.join(
    __dirname, "static/apple-html-css-replica/",request.url === "/" ? "index.html" : request.url
  );

  fs.readFile(replicaRequestPath, function (error, data) {
    response.statusCode = 200; // success status
    response.write(data);
    response.end();
  });
});

// start the server and make it ready to handle incoming requests.
server.listen(777);
