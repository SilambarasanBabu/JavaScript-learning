setTimeout(() => {
  console.log("poda 1");
}, 5000);

function a(parm) {
  console.log(parm);
}
const b = () => {
  return "poda 2";
};

a(b());

//a function passed as a arg to another funtion is known as callback function
