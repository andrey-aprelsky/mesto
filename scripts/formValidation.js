export class FormValidator {
  constructor(object, form) {
    this._object = object;
    this._form = form;
  }

  _showInputError(form, input) {
    const errorElement = form.querySelector(`#${input.id}-error`);

    input.classList.add(this._object.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._object.errorClass);
  }

  _hideInputError(form, input) {
    const errorElement = form.querySelector(`#${input.id}-error`);

    input.classList.remove(this._object.inputErrorClass);
    errorElement.classList.remove(this._object.errorClass);
    errorElement.textContent = '';
  }

  _isValid(form, input) {
    if (!input.checkValidity()) {
      this._showInputError(form, input);
    } else {
      this._hideInputError(form, input);
    }
  }

  _disabledButton() {
    this.buttonElement = this._form.querySelector(this._object.submitButtonSelector);
    this.buttonElement.classList.add(this._object.inactiveButtonClass);
    this.buttonElement.setAttribute('disabled', 'disabled')
  }

  _toggleButtonState() {
    if (!this._form.checkValidity()) {
      this.buttonElement.classList.add(this._object.inactiveButtonClass);
      this.buttonElement.setAttribute('disabled', 'disabled')
    } else {
      this.buttonElement.classList.remove(this._object.inactiveButtonClass);
      this.buttonElement.removeAttribute('disabled')
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._form.querySelectorAll(this._object.inputSelector));
    this.buttonElement = this._form.querySelector(this._object.submitButtonSelector);
  
    this._toggleButtonState(this._form, this.buttonElemnt, this._object);
    
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(this._form, input, this._object);
  
        this._toggleButtonState(this._form, this.buttonElemnt, this._object);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault; });

    this._setEventListeners();
  }
}





