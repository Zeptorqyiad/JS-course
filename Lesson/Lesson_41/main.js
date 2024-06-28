// Создание массивов
let productArray = []
let priceArray = []

// Счетчик
let index = 1

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
   let strongText = document.createElement('strong')
   strongText.append(text)
   strongText.classList.add('strong-text')
   return strongText
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

// Создание блока общей стоимости корзины
let backet = document.createElement('div')
backet.classList.add('backet')
let backetText = document.createElement('p')
backetText.classList.add('backet-text')
backetText.textContent = 'Итоговая стоимость:'
let backetValue = document.createElement('p')
backetValue.classList.add('backet-value')
backetValue.textContent = 0
backet.append(backetText, backetValue)

let listText = document.createElement('p')

if (productArray.length === 0) {
   listText.textContent = 'Положите ваш первый товар в корзину!'
   listText.classList.add('list-text')
} else {
   listText.style.display = 'none'
}

function getItem(index, name, count, price, totalPrice) {
   let itemList = document.createElement('li')
   itemList.classList.add('item-list')

   // Создание блока названия товара
   let nameBox = document.createElement('div')
   nameBox.classList.add('name-box')
   let nameBoxText = document.createElement('p')
   nameBoxText.textContent = 'Название'
   nameBoxText.classList.add('text')
   let nameValue = getStrong(name)
   nameBox.append(nameBoxText, nameValue)

   // Создание блока количества товара
   let countBox = document.createElement('div')
   countBox.classList.add('count-box')
   let countBoxText = document.createElement('p')
   countBoxText.textContent = 'Кол-во'
   countBoxText.classList.add('text')
   let countValue = document.createElement('p')
   countValue.textContent = `${count} шт.`
   countBox.append(countBoxText, countValue)

   // Создание блока цены товара
   let priceBox = document.createElement('div')
   priceBox.classList.add('price-box')
   let priceBoxText = document.createElement('p')
   priceBoxText.textContent = 'Цена'
   priceBoxText.classList.add('text')
   let priceValue = document.createElement('p')
   priceValue.textContent = `${price} руб.`
   priceBox.append(priceBoxText, priceValue)

   // Создание блока общей суммы товара
   let totalPriceBox = document.createElement('div')
   totalPriceBox.classList.add('price-box')
   let totalPriceBoxText = document.createElement('p')
   totalPriceBoxText.textContent = 'Общая цена'
   totalPriceBoxText.classList.add('text')
   let totalPriceValue = document.createElement('p')
   totalPriceValue.textContent = `${totalPrice} руб.`
   totalPriceBox.append(totalPriceBoxText, totalPriceValue)

   // Создание массива для корзины
   priceArray.push(totalPrice)
   let sum = 0
   for (let i = 0; i < priceArray.length; i++) {
      sum += priceArray[i]
   }
   backetValue.textContent = `${sum} руб.`

   // Создание блока кнопок изменения и удаления товара
   let renameBtn = getButton('submit', 'Изменить', 'rename-btn')
   let removeBtn = getButton('', 'Удалить', 'remove-btn')
   let blockBtn = document.createElement('div')
   blockBtn.classList.add('btn-block')

   // Кнопка удаления товара
   removeBtn.onclick = function () {
      priceArray.splice(index, 1) // Удаляем элемент из массива
   }

   // Добавление общей структуры всех блоков
   itemList.append(index, nameBox, countBox, priceBox, totalPriceBox, blockBtn)
   blockBtn.append(renameBtn, removeBtn)
   list.append(itemList)
   return itemList
}

addBtn.onclick = function () {
   // Присваивание значений value в полях ввода
   let nameInpValue = nameInp.value
   let countInpValue = Number(countInp.value)
   let priceInpValue = Number(priceInp.value)

   productArray.push(nameInpValue)

   // Проверка валидности полей ввода
   if (nameInpValue === '') {
      alert('Вы не ввели название товара')
      return
   }
   if (countInpValue === 0 || countInpValue === '') {
      alert('Введите количество товара')
      return
   }
   if (priceInpValue === 0 || priceInpValue === '') {
      alert('Введите цену товара')
      return
   }

   // Создание списка при вызове функции getItem
   getItem(
      index++,
      nameInpValue,
      countInpValue,
      priceInpValue,
      getMultiplyPrice()
   )

   // Очищение поля input
   nameInp.value = ''
   countInp.value = ''
   priceInp.value = ''
}

// Добавление в обёртку
box.append(nameInp, countInp, priceInp, addBtn)
container.append(title, box, listText, list, backet)
document.body.prepend(container)
