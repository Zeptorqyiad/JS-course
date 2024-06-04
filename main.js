// Заголовок
let title = document.createElement('h1')
title.classList.add('title-h1')
title.textContent = 'Привет, я заголовок'

// Описание
let desc = document.createElement('p')
desc.classList.add('desc-p', 'text')
desc.classList.remove('text')
desc.textContent = 'Привет, я параграф'

// Список
let counter = 0
let list = document.createElement('ul')

// counter++
// let listItem1 = document.createElement('li')
// listItem1.textContent = `Элемент ${counter}`

// counter++
// let listItem2 = document.createElement('li')
// listItem2.textContent = `Элемент ${counter}`

// counter++
// let listItem3 = document.createElement('li')
// listItem3.textContent = `Элемент ${counter}`
// list.append(listItem1, listItem2, listItem3)

// Текстовое поле
let textInp = document.createElement('input')
textInp.placeholder = 'Введите имя'
textInp.type = 'text'
textInp.value = ''

// Кнопка
let action = document.createElement('button')
action.textContent = 'Кнопка'

action.onclick = function () {
   counter++

   let inpText = textInp.value

   console.log(counter)
   title.textContent = 'Клик по кнопке'
   desc.classList.add('text')

   let listItem = document.createElement('li')
   listItem.textContent = `${counter}) ${inpText}`
   list.append(listItem)

   textInp.value = ''
}

document.body.append(title)
document.body.append(desc)
document.body.append(list)
document.body.append(textInp)
document.body.append(action)
