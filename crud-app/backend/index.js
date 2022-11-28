const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'crud-app'
});

app.get("/", (req,res)=>{
  const command1 = "INSERT INTO movie_reviews (name,review) VALUES ('black panther','decent movie... could work on plot a little better');";
  db.query(command1,(err,result) =>{
    res.send("movie added!");
  });
  res.send("nodemon is running");
});

app.listen(3001,(req,res)=>{
  console.log("listening!");
});