// Функция возрата кнопки
function getAddBtn(text) {
   let buttonAdd = document.createElement('button')
   buttonAdd.textContent = text
   return
}

// Функция возврата карточки
function getCard(card) {
   let cardElement = document.createElement('li')
   let cardImage = document.createElement('img')
   let cardTitle = document.createElement('h2')
   let cardDesc = document.createElement('p')
   let cardRemoveBtn = document.createElement('button')
   let cardImportantBtn = document.createElement('button')

   // Создание классов для объектов
   cardElement.classList.add('card')
   cardImage.classList.add('card-image')
   cardTitle.classList.add('card-title')
   cardDesc.classList.add('card-desc')
   cardRemoveBtn.classList.add('card-remove')
   cardImportantBtn.classList.add('card-btn')

   // Присваивание объектного значния элементу карточки
   cardTitle.textContent = card.title
   cardImage.src = card.img
   cardDesc.textContent = card.desc

   // Описание кнопок
   cardRemoveBtn.textContent = 'Удалить'
   cardImportantBtn.textContent = 'Важное'

   // Добавление элементов в коробку
   cardElement.append(
      cardImage,
      cardTitle,
      cardDesc,
      cardRemoveBtn,
      cardImportantBtn
   )

   return cardElement
}

// Функция возврата списка ul
function getList() {
   let ul = document.createElement('ul')
   ul.classList.add('list')
   return ul
}

// Присваивание списку функцию возвращающую ul
let list = getList()

// Возврат функции добавления кнопки
let addBtn = getAddBtn('Добавить новую заметку')

list.append()
// Создание общей коробки
document.body.append(addBtn, list)
