const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function() {
    const inputValue = nameInput.value.trim();
    const nameOutputText = inputValue || 'Anonymous';
  
    for (let i = 0; i < nameOutputText.length; i++) {
      nameOutput.textContent = nameOutputText;
    }
  });