'use strict'

let boxEl = document.createElement('div')
boxEl.classList.add('box')
boxEl.textContent = ` мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама мама`

boxEl.addEventListener('scroll', function (e) {
   console.log(e.target.scrollTop)
})

let scrollTopBtnEl = document.createElement('button')
scrollTopBtnEl.textContent = 'Вверх'

scrollTopBtnEl.addEventListener('click', function () {
   boxEl.scrollTo({
      top: 0,
      behavior: 'smooth',
   })
})

window.addEventListener('resize', function () {
   console.log(window.innerWidth)
   console.log(window.innerHeight)
})

document.body.append(boxEl, scrollTopBtnEl)
