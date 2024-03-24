//legal Shadowing
let a = 10;
console.log(a);
{
  let a = 20;
  console.log(a);
}

//Legal shadowing in JavaScript refers to the 'intentional redeclaration of a variable within a narrower scope'

//illegal Shadowing
let b =20;
// {
//     var b = 30
// }

//Illegal shadowing occurs when a variable is 'unintentionally redeclared within a nested scope'