"use strict"


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var router = express.Router();

var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", 
    "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    
  //and remove cacheing so we get the most recent comments
  res.setHeader("Cache-Control", "no-cache");
  next();
});

router.get("/", (req, res) => {
  res.json({ message: "API Initialized!" });
});

app.use("/api", router);

// react entry point
app.use("/", express.static(path.resolve(__dirname, "./client/build/")));
app.listen(port, function() {
  console.log("api running on port " + port);
});
  
