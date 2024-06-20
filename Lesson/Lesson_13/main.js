let i = 0

let container = document.createElement('div')
container.classList.add('container')

let title = document.createElement('h1')
title.classList.add('main-title')
title.textContent = 'Достижения в изучении Javascript'

let list = document.createElement('ul')
list.classList.add('list')

// Создание функции
function getListItem(index, text) {
   let item = document.createElement('li')
   item.classList.add('list__item')

   let listIndex = document.createElement('span')
   listIndex.classList.add('list__index')
   listIndex.textContent = index

   let listDesc = document.createElement('p')
   listDesc.classList.add('list__desc')
   listDesc.textContent = text

   item.append(listIndex, listDesc)
   return item
}

// Список li
i++
let listItem1 = getListItem(i, 'Знаю, что такое вывод и ввод информации')
i++
let listItem2 = getListItem(i, 'Знаю о способах вывода информации')
i++
let listItem3 = getListItem(i, 'Знаю, что такое числа, строки, и переменные')
i++
let listItem4 = getListItem(i, 'Умею создавать функции и пользоваться ими')
i++
let listItem5 = getListItem(
   i,
   'Учусь создавать HTML - элементы с помощью встроенных функций'
)

list.append(listItem1, listItem2, listItem3, listItem4, listItem5)
document.body.prepend(container)
container.append(title, list)
