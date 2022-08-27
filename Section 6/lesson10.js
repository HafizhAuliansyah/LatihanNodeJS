const weather = require("./utils/weather");

weather("Cimahi", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
