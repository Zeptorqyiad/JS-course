// В этой программе существует функция для создания текстового поля с настройкой типа,
//  плейсхолдера и обработчика события ввода текста.Внимательно изучите предложенный код.

// Добавьте в функцию getInput() четвертый параметр оnClean, в который будет
// передаваться коллбек - функция, вызываемая в момент очистки текстового поля.
// Добавьте вызов оnClean() в теле функции.

// Доработайте вызов функции getInput() так, что бы при очистке текстового поля под
// текстовым полем отображалось сообщение "Текстовое поле пустое!".
// То есть нужно передать функцию в параметр оnClean.

function getInput(type, placeholder, onFill, onClean) {
   let inputEl = document.createElement('input')
   inputEl.type = type
   inputEl.placeholder = placeholder

   inputEl.oninput = function () {
      if (inputEl.value.trim() === '') {
         onClean()
         return
      }

      onFill()
   }

   return inputEl
}

let textEl = document.createElement('div')
let myInputEl = getInput(
   'text',
   'Текст',
   function () {
      textEl.textContent = 'Текстовое поле заполнено!'
   },
   function () {
      textEl.textContent = 'Текстовое поле пустое!'
   }
)

document.body.append(myInputEl, textEl)
