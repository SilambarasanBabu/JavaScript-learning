function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}

let out = sum(1)(2)(3)(5)();
console.log(out);
