let colorsArr = [
   {
      title: 'Красный',
      class: 'red',
   },
   {
      title: 'Оранжевый',
      class: 'orange',
   },
   {
      title: 'Синий',
      class: 'blue',
   },
   {
      title: 'Зелёный',
      class: 'green',
   },
   {
      title: 'Фиолетовый',
      class: 'violet',
   },
]
let activeButtonEl

function getColorButton(color) {
   let buttonEl = document.createElement('button')
   buttonEl.textContent = color.title
   buttonEl.classList.add('btn', color.class)

   buttonEl.onclick = function () {
      if (activeButtonEl) {
         activeButtonEl.classList.remove('active')
      }

      buttonEl.classList.add('active')
      activeButtonEl = buttonEl
   }

   return buttonEl
}

let titleEl = document.createElement('h1')
titleEl.textContent = 'Выбор цвета'

document.body.append(titleEl)

for (let color of colorsArr) {
   document.body.append(getColorButton(color))
}
