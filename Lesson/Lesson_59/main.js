// Внимательно изучите код этого небольшого веб-приложения для обработки текста,
// и проверьте его работу в браузере.

// В этой программе используется метод, который вам не приходилось ранее применять - массив функций.
// Функции являются ссылочными типами данных, а это значит, что ссылки на них можно хранить в массиве и
// делать их вызов прямо в цикле.Это открывает возможности применять интересные приёмы.Например, добавлять
//  настраиваемую пользователем обработку текста.

// Сейчас в приложении есть обработчик, делающий буквы строчными и обработчик, удаляющий из текста
// все точки.Каждый обработчик добавляется в массив функций при клике на соответствующую кнопку.

// Добавьте  в приложение третью кнопку для создания обработчика, выполняющего поиск с выделением
// нужного фрагмента текста.

// Функция, возвращающая новую кнопку
function getButton(text, onClick) {
   let buttonEl = document.createElement('button')
   buttonEl.textContent = text

   buttonEl.onclick = function () {
      onClick(buttonEl)
   }

   return buttonEl
}

// Функция, возвращающая новое поле textarea
function getTextarea(placeholder, onInput) {
   let textareaEl = document.createElement('textarea')
   textareaEl.placeholder = placeholder

   textareaEl.oninput = onInput

   return textareaEl
}

// Массив коллбек-функций
let actionsArr = []

// Обёртка для текстового поля и результата
let wrapperTextEl = document.createElement('div')

// Обёртка для кнопок
let wrapperButtonsEl = document.createElement('div')

let resultEl = document.createElement('p') // Элемент для результата

function renderText(value) {
   let result = value

   // Запуск коллбек-функций из массива
   for (let fn of actionsArr) {
      result = fn(result)
   }

   resultEl.innerHTML = result
}

// Текстовое поле
let textEl = getTextarea('Текст', function () {
   renderText(textEl.value) // Запуск отрисовки
})

// Кнопка преобразования в нижний регистр
let addLowerCaseBtnEl = getButton(
   'Сделать буквы строчными',
   function (buttonEl) {
      buttonEl.classList.add('action')

      // Функция обработки текста
      let fn = function (text) {
         return text.toLowerCase()
      }

      actionsArr.push(fn) // Добавить функцию обработки в массив

      renderText(textEl.value) // Запуск отрисовки
   }
)

// Кнопка удаления точек
let addRemoveDotsBtnEl = getButton('Удалить точки', function (buttonEl) {
   buttonEl.classList.add('action')

   // Функция обработки текста
   let fn = function (text) {
      return text.replaceAll('.', '')
   }

   actionsArr.push(fn) // Добавить функцию обработки в массив

   renderText(textEl.value) // Запуск отрисовки
})

let search = ''
let searchBtnEl = getButton('Поиск', function (buttonEl) {
   buttonEl.classList.add('action')

   // Функция поиска текста
   search = prompt('Найти')

   let fn = function (text) {
      return text.replaceAll(search, `<span class="find">${search}</span>`)
   }

   actionsArr.push(fn) // Добавить функцию обработки в массив

   renderText(textEl.value) // Запуск отрисовки
})

// Кнопка сброса
let resetBtnEl = getButton('Сбросить', function (buttonEl) {
   actionsArr = [] // Сброс массива

   // Сброс стилей
   addLowerCaseBtnEl.classList.remove('action')
   addRemoveDotsBtnEl.classList.remove('action')
   searchBtnEl.classList.remove('action')

   renderText(textEl.value) // Запуск отрисовки
})
resetBtnEl.classList.add('reset')

wrapperTextEl.append(textEl, resultEl)
wrapperButtonsEl.append(
   addLowerCaseBtnEl,
   addRemoveDotsBtnEl,
   searchBtnEl,
   resetBtnEl
)

document.body.append(wrapperTextEl, wrapperButtonsEl)
