const email = "hafizh.auliansyah@gmail.com";
const password = "hafizhauliansyah";
const name = "Muhammad Hafizh Auliansyah";
const address = "Cimahi";

const account = {
  email,
  password,
  name,
  address,
};

const login = ({ email, password, name }) => {
  console.log(name + " success login");
};

login(account);
