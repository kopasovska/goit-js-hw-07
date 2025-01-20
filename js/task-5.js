function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const widget = document.querySelector('.widget');
const spanColor = document.querySelector('.color');

changeColorButton, addEventListener('click', handleChangeColorButton);

function handleChangeColorButton() {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
