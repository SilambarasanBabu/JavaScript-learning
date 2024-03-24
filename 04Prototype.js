function Student(id, name, mark, total) {
  (this.rollno = id),
    (this.name = name),
    (this.mark = mark),
    (this.total = total);
}
Student.prototype.details = function () {
  return `my name is ${this.name} i scored ${this.total}`;
};
const s1 = new Student(1, "Leg", 95, 62);
console.log(s1.details());

//never use arrow function to create new prototype function
