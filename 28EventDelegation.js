document.getElementById("parent").addEventListener("click", (e) => {
  let path = e.target.id;
  if (e.target.tagName === "LI") window.location.href = "/" + path;
});

document.getElementById("form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

//Event delegation is pattern that efficently handles a event