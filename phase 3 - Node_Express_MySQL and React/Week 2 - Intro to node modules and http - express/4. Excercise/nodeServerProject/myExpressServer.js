const express = require("express"); // its not core module so we have to install it

const path = require("path");
const mime = require("mime-types");
const rand = require("./randomNumber");

// Serve static files from the "static" directory
// app.use(express.static(path.join(__dirname, "static")));

// Uncomment the following block to use the random number functionality
/*
app.get('/random', (req, res) => {
    });
    */

// style.css   // .css    mimetype     text/css
// index.html  // .htmlmmmmmmmmmmmmm   text/html
// logo.png   //  .png                 image/png
// banner.jpg  // .jpg

// Fallback route to serve static files for other paths
const server = express();

server.use(function (req, res) {
  // static file serving....
  // const fileExtension = path.extname(req.url); // style.css  => .css
  let filePath = path.join(
    __dirname,
    "static/apple-html-css-replica/",
    req.url === "/" ? "index.html" : req.url
  );
  // no need of reading file

  const mimeType = mime.lookup(filePath);
  console.log(req.url);
  console.log(`mime type is>>> ${mimeType}`);

  res.sendFile(filePath);
});

server.listen(888, function () {
  console.log("Server listening on port 888");
});
