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

const popupOverlay = document.querySelector(".popup");
const buttonEdit = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile");
const profileCloseBtn = document.querySelector(".popup__close-button");
const profileForm = document.querySelector(".popup__form_profile");
const nameInput = document.querySelector(".popup__input_type_name");
const title = document.querySelector(".profile__title");
const descriptionInput = document.querySelector(".popup__input_type_description");
const description = document.querySelector(".profile__subtitle");

const addButton = document.querySelector(".profile__add-button");
const addPopup = document.querySelector(".popup_add");
const closePopupAdd = document.querySelector(".popup__close-button_add");
const inputAdressName = document.querySelector(".popup__input_type_adress-name");
const inputAdress = document.querySelector(".popup__input_type_adress");
const addCardForm = document.querySelector(".popup__form_res");

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
  elementUrl.alt = item.name;
  elementUrl.src = item.link;

  
  function handleOpenImage(evt) {
    evt.preventDefault();
    openPopup(opnPopImg);
    popSub.textContent = elementTitle.textContent;
    popImg.src = elementUrl.src;
    popImg.alt = elementTitle.textContent;
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

function handleEscUp(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_is-active');
    closePopup(activePopup);
  }
};

function openPopup(popup) {
  document.addEventListener('keyup', handleEscUp);
  popup.classList.add("popup_is-active");
}

function closePopup(popup) {
  document.removeEventListener('keyup', handleEscUp);
  popup.classList.remove("popup_is-active");
}

function openPopupProfile() {
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  descriptionInput.value = description.textContent;
}

function closePopupProfile() {
  closePopup(popupProfile);
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  title.textContent = nameInput.value;
  description.textContent = descriptionInput.value;

  closePopupProfile();
}

function handleCardFormSubmit(e) {
  e.preventDefault();

  initialCardsContainer.prepend(getElement({ name: inputAdressName.value, link: inputAdress.value }));


  closeAddPopup();
  
  addCardForm.reset();

}

function openAddPopup() {
  openPopup(addPopup);
}

function closeAddPopup() {
  closePopup(addPopup);
}

function closeImgPopup() {
  closePopup(opnPopImg);
}

const onOverlayClick = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));

  popupList.forEach((Element) => {
   Element.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closePopup(evt.target)
    }
    
  });
});
}

render();

onOverlayClick();

buttonEdit.addEventListener("click", openPopupProfile);

profileCloseBtn.addEventListener("click", closePopupProfile);

profileForm.addEventListener("submit", handleProfileFormSubmit);

addButton.addEventListener("click", openAddPopup);

closePopupAdd.addEventListener("click", closeAddPopup);

addCardForm.addEventListener("submit", handleCardFormSubmit);

clsPopImg.addEventListener("click", closeImgPopup);

