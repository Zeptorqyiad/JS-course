let products = [
   {
      name: 'Ваза',
      price: 1200,
   },
   {
      name: 'Книга',
      price: 200,
   },
   {
      name: 'Кофе',
      price: 500,
   },
]

let listEl = document.createElement('ul')

let addBoxEl = document.createElement('div')

let nameInpEl = document.createElement('input')
nameInpEl.type = 'text'
nameInpEl.placeholder = 'Название товара'

let priceInpEl = document.createElement('input')
priceInpEl.type = 'number'
priceInpEl.placeholder = 'Стоимость товара'

let addProducrBtn = document.createElement('button')
addProducrBtn.textContent = 'Добавить'

addProducrBtn.onclick = function () {
   let inpNameValue = nameInpEl.value
   let inpPriceValue = Number(priceInpEl.value)

   let newProduct = {
      name: inpNameValue,
      price: inpPriceValue,
   }

   products.push(newProduct)

   renderList(products)

   nameInpEl.value = ''
   priceInpEl.value = ''
}

addBoxEl.append(nameInpEl, priceInpEl, addProducrBtn)

function getListItem(product) {
   let itemEl = document.createElement('li')
   itemEl.textContent = `${product.name}, стоимость: $${product.price}`

   let editBtn = document.createElement('button')
   editBtn.textContent = 'Изменить'
   itemEl.append(editBtn)

   editBtn.onclick = function () {
      let name = prompt('Введите название товара', product.name)
      let price = Number(prompt('Введите цену товара', product.price))

      product.name = name
      product.price = price

      renderList(products)
   }

   return itemEl
}

function renderList(arr) {
   listEl.innerHTML = ''
   for (let item of arr) {
      let newItem = getListItem(item)
      listEl.append(newItem)
   }
}

renderList(products)

document.body.append(addBoxEl, listEl)
