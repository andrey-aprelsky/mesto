const editButton = document.querySelector(".profile__edit-button");
const overlay = document.querySelector(".popup");
const closeOverlay = document.querySelector(".popup__close-button");
const form = document.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__input_name");
const title = document.querySelector(".profile__title");

const descriptionInput = document.querySelector(".popup__input_description");
const description = document.querySelector(".profile__subtitle");

function openOverlay() {
  overlay.classList.add("popup_is-active");
  nameInput.value = title.textContent;
  descriptionInput.value = description.textContent;
}

function close() {
  overlay.classList.remove("popup_is-active");
}

function formSubmitHandler(e) {
  e.preventDefault();
  title.textContent = nameInput.value;
  description.textContent = descriptionInput.value;

  close()
}

editButton.addEventListener("click", openOverlay);

closeOverlay.addEventListener("click",close);

form.addEventListener("submit", formSubmitHandler);
