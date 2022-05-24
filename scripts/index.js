import Card from './Card.js';
import { FormValidator } from './FormValidatior.js';
import { 
  object,
  buttonEdit,
  popupProfile,
  profileForm,
  nameInput,
  title,
  descriptionInput,
  description,
  buttonAdd,
  popupAdd,
  inputAdressName,
  inputAdress,
  cardFormAdd,
  initialCardsContainer,
   } from './constants.js';


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
  editProfileForm.resetValidation();
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
  newCardForm.resetValidation();
}

function closeAddPopup() {
  closePopup(popupAdd);
}



const onOverlayClick = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  
  popupList.forEach((Element) => {
   Element.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closePopup(Element)
    } 
  });
});
}


onOverlayClick();


buttonEdit.addEventListener("click", openPopupProfile);

profileForm.addEventListener("submit", handleProfileFormSubmit);

buttonAdd.addEventListener("click", openAddPopup);

cardFormAdd.addEventListener("submit", handleCardFormSubmit);



export {handleEscUp}