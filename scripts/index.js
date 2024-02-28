// Все комментарии добавил для себя, не обращайте внимания =)
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template') // Переменная с шаблоном из Template элемента
// @todo: DOM узлы
const contentElement = document.querySelector('.content');
const placeList = contentElement.querySelector('.places__list')

// @todo: Функция создания карточки
function cardAndDelete(card, deleteCard) {
  const cardElement = cardTemplate.content.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = card.link; // Ссылка на изображение
  cardElement.querySelector('.card__image').alt = card.name; // Имя карточки
  cardElement.querySelector('.card__title').textContent = card.name; // Заголовок карточки
  cardElement.querySelector('.card__delete-button').addEventListener('click', function () { // Обработчик события дял удаления карточки
    deleteCard(cardElement);
  });
  return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}
// @todo: Добавление карточeк на страницу
function addCard(card) { // Функция добавления карточек
  placeList.append(cardAndDelete(card, deleteCard));
}

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
  addCard(card);
});