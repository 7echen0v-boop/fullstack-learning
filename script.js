let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let button = document.getElementById("calcBtn");
let result = document.getElementById("result");

button.addEventListener("click", function () {
  let a = Number(num1.value);
  let b = Number(num2.value);

  result.innerText = "Результат: " + (a / b);
});
