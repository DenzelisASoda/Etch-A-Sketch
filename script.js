const gridSize = document.querySelector(".grid-size");
const grid = document.querySelector(".grid");
const reset = document.querySelector(".reset");
const pencil = document.querySelector(".pencil");
const eraser = document.querySelector(".eraser");

// creating the grid boxes each time a user enters a value
gridSize.addEventListener("input", () => {
  grid.innerHTML = "";
  if (gridSize.value > 64) {
    grid.innerHTML =
      '<p style="color: red; margin: 0 auto; font-size: 32px;"> Please Enter a value less than 64 :<</p>';
  } else if (gridSize.value <= 64) {
    let boxSize = gridSize.value;
    grid.style.gridTemplateColumns = `repeat(${boxSize},1fr)`;
    grid.style.gridTemplateRows = `repeat(${boxSize}, 1fr)`;
    for (let i = 0; i < boxSize * boxSize; i++) {
      let gridbox = document.createElement("div");
      gridbox.classList.add("box");
      grid.appendChild(gridbox);
    }
  }
});
