function getToggleButton(text, onFn, offFn) {
   let buttonEl = document.createElement('button')
   buttonEl.textContent = text

   buttonEl.onclick = function () {
      if (buttonEl.classList.contains('active')) {
         buttonEl.classList.remove('active')
         offFn()
         return
      }
      buttonEl.classList.add('active')
      onFn()
   }

   return buttonEl
}

let toggleButtonEl = getToggleButton(
   'Включить',
   function () {
      console.log('Вкл')
   },
   function () {
      console.log('Выкл')
   }
)

let toggleThemeButtonEl = getToggleButton(
   'Тема',
   function () {
      document.body.classList.add('night')
   },
   function () {
      document.body.classList.remove('night')
   }
)

document.body.append(toggleButtonEl, toggleThemeButtonEl)
