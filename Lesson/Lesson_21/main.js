// Функция возвращает карточку названия и суммарной стоимости товара
function getProductCard(product, totalPrice, className = '') {
   let productCard = document.createElement('h1')

   // Если className равен "discount", меняем стиль карточки, что бы показать примененную скидку
   if (className === 'discount') {
      productCard.classList.add('discount')
   } else {
      productCard.classList.add('product-card')
   }

   productCard.textContent = `Общая стоимость "${product}" - ${totalPrice} рублей`
   return productCard
}

// Ввод данных из prompt()
let product = prompt('Введите название товара')
let count = Number(prompt('Введите кол-во товара в корзине'))
let price = Number(prompt('Введите стоимость товара'))

let totalPrice = count * price // Расчет суммарной стоимости покупки

// Проверка условий скидки
if (totalPrice >= 3000 && count > 3) {
   // Применяем скидку 500 рублей
   let discountPrice = totalPrice - 500

   // Создаем карточку
   let card = getProductCard(product, discountPrice, 'discount')
   document.body.append(card)
} else {
   // Создаем карточку
   let card = getProductCard(product, totalPrice)
   document.body.append(card)
}
