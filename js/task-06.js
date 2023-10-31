const inputValidationElement = document.querySelector("#validation-input");
const inputLength = parseInt(inputValidationElement.getAttribute("data-length"), 10);

inputValidationElement.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === inputLength) {
    inputValidationElement.classList.add('valid');
    inputValidationElement.classList.remove('invalid');
  } else {
    inputValidationElement.classList.remove('valid');
    inputValidationElement.classList.add('invalid');
  }
});