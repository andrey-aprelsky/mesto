import { imageModalWindow, imageElement, imageCaption, openModalWindow} from './utils.js';


export default class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._alt = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate () {
     const cardElement = document
     .querySelector('.template')
     .content
     .querySelector('.element')
     .cloneNode(true);
     
     return cardElement;
    }

    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
    
      this._element.querySelector('.element__image').src = this._image;
      this._element.querySelector('.element__image').alt = this._alt;
      this._element.querySelector('.element__title').textContent = this._title;
      this._likeButton = this._element.querySelector('.element__like');
      
    
      return this._element;
    } 

  
  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handlePreviewPicture();
    });
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleRemoveCard();
    })
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLike();
    })
  }

  _handlePreviewPicture() {
    imageElement.src = this._image;
    imageElement.alt = `Изображение ${this._alt}`;
    imageCaption.textContent = this._title;
  
    openModalWindow(imageModalWindow);
  }

  _handleRemoveCard() {
    this._element.remove();
  }

  _handleLike() {
    this._likeButton.classList.toggle('element__like_is-active');
  }
  
}
  
 


