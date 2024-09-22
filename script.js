const container = document.querySelector(".container");
const sizeEl = document.querySelector(".size");
const colorEl = document.querySelector(".color");
const resetBtn = document.querySelector(".reset");

let draw = false;
let size = sizeEl.value;

function populate(size) {
  container.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");

    div.addEventListener("mouseover", () => {
      if (!draw) return;
      div.style.backgroundColor = colorEl.value;
    });

    div.addEventListener("mousedown", () => {
      div.style.backgroundColor = colorEl.value;
    });

    container.appendChild(div);
  }
}

window.addEventListener("mousedown", () => {
  draw = true;
});

window.addEventListener("mouseup", () => {
  draw = false;
});

function reset() {
  container.innerHTML = "";
  populate(size);
}

sizeEl.addEventListener("keyup", () => {
  size = sizeEl.value;
  reset();
});

resetBtn.addEventListener("click", reset);
populate(size);
