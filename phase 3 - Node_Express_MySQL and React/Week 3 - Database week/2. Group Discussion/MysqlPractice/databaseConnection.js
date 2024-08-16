const mySql = require('mysql2');

// provide connection details
function connectDB(){
    const dbConnection = mySql.createConnection(
        {
            host:"localhost", //127.0.0.1
            database:"mydb2",
            user:"myDBuser2",
            password:"finto"
        }
    )
    
    //connect to the db
    dbConnection.connect(function(error){
        if(error){
            console.log("error occured while conecting: " + error);
        }
        else{
            console.log("db connection made successfully!");
        }
    })
}


//###############  question 2

// prepare the queries to create all the tables

//crate products table
// Products		
// product_id (PK)	product_url	product_name

// create the query

let createProductTable = `CREATE TABLE Products( product_id int AUTO_INCREMENT not null, product_url varchar(255) not null, product_name varchar(255) not null, PRIMARY KEY (product_id) )`;

