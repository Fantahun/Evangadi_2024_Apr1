// npm init -y
// npm i mysql2 --save

const mysql = require("mysql2");

// provide connection details
const dbConnection = mysql.createConnection({
  database: "myDB",
  user: "myDBuser",
  password: "fintop",
});

//try to connect to the database
dbConnection.connect((err) => {
  if (err) {
    console.log("error occured: " + err);
  } else {
    console.log("Connected Succesfully");
  }
});

// ################## QUESTON 2 ###################
// npm i express --save
// write the queries

// Products table
// product_id (PK)	product_url	product_name

const createProductTable = `create table IF NOT EXISTS Products (
    product_id int auto_Increment,
    product_url varchar(100) not null,
    product_name varchar(100) not null,
    primary Key(product_id)
)`;

// ProductDescription table
// description_id(PK)	product_id(FK)	product_brief_description	product_description 	product_img	 product_link

const createProductDescriptionTable = `create table IF NOT EXISTS ProductDescription (
    description_id int auto_increment not null,
    product_id int not null,
    product_brief_description text not null,
    product_description  varchar(255) not null,
    product_img	 varchar(255) not null,
    product_link varchar(255) not null,
    primary key (description_id),
    foreign key (product_id) references Products (product_id)

)`;

// ProductPrice table
// price_id(PK)	product_id(FK)	starting_price	price_range

// Orders table
// order_id(PK)	ProductId (FK)	user_id(FK)

// User table
// user_id(PK)	User_name	User_password

// handle the /install

// ################## QUESTON 3 ###################
