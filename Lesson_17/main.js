// Создание коробки
let container = document.createElement('div')
container.classList.add('container')
let title = document.createElement('h1')
title.textContent = 'Планер на день'
title.classList.add('title__text')

// Создание счетчика
let counter = 0

// Создание блока input и button
let blockInp = document.createElement('div')
blockInp.classList.add('block__inp')

let input = document.createElement('input')
input.classList.add('input')
input.placeholder = 'Введите задачу'
input.type = 'text'
input.value = ''

let button = document.createElement('button')
button.classList.add('btn')
button.textContent = 'Создать задачу'
button.type = 'submit'

let list = document.createElement('ul')

// Функция получения данных
function getWork(task) {
   counter++
   // Добавление списка задач
   let listItem = document.createElement('li')
   let itemText = document.createElement('p')
   itemText.classList.add('do__task')

   // Вывод задачи
   itemText.textContent = `${counter}. ${task}`

   // Создание коробки list
   list.append(listItem)
   listItem.append(itemText, blockBtn)
   return listItem
}

// Функция отправки задачи
button.onclick = function () {
   let task = input.value
   let newTask = getWork(task)
   list.append(newTask)
   input.value = ''
}

// Функция создания кнопок
function getButton(text, classList, type = '') {
   let buttonList = document.createElement('button')

   buttonList.textContent = text
   buttonList.classList.add(classList)
   buttonList.type = type

   return buttonList
}

// Дополнительные кнопки в списке задач
let blockBtn = document.createElement('div')
blockBtn.classList.add('action__block')

// Кнопка выполнения задачи
let actionDo = getButton('Выполнить', 'complete__btn')

// Кнопка изменения текста задачи
let renameBtn = getButton('Изменить', 'action__btn')

// Кнопка удаления задачи
let deleteBtn = getButton('Удалить', 'action__btn', 'sumbit')

// Количетсво выполненных задач
let blockTextCounter = document.createElement('p')
blockTextCounter.classList.add('block__text')
blockTextCounter.textContent = `У вас ${counter} задач на сегодня`

// Вывод коробки
document.body.prepend(container)
container.append(title, blockInp, blockTextCounter, list)
blockInp.append(input, button)
blockBtn.append(actionDo, renameBtn, deleteBtn)
