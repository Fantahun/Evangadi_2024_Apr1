// npm init -y
// npm i mysql2 --save

const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//TODO: provide connection details
const dbConnection = mysql.createConnection({
  host: "localhost", // we can use 127.0.0.1 too
  database: "myDB",
  user: "myDBuser",
  password: "finto",
});

//TODO: try to connect to the database
dbConnection.connect((err) => {
  if (err) {
    console.log("error occured: " + err);
  } else {
    console.log("Database Connection made Succesfully");
  }
});

// ################################################
// ################## QUESTON 2 ###################
// ################################################

// npm i express --save
// write the queries   (PK vs FK  --- and on delete time)

//TODO:  Products table
// product_id (PK)	product_url	product_name

const createProductTable = `
create table IF NOT EXISTS Products 
(
    product_id int auto_Increment,
    product_url varchar(100) not null,
    product_name varchar(100) not null,

    primary Key(product_id)
)`;

//TODO:  ProductDescription table
// description_id(PK)	product_id(FK)	product_brief_description	product_description 	product_img	 product_link

const createProductDescriptionTable = `
create table IF NOT EXISTS ProductDescription 
(
    description_id int auto_increment not null,
    product_id int not null,
    product_brief_description text not null,
    product_description  varchar(255) not null,
    product_img	 varchar(255) not null,
    product_link varchar(255) not null,

    primary key (description_id),
    foreign key (product_id) references Products (product_id)

)`;

//TODO:  ProductPrice table
// price_id(PK)	product_id(FK)	starting_price	price_range

// ??? DECIMAL(10, 2), // which means up to 8 digits before the decimal point and 2 digits after.

const createProductPriceTable = `
create table if not EXISTS ProductPrice 
( 
    price_id int auto_increment not null, 
    product_id int not null, starting_price DECIMAL(10, 2) not null, 
    price_range varchar(255) not null, 
    
    primary key(price_id), 
    foreign key(product_id) REFERENCES products(product_id) 
  
 )`;

//TODO:  User table
// user_id(PK)	User_name	User_password
const createUserTable = `
create table if NOT EXISTS User
(
    user_id int auto_increment not null,
    User_name	varchar(50),
    User_password varchar(50),

    primary key (user_id)
)`;

//TODO:  Orders table
// order_id(PK)	ProductId (FK)	user_id(FK)
const createOrdersTable = `
create table if NOT EXISTS Orders
(

  order_id int not null auto_increment,
  ProductId int not null,
  user_id int not null,

  primary key(order_id),
  foreign key(ProductId) REFERENCES products(product_id),
  foreign key(user_id) REFERENCES user(user_id)

  )`;

//#######   express side ########

//TODO: OPTION1 👇 handle the /install  request concurrently => all the tables to be created on this request
app.get("/install", (req, res) => {
  //create products table
  dbConnection.query(createProductTable, (err) => {
    if (err) {
      console.log("!!! Error while creating products table: " + err);
    } else {
      console.log(">>> Products table created succesfully");
      // res.send("Products table created succesfully");
      // res.end();
    }
  });

  //create product description table
  dbConnection.query(createProductDescriptionTable, (err) => {
    if (err) {
      console.log("!!! Error while creating product Description table: " + err);
    } else {
      console.log(">>> product Description table created succesfully");
      // res.send("product Description table created succesfully");
      // res.end();
    }
  });

  //create product price table
  dbConnection.query(createProductPriceTable, (err) => {
    if (err) {
      console.log("!!! Error while creating product Price table: " + err);
    } else {
      console.log(">>> product Price table created succesfully");
      // res.send("product Price table created succesfully");
      // res.end();
    }
  });

  //create user table
  dbConnection.query(createUserTable, (err) => {
    if (err) {
      console.log("!!! Error while creating user table: " + err);
    } else {
      console.log(">>> user table created succesfully");
      // res.send("user table created succesfully");
      // res.end();
    }
  });

  //create orders table
  dbConnection.query(createOrdersTable, (err) => {
    if (err) {
      console.log("!!! Error while creating orders table: " + err);
    } else {
      console.log(">>> orders table created succesfully");
      // res.send("orders table created succesfully");
    }
  });
  res.end("tables created succesfully!");
});

//TODO: OPTION2 👇 using async await for better error handling, sequential execution for dependent tables and acurate response

// let dbConnectionPromise = dbConnection.promise(); // if we want to use promise for the queries

// app.get("/install", async (req, res) => {
//   try {
//     await dbConnectionPromise.query(createProductTable);
//     console.log(">>> Products table created successfully");

//     await dbConnectionPromise.query(createProductDescriptionTable);
//     console.log(">>> Product Description table created successfully");

//     await dbConnectionPromise.query(createProductPriceTable);
//     console.log(">>> Product Price table created successfully");

//     await dbConnectionPromise.query(createUserTable);
//     console.log(">>> User table created successfully");

//     await dbConnectionPromise.query(createOrdersTable);
//     console.log(">>> Orders table created successfully");

//     res.send("All tables created successfully!");
//   } catch (err) {
//     console.log("!!! Error creating tables: " + JSON.stringify(err.message));
//     res.status(500).send("Error creating tables");
//   }
// });

// Sequential Execution: Ensures that each query completes before the next one starts, which is crucial for dependent tables.
// Proper Error Handling: If any query fails, the process stops, and the client is notified of the specific error.
// Accurate Response: The response is only sent after all tables are successfully created, giving accurate feedback to the client.
// Using async/await is generally cleaner and more readable, especially for handling multiple asynchronous operations in sequence.

// ################################################
// ################## QUESTON 3 ###################
// ################################################

//TODO: STARTS HERE
//  manage the  /add-product  or  /addiphone  url   for product insertion using express
// install body-parser to extract data from forms on submit     npm i body-parser --save
// use body parser in middleware app.use
// extract request body data
// write sql query to insert and put the request body values in the Values part properly
//send the query to mysql for insertion and check if no error occured
//TODO: ENDS HERE

//NOTE: the below code manages request type of forms which is   Content-Type: application/x-www-form-urlencoded  (check dev tools request header  RAW part)

//This middleware parses the incoming request body and makes the form data available in req.body.
app.use(
  bodyParser.urlencoded({
    // why???
    extended: true,
  })
);

app.post("/add-product", (req, res) => {
  let prodName = req.body.product_name; // get the input value
  let prodURL = req.body.product_url; // get the input value

  console.log("product name> " + prodName); // to check the submitted data
  console.log("product URL> " + prodURL); // to check the submitted data

  // our query to insert products based on the passed input filed values
  const addProductQuery = `INSERT INTO products(product_name,product_url)
  VALUES("${prodName}","${prodURL}")`;

  // sending the query for mysql to insert it to the table
  dbConnection.query(addProductQuery, (err) => {
    if (err) {
      console.log("Error Occured while inserting data: " + err);
      res.send("Error Occured while inserting data: ");
      res.end();
    } else {
      console.log("Product inserted succesfully");
      res.send("Product inserted succesfully");
      res.end();
    }
  });
});

// server listens on port 777
app.listen(777, () => {
  console.log("Server listening on port 777");
});
