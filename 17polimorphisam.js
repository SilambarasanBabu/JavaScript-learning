class why {
  details() {
    console.log("hello world");
  }
}

class not extends why {
  details() {
    console.log("One line at a time");
  }
}

var n = new not();
n.details();
