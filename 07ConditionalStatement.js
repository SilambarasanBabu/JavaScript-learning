//conditional statement

//simple if
const age = 20;
//when ever use const diclaration use === or == otherwise it will throw error
if (age === 20) {
  console.log("i am 20 years old");
}

//If else

let age2 = "23";

if (age2 >= 20) {
  console.log("i am able to vote");
} else if (age2 === "food") {
  console.log("i am 23 years old");
} else {
  console.log("lol next time dude");
}

//switch statement

let bike = "rk";
switch (bike) {
  case "rs200":
    console.log("i am rs200");
    break;
  case "ns200":
    console.log("i am ns200 and i use this bike personally");
    break;
  case "as200":
    console.log("i am new model");
    break;
  default:
    console.log("no match found");
}
