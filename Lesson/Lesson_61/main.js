let brushEl = document.createElement('div')
brushEl.classList.add('brush')
brushEl.hidden = true

document.addEventListener('mouseover', function () {
   brushEl.hidden = false
})
document.addEventListener('mouseout', function () {
   brushEl.hidden = true
})
document.addEventListener('mousemove', function (e) {
   brushEl.style.left = `${e.clientX}px`
   brushEl.style.top = `${e.clientY}px`

   if (e.buttons === 1) {
      let paintEl = document.createElement('div')
      paintEl.classList.add('paint')

      paintEl.style.left = `${e.clientX}px`
      paintEl.style.top = `${e.clientY}px`

      document.body.append(paintEl)
   }
})

document.addEventListener('mousedown', function () {
   brushEl.style.scale = '0.8'
})
document.addEventListener('mouseup', function () {
   brushEl.style.scale = '1'
})

document.body.append(brushEl)
