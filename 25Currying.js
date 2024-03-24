function multi(x, y) {
  console.log(x * y);
}

var multiByTwo = multi.bind(this, 2);
multiByTwo(5);

var multiByThree = multi.bind(this, 3);
multiByThree(5)

//funtion with multple args is trasformed into sequences of function ,Each function takes single args