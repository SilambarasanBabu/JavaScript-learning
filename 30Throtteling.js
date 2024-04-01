//Throtteling is the techinque used to limit the function invokation in a given period of time

function throttle(callback, delay) {
  let throttled = false;

  return function () {
    if (!throttled) {
      callback();
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, delay);
    }
  };
}

// Example usage
window.addEventListener(
  "resize",
  throttle(function () {
    console.log("Resized!");
  }, 300)
);
