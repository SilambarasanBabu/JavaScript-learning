class data {
  constructor() {
    this.store = {};
  }

  add(key, value) {
    this.store[key] = value;
  }

  get(key) {
    console.log(this.store[key]);
  }

  remove(key) {
    delete this.store[key];
  }
}

var d = new data();
d.add("name", "alpha");
d.add("age", "35");
d.get("name");
d.get("age");
d.remove("age");
d.get("age");

//extracting only relavent info is known as data ABS
//the process of combaining data members and member function