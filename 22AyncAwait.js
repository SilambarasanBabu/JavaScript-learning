const DATA_URL = "https://api.github.com/users/SilambarasanBabu";

async function data() {
  let userData = await fetch(DATA_URL);
  let jsonData = await userData.json();
  console.log(jsonData.name);
}

data();

//async functions in JavaScript allow you to write asynchronous code in JS. 
// await is used within async functions to pause execution until a promise is settled