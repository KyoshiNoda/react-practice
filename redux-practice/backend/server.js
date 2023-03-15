const express = require('express');
const app = express();
const PORT = 3001;
app.listen(PORT,() =>{
  console.log(`listening on ${PORT}`);
});

app.get('/',(req,res) =>{
  res.send(`Hello on port ${PORT}`)
})