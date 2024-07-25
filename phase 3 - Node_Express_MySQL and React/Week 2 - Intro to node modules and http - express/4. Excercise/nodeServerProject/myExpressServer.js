const express = require("express");
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

// Fallback route to serve static files for other paths
app.use((req, res, next) => {
  // Random number request
  //   const randNum = rand();
  //   res.send(JSON.stringify(randNum));
  //random number request end here

  // static file serving....
  const fileExtension = path.extname(req.url); // style.css  => .css
  const mimeType = mime.lookup(fileExtension); // determine MIME type, mime.lookup('.css') would return text/css.
  res.sendFile(
    path.join(__dirname, "static", req.url === "/" ? "index.html" : req.url),
    { headers: { "Content-Type": mimeType } },
    (err) => {
      if (err) {
        if (err.status === 404) {
          res.status(404).send("Not Found");
        } else {
          res.status(500).send("Internal Server Error");
        }
      }
    }
  );
});

app.listen(1234, () => {
  console.log("Server listening on port 1234");
});
