localStorage.setItem("name", "Silambu");
console.log(localStorage.getItem("name"));
//local storage is a client side mechanism for store data in web browser in a simple key value interface

sessionStorage.setItem("name", "Kishor");
console.log(sessionStorage.getItem("name"));
// Session storage in JavaScript is a client-side storage mechanism that stores data for the duration of a browser session.
// data only accesed inside same tab

document.cookie = "name=alpha";
//cookie is a small piece of data stored on a user's device by the web browser
//it is commonly used for tracking and auth
