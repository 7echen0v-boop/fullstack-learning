function showDay(day) {
  console.log("Сегодня день " + day);
}

showDay(16);
let button = document.getElementById("myButton");
button.addEventListener("click", function () {
  console.log("Сегодня день 17 обучения");
});
