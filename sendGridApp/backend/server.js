const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const sgMail = require("@sendgrid/mail");
app.get("/", (req, res) => {
  res.send("its working");
});
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: process.env.RECIPIENT,
  from: process.env.SENDER,
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
app.listen(3005, () => {
  console.log("listening on port 3001");
});
