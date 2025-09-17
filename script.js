const gridSize = document.querySelector(".grid-size");
const grid = document.querySelector(".grid");
const reset = document.querySelector(".reset");
const pencil = document.querySelector(".pencil");
const eraser = document.querySelector(".eraser");

// creating the grid boxes each time a user enters a value
function generateGrid() {
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
}

// function to color the grid
function colorGrid() {
  const colorPicker = document.querySelector(".color-picker");
  const gridBoxes = document.querySelectorAll(".box");
  console.log(gridBoxes);
  gridBoxes.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = colorPicker.value;
      colorPicker.style.backgroundColor = colorPicker.value;
    });
  });
}

// function to set up eraser
function eraseBox() {
  const colorPicker = document.querySelector(".color-picker");
  const gridBoxes = document.querySelectorAll(".box");
  console.log(gridBoxes);
  gridBoxes.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "white";
      colorPicker.style.backgroundColor = colorPicker.value;
    });
  });
}

// calling the generateGrid function through input change
gridSize.addEventListener("input", () => {
  generateGrid();
});

// checking the pencil active event to activate drawing mode
pencil.addEventListener("click", () => {
  colorGrid();
});

// checking for the eraser active event to activate the eraser mode
eraser.addEventListener("click", () => {
  eraseBox();
});

// checking for eraser click to wipe the board
reset.addEventListener("click", () => {
  document.querySelectorAll(".box").forEach((box) => {
    box.style.backgroundColor = "white";
  });
});
