// Список товаров в котором уже есть три продукта
let productArray = []
let valueArray = []

function getProductItem(index, product, value) {
   let productItem = document.createElement('li')
   productItem.textContent = `${index + 1}) ${product} - ${value}`

   // Кнопка удаления товара
   let deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'Удалить'

   deleteBtn.onclick = function () {
      productArray.splice(index, 1) // Удаляем элемент из массива
      render(productArray) // Перерисовываем список
   }

   productItem.append(deleteBtn)

   return productItem
}

// Заголовок
let title = document.createElement('h1')
title.textContent = 'Список покупок'

// Кнопка добавления
let addProductBtn = document.createElement('button')
addProductBtn.textContent = 'Добавить продукт'

addProductBtn.onclick = function () {
   let newProduct = prompt('Введите название товара')
   let newProductValue = Number(prompt('Введите количество товара'))

   productArray.push(newProduct) // Добавляем продукт в массив
   valueArray.push(newProductValue)
   render(productArray, valueArray) // Перерисовываем список
}

let list = document.createElement('ul') // Список

// Функция отрисовки списка
function render(arr, valueArr) {
   list.innerHTML = '' // Очищаем список перед отрисовкой

   // Начинаем отрисовку, используя массив и цикл
   for (let i = 0; i < arr.length; i++) {
      let productItem = getProductItem(i, arr[i], valueArr) // Создаем элемент списка
      list.append(productItem)
   }
}


// Запускаем отрисовку списка при загрузке страницы
render(productArray, valueArray)

document.body.append(title, addProductBtn, list)
