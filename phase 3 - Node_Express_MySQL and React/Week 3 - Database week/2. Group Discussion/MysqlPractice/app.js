const mySql = require("mysql2");

// provide connection details

const dbConnection = mySql.createConnection({
  host: "localhost", //127.0.0.1
  database: "mydb2",
  user: "myDBuser2",
  password: "finto",
});

//connect to the db
dbConnection.connect(function (error) {
  if (error) {
    console.log("error occured while conecting: " + error);
  } else {
    console.log("db connection made successfully!");
  }
});


