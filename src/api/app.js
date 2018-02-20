// Mock API Service
const express = require("express");
const app = express();



// Returns The Entire Blockchain Network
app.get("/ledger", function(req, res) {
  res.send("Hello World!");
});


// Adds A New Block
app.post("/addblock", function(req, res) {
  res.send("Got a POST request");
});

app.listen(3000, () => console.log("The Blockca3000!"));
