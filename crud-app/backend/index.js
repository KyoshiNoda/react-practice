const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'crud-app'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('api/insert', (res,req) =>{
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const insert = "INSERT INTO movie_reviews (name,review) VALUES (?,?);";
  db.query(insert,[movieName,movieReview],(err,result)=>{
    console.log(err);
  })
});

app.listen(3001,(req,res)=>{
  console.log("listening!");
});