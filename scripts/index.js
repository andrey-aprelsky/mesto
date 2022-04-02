const editButton = document.querySelector('.profile__edit-button');
const overlay = document.querySelector('.overlay');
const closeOverlay = document.querySelector('.form-container__close-button');

function openOverlay() {
  overlay.classList.toggle ('overlay_is-active')
}

editButton.addEventListener('click', openOverlay );

closeOverlay.addEventListener('click', openOverlay);

function clickOpenOverlay(event) {
  if (event.target === event.currentTarget) {
    
    openOverlay()
  }

}

overlay.addEventListener('click', clickOpenOverlay);


const form = document.querySelector('.form');

const nameInput = document.querySelector('.form__input-name');
const title = document.querySelector('.profile__title')

const descriptionInput = document.querySelector('.form__input-description'); 
const description = document.querySelector('.profile__subtitle');

function onSubmit(e) {
  e.preventDefault()
  title.textContent = nameInput.value;
  description.textContent = descriptionInput.value;

  openOverlay()
}

form.addEventListener('submit', onSubmit);
