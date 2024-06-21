// Создание массивов
let productArray = []
let priceArray = []

// Счетчик
let index = 0

// Главный контейнер
let container = document.createElement('div')
container.classList.add('container')

// Заголовок сайта
let title = document.createElement('h1')
title.textContent = 'Чек покупки'
title.classList.add('title')

// Функция создания жирного текста
function getStrong(text) {
   return `<strong>${text}</strong>`
}

// Создание функции возврата input
function getInput(placeholder, className, type) {
   let input = document.createElement('input')
   input.placeholder = placeholder
   input.classList.add(className)
   input.type = type
   return input
}

// Создание оболочки шапки
let box = document.createElement('div')
box.classList.add('input-wrap')

// Создание input
let nameInp = getInput('Название товара', 'inp', 'text')
let countInp = getInput('Количество', 'inp', 'number')
let priceInp = getInput('Цена', 'inp', 'number')

// Создание кнопки добавления
let addBtn = document.createElement('button')
addBtn.classList.add('add-btn')
addBtn.textContent = 'Добавить'

// Добавление товара
addBtn.onclick = function () {
   index++
   let itemList = document.createElement('li')
   itemList.classList.add('item-list')

   // Значения input
   let nameInpValue = nameInp.value
   let countInpValue = countInp.value
   let priceInpValue = priceInp.value

   itemList.textContent = `${index} - ${nameInpValue} - ${countInpValue} - ${priceInpValue}`

   // Очищение поля input
   nameInp.value = ''
   countInp.value = ''
   priceInp.value = ''

   list.append(itemList)
}

// Создание листа покупок
let list = document.createElement('ul')
list.classList.add('list')

// Добавление в обёртку
box.append(nameInp, countInp, priceInp, addBtn)
container.append(title, box, list)
document.body.prepend(container)
