function lexi() {
  const a = 190;
  var b = () => {
    console.log(a);
  };
  b();
}

lexi();

//When a function is nested within another function, it retains access to the lexical scope of its parent function.

//function along with lexical scope bundled together to form an clouser
