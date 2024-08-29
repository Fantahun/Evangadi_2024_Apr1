const express = require("express");
const app = express();
const PORT = 3007;
const mysql = require("mysql2");

const cors = require('cors');


app.use(cors()); // Allows all origins
// OR specify allowed origin
// app.use(cors({ origin: 'https://your-frontend-domain.com' }));



// MySQL connection details
const dbConnection = mysql.createConnection({
  user: "finto",
  host: "localhost",
  password: "finto",
  database: "mydb",
});

dbConnection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// query to get the products
let get_products_query = `SELECT 
    p.product_id,     
    p.product_url, 
    p.product_name,
    pp.starting_price,
    pp.price_range, 
    pd.product_img,
    pd.product_link,
    pd.product_description,
    pd.product_brief_description
FROM 
    products p
INNER JOIN 
    productprice pp 
    ON p.product_id = pp.product_id
INNER JOIN 
    productdescription pd 
    ON p.product_id = pd.product_id; `;


// API endpoint to get iPhone products
app.get("/iphones", (req, res) => {
  console.log("incoming request...");
 
  dbConnection.query(get_products_query, (error, results) => {
    // if (error) {
    //   return res.status(500).json({ error: error.message });
    // }
    res.send({ products: results });
    // console.log(res);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});