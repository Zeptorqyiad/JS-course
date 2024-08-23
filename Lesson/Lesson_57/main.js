// В предложенном коде существует функция создания кнопки с параметром onClick для добавления обработчика события клика,
// но в программе есть ошибки.Внимательно её изучите.

// Ваши задачи:
// 1) Исправить код так, чтобы передаваемая функция в onClick вызывалась только при клике по кнопке.
// 2) Упростить код, сделав его короче.

function getButton(text) {
   let buttonEl = document.createElement('button')
   buttonEl.textContent = text

   buttonEl.onclick = function () {
      alert('Клик по кнопке!')
   }

   return buttonEl
}

let myButtonEl = getButton('Моя кнопка')

document.body.append(myButtonEl)
