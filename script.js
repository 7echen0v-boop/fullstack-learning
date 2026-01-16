
let button = document.getElementById("showBtn");
let list = document.getElementById("list");

button.addEventListener("click", function () {
  list.innerHTML = "";

  for (let i = 4; i <= 16; i++) {
    let li = document.createElement("li");
    li.innerText = "Число " + i;
    list.appendChild(li);
  }
});
