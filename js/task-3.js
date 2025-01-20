const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', handleInput);

function handleInput(event) {
  if (event.currentTarget.value.trim() === '') {
    outputField.textContent = 'Anonymous';
  } else {
    outputField.textContent = event.currentTarget.value.trim();
  }
}
