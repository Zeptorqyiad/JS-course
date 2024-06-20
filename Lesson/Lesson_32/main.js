for (let index = 1; index <= 3; index++) {
   let title = document.createElement(`h${index}`)
   title.textContent = `Заголовок H${index}`
   document.body.append(title)
}
