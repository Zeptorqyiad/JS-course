function getStrong(text) {
   return `<strong>${text}</strong>`
}

function printProduct(productName, count, price, index = 0) {
   let totalPrice = count * price
   document.write(`
	<p>
	${getStrong(productName)}, кол-во: ${getStrong(count)}, цена: ${getStrong(
      price
   )} руб. , общая стоимость: ${getStrong(totalPrice)} руб.
	</p>
	`)
   return totalPrice
}
let total = 0
let index = 0

total =
   total +
   printProduct(
      prompt('Введите товар'),
      prompt('Введите кол-во'),
      prompt('Введите стоимость')
   )
total =
   total +
   printProduct(
      prompt('Введите товар'),
      prompt('Введите кол-во'),
      prompt('Введите стоимость')
   )
total =
   total +
   printProduct(
      prompt('Введите товар'),
      prompt('Введите кол-во'),
      prompt('Введите стоимость')
   )
total =
   total +
   printProduct(
      prompt('Введите товар'),
      prompt('Введите кол-во'),
      prompt('Введите стоимость')
   )

console.log(total / index)
