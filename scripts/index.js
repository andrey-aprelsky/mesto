import Card from './card.js';
import { FormValidator } from './formValidation.js';
import { 
  object,
  buttonEdit,
  popupProfile,
  profileCloseBtn,
  profileForm,
  nameInput,
  title,
  descriptionInput,
  description,
  buttonAdd,
  popupAdd,
  closePopupAdd,
  inputAdressName,
  cardFormAdd,
  initialCardsContainer,
  popImgOpn,
  popImgCls } from './constants.js';


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

function createCard(data) {
  const card = new Card(data, '.template');
  const cardElement = card.generateCard();
  return cardElement;
}


initialCards.forEach((data) => {
  const card = createCard(data);
  
  initialCardsContainer.append(card);
});

const addCard = (data) => {
  const card = createCard(data);
  initialCardsContainer.prepend(card);
}

const editProfileForm = new FormValidator(object, profileForm);
editProfileForm.enableValidation();

const newCardForm = new FormValidator(object, cardFormAdd);
newCardForm.enableValidation();

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

  addCard({ name: inputAdressName.value, link: inputAdress.value });


  closeAddPopup();
  
  cardFormAdd.reset();

}

function openAddPopup() {
  openPopup(popupAdd);
}

function closeAddPopup() {
  closePopup(popupAdd);
}

function closeImgPopup() {
  closePopup(popImgOpn);
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


onOverlayClick();

buttonEdit.addEventListener("click", openPopupProfile);

profileCloseBtn.addEventListener("click", closePopupProfile);

profileForm.addEventListener("submit", handleProfileFormSubmit);

buttonAdd.addEventListener("click", openAddPopup);

closePopupAdd.addEventListener("click", closeAddPopup);

cardFormAdd.addEventListener("submit", handleCardFormSubmit);

popImgCls.addEventListener("click", closeImgPopup);



export {handleEscUp}