const express = require("express"),
  app = express(),
  path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public"));
});

app.listen(8080, () => console.log("See you space-cowboy..."));
