function getInput(placeholder, type) {
   let input = document.createElement('input')
   input.placeholder = placeholder
   input.type = type
   return input
}

let box = document.createElement('div')
box.classList.add('box')

box.append(getInput('Имя', 'text'))

document.body.append(box)
