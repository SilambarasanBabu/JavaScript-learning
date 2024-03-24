var obj1 = {
  fn: "silambarasan",
  ln: "Babu",
};

const fullName = function (homeTown) {
  console.log(
    this.fn + this.ln + " This is my full name I am from " + homeTown
  );
};

Function.prototype.myBind = function (...args) {
  let param = args.slice(1);
  let context = args[0];
  let obj = this;
  return function (...args2) {
    obj.apply(context, [...param, ...args2]);
  };
};

let out = fullName.myBind(obj1, "thirupattur");
out();

//it is nothing but own implementation of bind method in js
//it is used in browser fall back
