const squares = 4;
const gridContainer = document.getElementById('grid-container');
gridContainer.style.width = `${squares * 20}px`;

// counter for
for (let index = 0; index < squares; index++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let index = 0; index < squares; index++) {
    const box = document.createElement('div');
    box.classList.add('box');
    row.appendChild(box);
  }
  gridContainer.appendChild(row);
}
