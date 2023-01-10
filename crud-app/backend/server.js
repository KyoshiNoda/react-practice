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

app.get('/', (req,res) =>{
  res.send("Hello");
})


app.get('/api/get',(req,res) =>{
  const sqlSelect = "SELECT * FROM movie_reviews";
  db.query(sqlSelect,(err,result) =>{
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const name = req.body.movieName;
  const review = req.body.movieReview;
  const sqlInsert ="INSERT INTO movie_reviews (name, review) VALUES (?,?)";
  db.query(sqlInsert, [name, review], (err, result) => {
    console.log(result);
  });
});

app.delete('/api/delete/:movieName',(req,res)=>{
  const name = req.params.movieName; 
  const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";
  db.query(sqlDelete,name,(err,result)=>{
    if(err){
      console.log(err); 
    }
  });
});
app.get('/api/dylan',(req,res) =>{
  res.send("hello dylan sucks")
})
app.listen(3001, () => {
  console.log("running on port 3001");
});
