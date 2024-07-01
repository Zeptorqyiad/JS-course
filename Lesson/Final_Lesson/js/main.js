// Массив КАТАЛОГА товаров
let catalogArr = [
   {
      title: 'iPhone 14 Pro',
      price: 110000,
      desc: 'Смартфон Apple iPhone 14 Pro 128GB',
      img: 'img/1.jpg',
   },
   {
      title: 'AirPods Pro',
      price: 2100,
      desc: 'Наушники Apple AirPods Pro (2-го поколения, 2022)',
      img: 'img/2.jpg',
   },
   {
      title: 'Чехол iPhone 14 Pro',
      price: 1200,
      desc: 'Чехол для Apple iPhone 14 Pro - желтый',
      img: 'img/3.jpg',
   },
]

// Массив КОРЗИНЫ
let basketArr = []

// ----- КАТАЛОГ -----

// Функция, возвращающая карточку товара для КАТАЛОГА
function getProductCatalogCard(product) {
   let productItem = document.createElement('li')
   productItem.classList.add('products-catalog__item')

   let productImg = document.createElement('img')
   productImg.classList.add('products-catalog__img')
   productImg.src = product.img

   let productItemBottom = document.createElement('div')
   productItemBottom.classList.add('products-catalog__item-bottom')

   let productTitle = document.createElement('h2')
   productTitle.classList.add('products-catalog__title')
   productTitle.textContent = product.title

   let productDesc = document.createElement('p')
   productDesc.classList.add('products-catalog__desc')
   productDesc.textContent = product.desc

   let productPrice = document.createElement('strong')
   productPrice.classList.add('products-catalog__price')
   productPrice.textContent = `${product.price} руб`

   let addBasket = document.createElement('button')
   addBasket.classList.add('products-catalog__add-basket')
   addBasket.textContent = '+ В корзину'

   addBasket.onclick = function () {
      // Добавляем объект товара в массив КОРЗИНЫ
      basketArr.push(product)
      renderBasket(basketArr) // Запускаем перерисовку КОРЗИНЫ
   }

   productItemBottom.append(productTitle, productDesc, productPrice, addBasket)
   productItem.append(productImg, productItemBottom)
   return productItem
}

let title = document.createElement('h1') // Заголовок
title.classList.add('main-title')
title.textContent = 'Каталог'

let productsCatalog = document.createElement('ul') // Список КАТАЛОГА
productsCatalog.classList.add('products-catalog')

// Функция отрисовки КАТАЛОГА
function renderCatalog(arr) {
   productsCatalog.innerHTML = ''

   for (let i = 0; i < arr.length; i++) {
      productsCatalog.append(getProductCatalogCard(arr[i]))
   }
}

// Отрисовка КАТАЛОГА при первой загрузке страницы
renderCatalog(catalogArr)

// ----- КОРЗИНА -----

// Функция, возвращающая карточку товара для КАТАЛОГА
function getProductBasketCard(index, product) {
   let productItem = document.createElement('li')
   productItem.classList.add('products-basket__item')

   let productImg = document.createElement('img')
   productImg.classList.add('products-basket__img')
   productImg.src = product.img

   let productItemBottom = document.createElement('div')
   productItemBottom.classList.add('products-basket__item-right')

   let productItemInfo = document.createElement('div')
   productItemInfo.classList.add('products-basket__item-info')

   let productTitle = document.createElement('h2')
   productTitle.classList.add('products-basket__title')
   productTitle.textContent = product.title

   let productPrice = document.createElement('strong')
   productPrice.classList.add('products-basket__price')
   productPrice.textContent = `${product.price} руб`

   let removeBasket = document.createElement('button')
   removeBasket.classList.add('products-basket__remove-btn')
   removeBasket.textContent = 'Удалить'

   removeBasket.onclick = function () {
      // Добавляем объект товара в массив корзины
      basketArr.splice(index, 1)
      renderBasket(basketArr) // Запускаем перерисовку корзины
   }

   productItemInfo.append(productTitle, productPrice)
   productItemBottom.append(productItemInfo, removeBasket)
   productItem.append(productImg, productItemBottom)
   return productItem
}

let basket = document.createElement('div') // Блок корзины
basket.classList.add('basket')

let openBasketBtn = document.createElement('button') // Кнопка корзины
openBasketBtn.classList.add('open-basket-btn')

openBasketBtn.onclick = function () {
   // Показываем / скрываем корзину
   if (openBasketBtn.classList.contains('open-basket-btn_show') === false) {
      openBasketBtn.classList.add('open-basket-btn_show')
      basket.classList.add('basket_show')
   } else {
      openBasketBtn.classList.remove('open-basket-btn_show')
      basket.classList.remove('basket_show')
   }
}

let productsBasket = document.createElement('ul') // Список КОРЗИНЫ
productsBasket.classList.add('products-basket')

let orderBtn = document.createElement('button') // Кнопка оформления заказа
orderBtn.classList.add('order-btn')
orderBtn.textContent = 'Заказать на сумма 0 руб'

orderBtn.onclick = function () {
   alert('Раздел в разработке')
}

// Функция отрисовки КОРЗИНЫ
function renderBasket(arr) {
   productsBasket.innerHTML = ''

   if (arr.length === 0) {
      let notProducts = document.createElement('li')
      notProducts.classList.add('products-basket__not-products')
      notProducts.textContent = 'Товаров в корзине нет'

      orderBtn.textContent = 'Заказать на сумма 0 руб'

      productsBasket.append(notProducts)

      return
   }

   let totalPrice = 0

   for (let i = 0; i < arr.length; i++) {
      productsBasket.append(getProductBasketCard(i, arr[i]))

      totalPrice = totalPrice + arr[i].price
   }

   orderBtn.textContent = `Заказать на сумма ${totalPrice} руб`
}

// Отрисовка КОРЗИНЫ при первой загрузке страницы
renderBasket(basketArr)

basket.append(productsBasket, orderBtn)

document.body.append(title, productsCatalog, openBasketBtn, basket)
