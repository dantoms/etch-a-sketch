const squares = 16;
const gridContainer = document.getElementById('grid-container');
gridContainer.style.width = `${squares * 20}px`;
let color = 'purple';

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

function randomInteger() {
  return Math.floor(Math.random() * 256);
}

function randomRgbColor() {
  let intRed = randomInteger();
  let intGreen = randomInteger();
  let intBlue = randomInteger();
  return [intRed, intGreen, intBlue];
}

const boxes = document.querySelectorAll('.box');
const colors = document.querySelectorAll('.menu-items');

colors.forEach((item) => {
  item.addEventListener('click', function(e) {
    colors.forEach((color) => {
      color.classList.remove('selected')
    });
    e.target.classList.add("selected")
    color = e.target.id;
    if (color === 'reset') {
      console.log('Reload clicked!');
      location.reload();
    }
  });
});

boxes.forEach((element) => {
  element.addEventListener('click', function(e) {
    if (color === 'multicolor') {
      e.target.style.backgroundColor = `rgb(${randomRgbColor()})`;
    } else {
      e.target.style.backgroundColor = color;
    }
  });
});
