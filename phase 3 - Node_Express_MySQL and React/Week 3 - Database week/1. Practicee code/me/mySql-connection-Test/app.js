const express = require('express');
const mysql = require('mysql2');

const app = express();

app.get('/',(req,res)=>{
    res.send("hello, happy coding.");
    res.end();
});

// database connection detail
const db_conn = mysql.createConnection(
    {
        user:'finto',
        password:'finto',
        host:'localhost',// we can use 127.0.0.1 too
        database:'mysqlnodepractice',

    }
);

// connect to db
db_conn.connect((err)=>{
    err?console.log(`error occured: ${err}`):console.log("connected :)");;
});


// select statement query and server request for select test
app.get('/select',(req,res)=>{
    
    let selectTest = 'select * from test;'; //select statement

    db_conn.query(selectTest,(err,querResult,fields)=>{
        if(err){
            console.log("error occured " + err);
        }
        console.log(querResult[0].fullName);
        console.log(fields);
        res.end(JSON.stringify(querResult)); // send the query result as a string since the response is object
    })

})



// start the server and listen...
app.listen(777,()=>{
    console.log("Selam, I'm listening on port 777");
})