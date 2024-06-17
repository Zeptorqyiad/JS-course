// Создать текстовое поле
function getInput(placeholder, type, className) {
   let input = document.createElement('input')
   input.placeholder = placeholder
   input.type = type
   input.classList.add(className)
   return input
}

// Создать блок для текстовых полей
let box = document.createElement('div')
box.classList.add('box')

// Создать заголовок
let title = document.createElement('h1')
title.classList.add('title')
title.textContent = 'Регистрация'

// Создаем полей для имени
let surnameInp = getInput('Фамилия', 'text', 'text-field')
let nameInp = getInput('Имя', 'text', 'text-field')
let ageInp = getInput('Возраст', 'number', 'text-field')
let emailInp = getInput('Почта', 'email', 'text-field')
let passwordInp = getInput('Пароль', 'password', 'text-field')

// Создание согласия с условиями
let conditionLabel = document.createElement('label')
conditionLabel.classList.add('condition')
let conditionInp = document.createElement('input')
conditionInp.type = 'checkbox'
let conditionSpan = document.createElement('span')
conditionSpan.textContent = 'Согласны с условиями?'

conditionLabel.append(conditionInp, conditionSpan)

// Создаем кнопки
let regBtn = document.createElement('button')
regBtn.classList.add('btn')
regBtn.textContent = 'Регистрация'

regBtn.onclick = function () {
	// Получаем значения
	let nameValue

   alert('Поздравляю с успешной регистрацией')
}

box.append(
   title,
   surnameInp,
   nameInp,
   ageInp,
   emailInp,
   passwordInp,
   conditionLabel,
   regBtn
)

document.body.append(box)
