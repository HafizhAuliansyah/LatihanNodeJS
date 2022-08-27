// Lesson 4: ES6 Aside: Default Function Parameters
const greeter = (name = "user", age) => {
  console.log("Hello " + name);
};
greeter("Andrew");
greeter();

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};
transaction("order");
