const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require('mysql');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'account-system'
});

app.listen(3001,()=>{
    console.log('listening on port 3001');
});

app.get('/',(req,res) =>{
    res.send("hello this is working with nodemon");
});
app.get('/api/db',(req,res) =>{
    const sqlInsert = "SELECT * FROM `account-system`.accounts;"
    db.query(sqlInsert,(err,result) =>{
        res.send(result);
    })
})

app.post('/api/newUser',(req,res) =>{
    const email = req.body.userEmail;
    const password = req.body.userPassword;
    const apiKey = req.body.userApiKey;
    const steamURL = req.body.userSteamURL;
    const sqlInsert = `INSERT INTO accounts (email,password,steamURL,apiKey)
    VALUES (?,?,?,?);`;
    db.query(sqlInsert,[email,password,steamURL,apiKey], (err,result) =>{
       if(result === undefined){
        console.log("didn't load");
       }
    });
});

app.post('/api/checkUser',(req,res) =>{
    const email = req.body.userEmail;
    const password = req.body.userPassword;
    const sqlCheck = "SELECT * FROM `account-system`.accounts WHERE email = ? AND password = ?;";
    db.query(sqlCheck,[email,password],(err,result) =>{
        if(result.length > 0){
            res.send("you have an account");
            console.log(result);
        }
        else{
            res.send("account missing");
            console.log(result);
        }
    });
});