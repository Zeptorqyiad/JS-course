let counter = 0
let container = document.createElement('div')

let title = document.createElement('h1')
title.textContent = 'Что я узнал в видео'

let list = document.createElement('ul')
counter++
let listItem1 = document.createElement('li')
listItem1.textContent = `${counter}) Как создавать HTML-элементы`
counter++
let listItem2 = document.createElement('li')
listItem2.textContent = `${counter}) Узнал, как добавлять текст и HTML-код в элемент`
counter++
let listItem3 = document.createElement('li')
listItem3.textContent = `${counter}) Как добавлять и удалять классы`
counter++
let listItem4 = document.createElement('li')
listItem4.textContent = `${counter}) Узнал, как вложить один элемент в другой`
counter++
let listItem5 = document.createElement('li')
listItem5.textContent = `${counter}) Узнал, что такое событие и обработчик события`
counter++
let listItem6 = document.createElement('li')
listItem6.textContent = `${counter}) Как назначить обработчик события`

list.append(listItem1, listItem2, listItem3, listItem4, listItem5, listItem6)

document.body.prepend(container)
container.append(title, list)
