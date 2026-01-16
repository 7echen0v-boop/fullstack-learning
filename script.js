let input = document.getElementById("nameInput");
let button = document.getElementById("helloBtn");
let result = document.getElementById("result");

button.addEventListener("click", function () {
  let name = input.value.trim();

  if (name === "") {
    result.innerText = "Введите имя!";
  } else {
    result.innerText = "Привет, " + name + "!";
  }
});
