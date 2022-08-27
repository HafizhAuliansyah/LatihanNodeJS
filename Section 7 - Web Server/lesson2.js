// Lesson 2: Hello Express!
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Hello Express");
});

app.get("/weather", (req, res) => {
  res.send("Your Weather");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
