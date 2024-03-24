//class and object
class bike {
  getModel(m1, m2, m3) {
    (this.bike1 = m1), (this.bike2 = m2), (this.bike3 = m3);
  }
  getDetails() {
    console.log(`${this.bike1} and ${this.bike2} and ${this.bike3} `);
  }
}

var b1 = new bike();
b1.getModel("ns", "rs", "as");
b1.getDetails();

//class is an collection of info or collection of obj
//object is an identifable entity that as a set of attribute , state and behavior
