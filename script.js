let items = ["Учить JS", "Сделать перерыв"];
let list = document.getElementById("list");

render();

function render() {
  list.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    let li = document.createElement("li");
    li.innerText = items[i];

    li.addEventListener("click", () => {
      items.splice(i, 1);
      render();
    });

    list.appendChild(li);
  }
}
