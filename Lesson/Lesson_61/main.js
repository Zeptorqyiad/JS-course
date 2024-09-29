// let fn = function (event) {
//    let buttonEl = event.target
//    buttonEl.classList.add('green')
//    console.log(event.target)
// }

// for (let i = 1; i <= 10; i++) {
//    let buttonEl = document.createElement('button')
//    buttonEl.textContent = `Кнопка ${i}`
//    document.body.append(buttonEl)

//    buttonEl.onclick = fn
// }

let logFn = function (event) {
   event.preventDefault()
   console.log('Клик по ссылке')
}

let linkEl = document.createElement('a')
linkEl.textContent = 'Ссылка'
linkEl.href = '##'

linkEl.onclick = logFn

document.body.append(linkEl)
