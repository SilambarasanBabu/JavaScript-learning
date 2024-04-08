var obj = {
  id: 1,
  n: "swetha",
};

Object.defineProperty(obj, "hobby", {
  value: "football",
});

obj.id = 10;
console.log(obj);

//it is used to add new properties directly on an object
