const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
};

const bookJSON = JSON.stringify(book);

const bookObject = JSON.parse(bookJSON);
console.log(bookObject.title);
