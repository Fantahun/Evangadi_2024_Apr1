const http = require("http"); //importing the http core module from node

const rand = require("./randomNumber"); // import our local module
const path = require("path"); // import path module
const fs = require("fs"); // import file system module
const mimeTypes = require("mime-types"); // mime types from other module via npm

/*NOTE: INSTALL "nodemon" globally for automatic server restart using  npm i -g nodemon  
and then run the code using  nodemon 'filename.js'  instead of  node 'filename.js'
*/

// ####for first request
// const server = http.createServer((request,response)=>{
//     response.write("Request received and processed") // first response test
//     response.end();
// });

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

/*
let aboutPagePath = path.join(__dirname,"static/apple-html-css-replica","about.html");
console.log("\npath of about.html is: " + aboutPagePath); 

const server = http.createServer((request,response)=>{
    
    // console.log(__dirname);
    // console.log(path.resolve());


    // read file content of the specified absolute path to send it to the browser
    //        - for this we have to import 'fs' module
    
    fs.readFile(aboutPagePath,(error,data)=>{
        if(error){
            console.log("Error Occurred.."+error);
            response.end();
        }
        console.log("#### File red succesfully!");
        // response.writeHead(200,{"Content-Type":"text/html"})  //setting both status code and headers in one go. or use the below 2 lines of code
        response.statusCode=200;  // no error and we served it succesfully
        response.setHeader("Content-Type","text/html") // tell the browser the file is html
        response.write(data)
        response.end();
    });
});
*/

// ##### serving all static files respnse - based on user request #######

/* first get the about.html page file path  (for this we have to import 'path' module)
    - path.resolve() and __dirname provides absolute path of folders

    __dirname  => for this where we run the server doesnt matter
    path.resolve() = > for this it will take the folder where the server run is triggered
*/

const server = http.createServer((request, response) => {
  //get absolute path of the requests for static files
  const replicaRequestPath = path.join(
    __dirname,
    "static/apple-html-css-replica",
    request.url === "/" ? "index.html" : request.url
  );

  // Determine the file extension and MIME type with the below two codes
  const extname = path.extname(replicaRequestPath);

  const contentType = mimeTypes.lookup(extname); // using the installed module -- we should comment it if we use the imported module

  // manual way of managing mimes, time consuming n not adviced
  //    better to use other modules...   npm i -s mime-types  => if we use that better commenting this one

  // const manualMimeTypes = {
  //     '.html': 'text/html',
  //     '.css': 'text/css',
  //     '.js': 'application/javascript',
  //     '.json': 'application/json',
  //     '.png': 'image/png',
  //     '.jpg': 'image/jpeg',
  //     '.gif': 'image/gif',
  //     '.svg': 'image/svg+xml',
  //     '.pdf': 'application/pdf',
  //     // Add more mappings as needed
  // };

  // const contentType = manualMimeTypes[extname];  // when using the manually tipped mymeType

  fs.readFile(replicaRequestPath, (error, data) => {
    if (error) {
      console.log("Error occured when reading file: ", error);
      response.end();
      return;
    }
    console.log(request.url + " #### File red succesfully!");
    response.writeHead(200, { "Content-Type": contentType });
    console.log(`>>>> content type is: ${contentType}\n`);

    response.write(data);
    response.end();
  });
});

// start the server and make it ready to handle incoming requests.
server.listen(1234, () => {
  console.log("Server running and listening on port 1234");
});
