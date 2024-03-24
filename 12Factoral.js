function factoral(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factoral(n - 1);
  }
}
let num = factoral(10);
console.log(num);


//real time example for using recusition here i am using factorial() in side it self to solve recursition