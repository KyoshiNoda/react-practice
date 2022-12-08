const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crud-app",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get',(req,res) =>{
  const select = "SELECT * FROM movie_reviews";
  db.query(select,(err,result) =>{
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const name = req.body.movieName;
  const review = req.body.movieReview;
  const insert ="INSERT INTO movie_reviews (name, review) VALUES (?,?)";
  db.query(insert, [name, review], (err, result) => {
    console.log(result);
  });
});
app.listen(3001, () => {
  console.log("running on port 3001");
});
