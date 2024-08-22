// Создание wrapper
let wrapper = document.createElement('wrapper')
wrapper.classList.add('wrapper')

// Возврат input FIO
let inputFIO = document.createElement('input')
inputFIO.type = 'text'
inputFIO.placeholder = 'Введите ФИО'

// Возврат input Tel
let inputNumber = document.createElement('input')
inputNumber.type = 'number'
inputNumber.placeholder = 'Введите номер'

// Создание двух блоков
let inputWrapper = document.createElement('div')
inputWrapper.classList.add('input__wrapper')

let title = document.createElement('h1')
title.classList.add('title')
title.textContent = 'Список студентов'

let completeWrapper = document.createElement('div')
completeWrapper.classList.add('complete__wrapper')

inputWrapper.append(title, inputFIO, inputNumber)

let telWrapper = document.createElement('p')
telWrapper.classList.add('tel__wrapper')
telWrapper.textContent = ''

let firstName = document.createElement('p')
firstName.classList.add('fio__list')
firstName.textContent = `Имя: `

let sureName = document.createElement('p')
sureName.classList.add('fio__list')
sureName.textContent = `Фамилия: `

let lastName = document.createElement('p')
lastName.classList.add('fio__list')
lastName.textContent = `Отчество: `

// Функция oninput
inputFIO.oninput = function () {
   let value = inputFIO.value.trim()

   let splitValue = value.split(' ')
}

// Создание общей коробки блока
completeWrapper.append(telWrapper, firstName, sureName, lastName)
wrapper.append(inputWrapper, completeWrapper)

document.body.append(wrapper)
