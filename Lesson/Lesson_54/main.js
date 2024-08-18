// В этом небольшом приложении реализован интерфейс отправки сообщения.
// Пока сообщение никуда не отправляется, но оно уже отображается под блоком ввода.
// При отправке сообщения происходит проверка текста на наличие ссылок(на наличие слова http),
// 	если пользователь добавил в текст ссылку, отображается сообщение с ошибкой
// "В тексте не должно быть ссылок!".

// 1) Добавьте автоматическое удаления всех слов http в тексте при отправке сообщения.
// Это действие сделает ссылки нерабочими.

// 2) Добавьте проверку наличия ссылок (слова http) при вводе текста, что бы пользователь приложения
// сразу понял, что ввел недопустимое слово.

// Функция, возвращающая новую кнопку
function getButton(text) {
   let buttonEl = document.createElement('button')
   buttonEl.textContent = text
   return buttonEl
}

// Обёртка для текстового поля и ошибки
let wrapperEl = document.createElement('div')
wrapperEl.classList.add('wrapper')

let errorEl // Переменная для элемента ошибки

// Создание ошибки
function createError(text) {
   errorEl = document.createElement('span')
   errorEl.classList.add('error')
   errorEl.textContent = text
   wrapperEl.append(errorEl)
}

// Заголовок
let titleEl = document.createElement('h1')
titleEl.textContent = 'Сообщение'

// Создание текстового поля
let msgTextEl = document.createElement('textarea')
msgTextEl.placeholder = 'Cообщение'

let sendBtnEl = getButton('Отправить сообщение') // Кнопка отправки сообщения

wrapperEl.append(msgTextEl)

msgTextEl.oninput = function () {
   let textValue = msgTextEl.value.trim()

   if (errorEl) {
      errorEl.remove()
   }
   if (textValue.includes('http')) {
      createError('В тексте не должно быть ссылок!')
   }
}

let resultTextEl = document.createElement('p') // Текст отправленного сообщения
resultTextEl.classList.add('result')

sendBtnEl.onclick = function () {
   // Удаление ошибки, если она уже существует
   let textValue = msgTextEl.value.trim()
   if (errorEl) {
      errorEl.remove()
   }
   // Создание ошибки, если в тексте есть ссылка
   if (textValue.includes('http')) {
      createError('В тексте не должно быть ссылок!')
   }

   resultTextEl.textContent = textValue.replaceAll('http', '')
}

document.body.append(titleEl, wrapperEl, sendBtnEl, resultTextEl)
