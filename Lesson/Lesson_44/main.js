function getCard() {
   let card = {
      title: 'Название',
      img: 'https://cs13.pikabu.ru/avatars/7884/x7884263-1761183743.png',
      desc: 'Описание карточки',
   }

   // Создание элементов на странице
   let cardElement = document.createElement('div')
   let cardImage = document.createElement('img')
   let cardTitle = document.createElement('h2')
   let cardDesc = document.createElement('p')
   let cardRemoveBtn = document.createElement('button')
   let cardImportantBtn = document.createElement('button')

   // Создание классов для объектов
   cardElement.classList.add('card')
   cardImage.classList.add('card-image')
   cardTitle.classList.add('card-title')
   cardDesc.classList.add('card-desc')
   cardRemoveBtn.classList.add('card-remove')
   cardImportantBtn.classList.add('card-btn')

   //
   cardTitle.textContent = card.title
   cardImage.src = card.img
   cardDesc.textContent = card.desc

   // Описание кнопок
   cardRemoveBtn.textContent = 'Удалить'
   cardImportantBtn.textContent = 'Важное'

   // Добавление элементов в коробку
   cardElement.append(
      cardImage,
      cardTitle,
      cardDesc,
      cardRemoveBtn,
      cardImportantBtn
   )

   return cardElement
}

function getList() {
   let ul = document.createElement('ul')
   ul.classList.add('list')
   return ul
}

let list = getList()

let newCard = getCard()

list.append(newCard)

document.body.append(list)
