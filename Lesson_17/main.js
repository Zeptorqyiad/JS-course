// Создание коробки
let container = document.createElement('div')
let title = document.createElement('h1')
title.textContent = 'Планер на день'
title.classList.add('title__text')

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

// Функция возврата strong формата
function getStrong(text) {
   return `<strong>${text}</strong>`
}

// Функция получения данных
function getWork() {
	
}

// Вывод коробки
document.body.prepend(container)
container.append(title, blockInp)
blockInp.append(input, button)
