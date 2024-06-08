let content = document.createElement('div')
let title = document.createElement('h1')
title.textContent = 'Список студентов'
let blockInp = document.createElement('div')

// Функция возврата input
function getInput(placeholder, type = 'text') {
   let input = document.createElement('input')
   input.placeholder = placeholder
   input.type = type
   return input
}

// Создание input
let inpName = getInput('Имя')
let inpYear = getInput('Возраст', 'number')
let inpHeight = getInput('Рост', 'number')
let button = document.createElement('button')
button.type = 'submit'
button.textContent = 'Добавить студента'

// Создание таблицы
let table = document.createElement('table')
let tHead = document.createElement('thead')
let tr = document.createElement('tr')
let nameTh = document.createElement('th')
nameTh.textContent = 'Имя'

let yearTh = document.createElement('th')
yearTh.textContent = 'Возраст'

let heightTh = document.createElement('th')
heightTh.textContent = 'Рост'

let actionTh = document.createElement('th')
actionTh.textContent = 'Удалить'

let tBody = document.createElement('tbody')

// Создание таблицы
table.append(tHead, tBody)
tHead.append(tr)
tr.append(nameTh, yearTh, heightTh, actionTh)

// Функция вывода данных в таблицу
function getStudentTr(name, age, height) {
   let studentTr = document.createElement('tr')
   let nameTd = document.createElement('td')
   let ageTd = document.createElement('td')
   let heightTd = document.createElement('td')
   let removeTd = document.createElement('td')

   let actionBtn = document.createElement('button')
   actionBtn.textContent = 'Удалить'

   tBody.append(studentTr)
   studentTr.append(nameTd, ageTd, heightTd, removeTd)
   removeTd.append(actionBtn)

   actionBtn.onclick = function () {
      studentTr.remove()
   }

   nameTd.textContent = name
   ageTd.textContent = age
   heightTd.textContent = height

   return studentTr
}

// Создание обработчика события для кнопки добавления
button.onclick = function () {
   let name = inpName.value
   let age = Number(inpYear.value)
   let height = Number(inpHeight.value)

   // Добавляем новый tr студентов
   let newStudentTr = getStudentTr(name, age, height)
   tBody.append(newStudentTr)

   // Очищая поле текста
   inpName.value = ''
   inpYear.value = ''
   inpHeight.value = ''
}

// Стилизация
blockInp.classList.add('add-box')

// Конструкция вывода
document.body.prepend(content)
content.append(title, blockInp, table)
blockInp.append(inpName, inpYear, inpHeight, button)
