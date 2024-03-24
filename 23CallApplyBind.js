let fullName = function (homeTown, goodAt) {
  console.log(
    this.fname + " " + this.lname + " i am from " + homeTown + " ," + goodAt
  );
};

let obj1 = {
  fname: "alpha",
  lname: "SR",
};

fullName.call(
  obj1,
  "Thirupattur",
  "I am number one player in the world at free fire community"
);

//Call : Invoking the function with specified 'this' value and individual Arg

fullName.apply(obj1, [
  "Thirupattur",
  "I am number one player in the world at free fire community",
]);

//Apply : Invoking the function with specified 'this' value and array of Arg

const bind = fullName.bind(obj1, [
  "Thirupattur",
  "I am number one player in the world at free fire community",
]);
bind();

//Bind : Create a function specified with 'this' value and optional Arg
