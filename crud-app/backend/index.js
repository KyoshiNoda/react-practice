const express = require('express');
const app = express();

app.listen(3001,(req,res)=>{
  console.log("listening!");
});
app.get("/", (req,res)=>{
  res.send("nodemon is running");
})

