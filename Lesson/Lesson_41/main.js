// Создание массивов
let productArray = []
let priceArray = []

// Счетчик
let index = 0

let title = document.createElement('h1')
title.textContent = 'Чек покупки'

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
// box.classList.add('')

// Создание input
let nameInp = getInput('Название товара', 'inp', 'text')
let countInp = getInput('Количество', 'inp', 'number')
let priceInp = getInput('Цена', 'inp', 'number')

// Создание кнопки добавления
let addBtn = document.createElement('button')
addBtn.textContent = 'Добавить'

addBtn.onclick = function () {
   index++
   let itemList = document.createElement('li')
   // itemList.textContent = `${index}`
   let nameInpValue = nameInp.value
   let countInpValue = countInp.value
   let priceInpValue = priceInp.value

   itemList.append(nameInpValue, countInpValue, priceInpValue)
   list.append(itemList)
   return itemList
}

// Создание листа покупок
let list = document.createElement('ul')
// list.classList.add('')

// Добавление в обёртку
box.append(nameInp, countInp, priceInp, addBtn)
document.body.append(title, box, list)
