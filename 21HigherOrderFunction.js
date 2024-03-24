//A function take an another function as a input and return the new function is known as higher oder function

//example
//Map
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function d(x) {
  return x * 2;
}

var res = arr.map((x) => {
  return d(x);
});
console.log(res);
//Filter
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function e(x) {
  return x % 2 == 0;
}

var out = arr2.filter((x) => {
  return e(x);
});
console.log(out);

//reduce

const output = arr2.reduce((acc, cur) => {
  acc = acc + cur;
  return acc;
}, 0);
console.log(output)