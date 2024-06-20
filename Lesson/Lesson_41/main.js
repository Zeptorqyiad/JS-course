// Создание массивов
let productArray = []
let priceArray = []

// Счетчик
let index = 0

// Создание функции возврата input
function getInput(placeholder, className, type) {
   let input = document.createElement('input')
   input.placeholder = placeholder
   input.classList.add(className)
	input.type = type
	return input
}

