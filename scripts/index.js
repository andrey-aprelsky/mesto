const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const editButton = document.querySelector(".profile__edit-button");
const overlay = document.querySelector(".popup");
const closeOverlay = document.querySelector(".popup__close-button");
const form = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const title = document.querySelector(".profile__title");
const descriptionInput = document.querySelector(".popup__input_type_description");
const description = document.querySelector(".profile__subtitle");

const addButton = document.querySelector(".profile__add-button");
const addPopup = document.querySelector(".popup_add");
const closePopupAdd = document.querySelector(".popup__close-button_add");
const inputAdressName = document.querySelector(".popup__input_type_adress-name");
const inputAdress = document.querySelector(".popup__input_type_adress");
const savePopupAdd = document.querySelector(".popup__form_res");

const initialCardsContainer = document.querySelector(".elements");
const template = document.querySelector(".template");

const opnPopImg = document.querySelector(".popup_open-image");
const clsPopImg = document.querySelector(".popup__close-button_image");
const popImg = document.querySelector(".popup__image");
const popSub = document.querySelector(".popup__subtitle");



function render() {
  const html = initialCards.map(getElement);
  initialCardsContainer.append(...html);
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const elementTitle = getElementTemplate.querySelector(".element__title");
  const elementUrl = getElementTemplate.querySelector(".element__image");
  const elementTrash = getElementTemplate.querySelector(".element__trash");
  const elementLike = getElementTemplate.querySelector(".element__like");

  elementTrash.addEventListener("click", removeElement);

  elementLike.addEventListener("click", handleLike);

  elementUrl.addEventListener("click", handleOpenImage);

  elementTitle.textContent = item.name;
  elementUrl.src = item.link;

  
  inputAdressName.textContent = elementTitle.textContent;
  inputAdress.textContent = elementUrl.src;

  popSub.textContent = elementTitle.textContent;
  popImg.src = elementUrl.src;
  
  
  function handleOpenImage(evt) {
    evt.preventDefault();
    opnPopImg.classList.add("popup_open-image_is-active");
    popSub.textContent = elementTitle.textContent;
    popImg.src = elementUrl.src;
  }

  return getElementTemplate;
}


function handleLike(e) {
  const currentLike = e.target;
  currentLike.classList.toggle("element__like_is-active");
}


function removeElement(e) {
  const currentButton = e.target;
  currentButton.closest(".element").remove();
}

function openOverlay() {
  overlay.classList.add("popup_is-active");
  nameInput.value = title.textContent;
  descriptionInput.value = description.textContent;
}

function closePopup() {
  overlay.classList.remove("popup_is-active");
}

function formSubmitHandler(e) {
  e.preventDefault();
  title.textContent = nameInput.value;
  description.textContent = descriptionInput.value;

  closePopup();
}

function handleCardAdd(e) {
  e.preventDefault();

  initialCardsContainer.prepend(getElement({ name: inputAdressName.value, link: inputAdress.value }));


  closeAddPopup();
  
  savePopupAdd.reset();

}


function openAddPopup() {
  addPopup.classList.add("popup_add_is-active");
}

function closeAddPopup() {
  addPopup.classList.remove("popup_add_is-active");
}
function closeImgPopup() {
  opnPopImg.classList.remove("popup_open-image_is-active");
}


render();


editButton.addEventListener("click", openOverlay);

closeOverlay.addEventListener("click", closePopup);

form.addEventListener("submit", formSubmitHandler);


addButton.addEventListener("click", openAddPopup);

closePopupAdd.addEventListener("click", closeAddPopup);

savePopupAdd.addEventListener("submit", handleCardAdd);

clsPopImg.addEventListener("click", closeImgPopup);
