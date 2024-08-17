let inputEl = document.createElement('input')
inputEl.type = 'text'

let str = `JavaScript - это язык программирования, всё отлично работает в JavaScript`

let textEl = document.createElement('p')
textEl.textContent = str

inputEl.oninput = function () {
   let value = inputEl.value.trim()

   if (value !== '') {
      let highLightStr = `<span class="highlight">${value}</span>`

      textEl.innerHTML = str.replaceAll(value, highLightStr)
   } else {
      textEl.textContent = str
   }
}

document.body.append(inputEl, textEl)
