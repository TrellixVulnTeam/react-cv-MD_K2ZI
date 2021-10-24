var express = require("express");
var MongoClient = require("mongodb");
var url = "mongodb://localhost:27017/mydb";
var webService = require("./webService");
var server = express();

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

server.use(express.urlencoded({ extended: true }));

server.set("views", __dirname);

server.get("/", function(request, response) {
  response.sendFile(__dirname + "/MainPage.html");
});

server.get("/Sign", function(request, response) {
  response.render(__dirname + "/Sign.ejs");
});

server.post("/signUp", webService.signUp);

server.post("/createUser", webService.createUser);

server.listen(5500);
