var abs = {
  n: "silambu",
  l: "pooooooovi",
  age: "23",
  gender: "funking funny",
  get full() {
    return `${this.n} and ${this.l} we are so ${this.gender} we r from same age group ${this.age}`;
  },
  set full(val) {
    const part = val.split(" ");
    (this.n = part[0]), (this.l = part[1]);
  },
};

abs.full = "Karky Indu";

console.log(abs);
//this is from pg 22 before this you have to refer notes
