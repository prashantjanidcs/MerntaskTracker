require("dotenv").config();
const express = require("express");
const TaskRouter = require("./Routes/TaskRoutes");
const app = express();
const port = 3300;
const mongoose = require("mongoose");

mongoose.connect(process.env.URL).then(()=> console.log("Mongo Connected!!"));
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","GET,POST");
  res.setHeader("Access-Control-Allow-Headers","Content-Type");
  next();
});
app.use("/Task",TaskRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port);
