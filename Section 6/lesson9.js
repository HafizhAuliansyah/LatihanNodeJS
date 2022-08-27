const geocode = require("./utils/geocode");

geocode("Cimahi", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
