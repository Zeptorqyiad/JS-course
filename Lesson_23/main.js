// Добро пожаловать в вашу маленькую домашнюю библиотеку. Пока она состоит всего из одной полки вместимостью 5 книг. Вводите в текстовое поле название книги, и после нажатия на кнопку "Добавить книгу" в списке появляется новая книга.

// Если вы попытаетесь добавить больше 5 книг, на экране появляется сообщение alert() с текстом: "На полке больше нет мест для книг". Но при этом новая книга все равно добавляется в список. Попробуйте исправить эту проблему. В список не должны добавляться новые книги после превышения максимального количества.

let bookCount = 0 // Счетчик кол-ва книг

// Функция, возвращающая новую кнопку
function getButton(text) {
   let button = document.createElement('button')
   button.textContent = text
   return button
}

// Функция, возвращающая новый input
function getInput(type, placeholder) {
   let input = document.createElement('input')
   input.type = type
   input.placeholder = placeholder
   return input
}

// Функция, возвращающая новую книгу
function getBookItem(bookName) {
   let item = document.createElement('li')
   let bookSpan = document.createElement('span')
   bookSpan.textContent = bookName

   let removeBtn = getButton('Удалить')

   removeBtn.onclick = function () {
      bookCount-- // Уменьшаем кол-во книг
      item.remove() // Удаление книги
   }

   item.append(bookSpan, removeBtn)
   return item
}

// Заголовок
let title = document.createElement('h1')
title.textContent = 'Книжная полка'

// Создание списка книг
let list = document.createElement('ul')

// Создание текстового поля и кнопки
let bookNameInp = getInput('text', 'Название книги')
let addBtn = getButton('Добавить книгу')

// Добавление книги в список
addBtn.onclick = function () {
   let newBookName = bookNameInp.value

   if (bookCount >= 5) {
      alert('На полке больше нет мест для книг')
      return
   }

   let newItem = getBookItem(newBookName)
   list.append(newItem)
   bookNameInp.value = ''

   bookCount++ // Увеличиваем кол-во книг
}

document.body.append(title, bookNameInp, addBtn, list)
