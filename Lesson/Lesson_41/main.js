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

// Функция вычисления общей цены за 1 товар
function getMultiplyPrice() {
   let countValue = countInp.value
   let priceValue = priceInp.value

   let totalPrice = countValue * priceValue
   return totalPrice
}

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

// Создание функции возврата button
function getButton(type, textContent, className) {
   let button = document.createElement('button')
   button.textContent = textContent
   button.classList.add(className)
   button.type = type
   return button
}

// Создание оболочки шапки
let box = document.createElement('div')
box.classList.add('input-wrap')

// Создание input
let nameInp = getInput('Название товара', 'inp', 'text')
let countInp = getInput('Количество', 'inp', 'number')
let priceInp = getInput('Цена', 'inp', 'number')

// Создание кнопки добавления
let addBtn = getButton('submit', 'Добавить', 'add-btn')

// Создание листа покупок
let list = document.createElement('ul')
list.classList.add('list')

function getItem(index, name, count, price, totalPrice) {
   let itemList = document.createElement('li')
   itemList.classList.add('item-list')

   // Создание блока названия товара
   let nameBox = document.createElement('div')
   nameBox.classList.add('name-box')
   let nameBoxText = document.createElement('p')
   nameBoxText.textContent = 'Название'
   nameBoxText.classList.add('text')
   let nameValue = name
   nameBox.append(nameBoxText, nameValue)

   // Создание блока количества товара
   let countBox = document.createElement('div')
   countBox.classList.add('count-box')
   let countBoxText = document.createElement('p')
   countBoxText.textContent = 'Кол-во'
   countBoxText.classList.add('text')
   let countValue = count
   countBox.append(countBoxText, countValue)

   // Создание блока цены товара
   let priceBox = document.createElement('div')
   priceBox.classList.add('price-box')
   let priceBoxText = document.createElement('p')
   priceBoxText.textContent = 'Цена'
   priceBoxText.classList.add('text')
   let priceValue = price
   priceBox.append(priceBoxText, priceValue)

   // Создание блока общей суммы товара
   let totalPriceBox = document.createElement('div')
   totalPriceBox.classList.add('price-box')
   let totalPriceBoxText = document.createElement('p')
   totalPriceBoxText.textContent = 'Общая цена'
   totalPriceBoxText.classList.add('text')
   let totalPriceValue = totalPrice
   totalPriceBox.append(totalPriceBoxText, totalPriceValue)

   // Создание блока кнопок изменения и удаления товара
   let renameBtn = getButton('submit', 'Изменить', 'rename-btn')
   let removeBtn = getButton('', 'Удалить', 'remove-btn')
   let blockBtn = document.createElement('div')
   blockBtn.classList.add('btn-block')
   blockBtn.append(renameBtn, removeBtn)

   // addBtn.onclick = function () {
   //    let nameInpValue = nameInp.value
   //    let countInpValue = Number(countInp.value)
   //    let priceInpValue = Number(priceInp.value)

   // // Очищение поля input
   //    nameInp.value = ''
   //    countInp.value = ''
   //    priceInp.value = ''
   // }

   // Добавление общей структуры всех блоков
   itemList.append(index, nameBox, countBox, priceBox, totalPriceBox, blockBtn)
   list.append(itemList)
   return itemList
}

getItem(index, 'Хлеб', 2, 40, getMultiplyPrice())
getItem(index, 'Молоко', 2, 80, getMultiplyPrice())

// Добавление в обёртку
box.append(nameInp, countInp, priceInp, addBtn)
container.append(title, box, list)
document.body.prepend(container)
