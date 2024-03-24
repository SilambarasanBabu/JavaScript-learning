function Employee(id, fname, lname, age) {
  (this.id = id), (this.fname = fname), (this.lname = lname), (this.age = age);
}

const e1 = new Employee(1, "poovi", "sr", 500);
const e2 = new Employee(2, "poovi", "sr", 500);
console.log(e1, e2);


//construtor is an special function that create and initlize object instances of a class