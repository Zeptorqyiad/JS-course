document.write('<div class="container">')
document.write('<h1 class="main-title">Приготовление пельменей</h1>')
let index = 0
document.write('<ul class="list">')

function myFn(className, text) {
   index++
   document.write(`<li class="list__item ${className}">`)
   document.write(`<span class="list__index">${index}</span>`)
   document.write(`<p class="list__text">${text}</p> `)
   document.write(`</li>`)
}

myFn('', 'Налейте в кастрюлю воду')
myFn('', 'Достаньте из холодильника пельмени')
myFn(
   'list__item_warning',
   'Забросьте пельмени в горячую воду. ОСТОРОЖНО, НЕ ОБОЖГИТЕСЬ!'
)
myFn('', 'Посолите и поперчите по вкусу')
myFn('', 'Ждите готовности')
myFn('list__item_finish', 'Приятного аппетита!')
