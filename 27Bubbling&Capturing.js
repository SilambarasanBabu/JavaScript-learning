document.getElementById("grandParant").addEventListener(
  "click",
  (e) => {
    console.log("grand parent");
    e.stopPropagation();
  },
  true
);

document.getElementById("parant").addEventListener(
  "click",
  (e) => {
    console.log("parent");
  },
  false
);

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("child");
  },
  true
);

//Event Bubbling is move from target to the root and Capturing is move from root to the target