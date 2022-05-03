
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  
  formList.forEach((formElement) => {
   formElement.addEventListener('submit', () => {

    disabledButton(formElement, config);

   });

   setEventListeners(formElement, config);
  });
};

const showInputError = (formElement, formInput, errorMessage, config) => {

  const errorElement = formElement.querySelector(`#${formInput.id}-error`);

  formInput.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, formInput, config) => {

  const errorElement = formElement.querySelector(`#${formInput.id}-error`);

  formInput.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, formInput, config) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage, config);
  } else {
    hideInputError(formElement, formInput, config);
  }
};

function disabledButton(formElement, config) {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.setAttribute('disabled', 'disabled')
}


const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);
  
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      isValid(formElement, formInput, config);

      toggleButtonState(inputList, buttonElement, config);
    });
  });
}; 

const hasInvalidInput = (inputList) => {
  return inputList.some ((inputElement) => {
    return !inputElement.validity.valid;
  })
};



const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled')
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled')
  }
};




enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
