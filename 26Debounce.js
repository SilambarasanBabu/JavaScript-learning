const clickHandler = () => {
  console.log("hello there");
};
let bounce = (fn, d) => {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, d);
  };
};

document
  .getElementById("btn")
  .addEventListener("click", bounce(clickHandler, 500));

//Debounce will ensure that time consuming tasks are not fired so often