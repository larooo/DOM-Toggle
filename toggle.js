let button = document.querySelector("button");
let list = document.querySelector("ul");

let listVisible = false;

button.addEventListener("click", function listener() {
  listVisible = !listVisible;
  if (listVisible) {
    list.style.display = "block";
    button.innerHTML = " Get them out here";
  } else {
    list.style.display = "none";
    button.innerHTML = " Show favorite destination";
  }
  // button.removeEventListener("click", listener);
});
