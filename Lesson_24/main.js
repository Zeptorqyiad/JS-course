// Функция, возвращающая новую кнопку
function getButton(text, className = '') {
   let button = document.createElement('button')
   button.textContent = text
   button.classList.add(className)
   return button
}

// Функция, возвращающая новый input
function getInput(type, placeholder, className = '') {
   let input = document.createElement('input')
   input.classList.add(className)
   input.type = type
   input.placeholder = placeholder
   return input
}

// Функция, возвращающая новую группу собак
function getNewGroup(title, className) {
   let groupBox = document.createElement('div')
   groupBox.classList.add('group-box', className)

   let groupTitle = document.createElement('h2')
   groupTitle.classList.add('group-box__title')
   groupTitle.textContent = title

   groupBox.append(groupTitle)

   return groupBox
}

// Функция, возвращающая карточку собаки
function getDogCard(dogName, dogWeight) {
   let dogCard = document.createElement('div')
   dogCard.classList.add('dog-card')
   dogCard.textContent = `${dogName}, вес: ${dogWeight} кг`
   return dogCard
}

// Заголовок
let title = document.createElement('h1')
title.classList.add('main-title')
title.textContent = 'Собаки в приюте'

// Блок для текстовых полей и кнопки
let addBox = document.createElement('div')
addBox.classList.add('add-box')

// Создание текстовых полей и кнопки
let dogNameInp = getInput('text', 'Кличка', 'add-box__inp')
let dogWeightInp = getInput('number', 'Вес', 'add-box__inp')
let addBtn = getButton('Добавить собаку', 'add-box__btn')

addBox.append(dogNameInp, dogWeightInp, addBtn) // Добавление в addBox

// Создание блока обертки
let wrap = document.createElement('div')
wrap.classList.add('wrap-box')

// Создание группы до 5 кг
let dogGroup1 = getNewGroup('Собаки до 5 кг', 'group-box_green')

// Создание группы от 5 кг до 10
let dogGroup2 = getNewGroup('Собаки от 5 кг до 10 кг', 'group-box_blue')

// Создание группы от 10 кг
let dogGroup3 = getNewGroup('Собаки от 5 кг до 10 кг', 'group-box_orange')

// Добавление собаки в группу
addBtn.onclick = function () {
   let dogNameValue = dogNameInp.value
   let dogWeightValue = Number(dogWeightInp.value)

   if (dogWeightValue <= 5) {
      let newDog = getDogCard(dogNameValue, dogWeightValue)
      dogGroup1.append(newDog)
   }

   if (dogWeightValue > 5 && dogWeightValue <= 10) {
      let newDog = getDogCard(dogNameValue, dogWeightValue)
      dogGroup2.append(newDog)
   }

   if (dogWeightValue > 10) {
      let newDog = getDogCard(dogNameValue, dogWeightValue)
      dogGroup3.append(newDog)
   }

   dogNameInp.value = ''
   dogWeightInp.value = ''
}

wrap.append(dogGroup1, dogGroup2, dogGroup3)
document.body.append(title, addBox, wrap)
