import { handleEscUp } from "./index.js";
const imageModalWindow = document.querySelector(".popup_open-image");
const imageElement = document.querySelector(".popup__image");
const imageCaption = document.querySelector(".popup__subtitle");

function openModalWindow(popup) {
  document.addEventListener('keyup', handleEscUp);
  popup.classList.add("popup_is-active");
}


export { imageModalWindow, imageElement, imageCaption, openModalWindow};