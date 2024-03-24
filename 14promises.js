//Consuming phase
// const DATA_URL = "https://api.github.com/users/SilambarasanBabu";

// fetch(DATA_URL)
//   .then((data) => {
//     return data.json();
//   })
//   .then((details) => {
//     console.log(details.name);
//   });


//creating phase
function a() {
  const pr = new Promise((res, rj) => {
    const id = "123";
    const err = new Error("error");
    if (id == "123") {
      res(id);
    } else {
      rj(err);
    }
  });
  return pr;
}

//consuming phase
a().then((id) => {
  console.log(id);
});

//it is a object that representing the evental comption or failure of an asyn operation
