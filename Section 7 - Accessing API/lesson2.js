// Lesson 2: The Query String
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
const publicDirectoryPath = path.join(__dirname, "public");

app.use(express.static(publicDirectoryPath));

app.set("view engine", "hbs");
const viewsPath = path.join(__dirname, "views");
app.set("views", viewsPath);
const partialsPath = path.join(__dirname, "partials");
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "My title",
    name: "Hafizh",
  });
});
app.get("/weather", (req, res) => {
  res.send('You provided "' + req.query.address + '" as the address.');
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Hafizh Auliansyah",
    errorMessage: "Page not found.",
  });
});
app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});