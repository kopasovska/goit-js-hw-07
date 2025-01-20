function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(number) {
  const boxes = [];
  if (number >= 1 && number <= 100) {
    for (let i = 0; i < number; i++) {
      const newBox = document.createElement('div');
      const px = 30 + i * 10;
      newBox.style.width = `${px}px`;
      newBox.style.height = `${px}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      boxes.push(newBox);
    }
  }
  return boxes;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

const inputNumber = document.querySelector('input');
const boxesContainer = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
destroyButton.classList.add('destroy');

createButton.addEventListener('click', handleCreate);
destroyButton.addEventListener('click', handleDestroy);

function handleCreate(event) {
  destroyBoxes();
  const boxesMarkup = createBoxes(inputNumber.value);
  const fragment = document.createDocumentFragment();

  boxesMarkup.forEach(box => fragment.appendChild(box));
  boxesContainer.appendChild(fragment);

  inputNumber.value = '';
}

function handleDestroy() {
  inputNumber.value = '';
  destroyBoxes();
}
