let num = 0;
function a() {
  console.log("silambarasan" + num);
  num++;
  if (num <= 1000) {
    a();
  }
}
a();

//a function keep calling it self but with a smaller input every consecutive time
