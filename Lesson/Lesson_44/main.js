// Создание массива элементов
let notesArr = [
   {
      title: 'Заметка 1',
      img: 'https://pic.rutubelist.ru/user/fd/76/fd766d07ff98aae9c6ef20cf3c5312d2.jpg',
      desc: 'Описание 1',
      done: false,
   },
   {
      title: 'Заметка 2',
      img: 'https://koshka.top/uploads/posts/2021-11/1638234774_67-koshka-top-p-britanskie-koti-polosatie-73.jpg',
      desc: 'Описание 2',
      done: true,
   },
   {
      title: 'Заметка 3',
      img: 'https://koshka.top/uploads/posts/2021-12/1638781024_66-koshka-top-p-izobrazhenie-kotikov-76.jpg',
      desc: 'Описание 3',
      done: false,
   },
]

// Функция возрата кнопки
function getAddBtn(text) {
   let buttonAdd = document.createElement('button')
   buttonAdd.textContent = text
   return buttonAdd
}

// Функция возврата карточки
function getCard(card, index) {
   let cardElement = document.createElement('li')
   let cardImage = document.createElement('img')
   let cardTitle = document.createElement('h2')
   let cardDesc = document.createElement('p')
   let cardRemoveBtn = document.createElement('button')
   let cardImportantBtn = document.createElement('button')

   // Создание классов для объектов
   cardElement.classList.add('card')

   if (card.done) {
      cardElement.classList.add('card-important')
   }

   cardImage.classList.add('card-image')
   cardTitle.classList.add('card-title')
   cardDesc.classList.add('card-desc')
   cardRemoveBtn.classList.add('card-remove')
   cardImportantBtn.classList.add('card-btn')

   // Присваивание объектного значния элементу карточки
   cardTitle.textContent = card.title
   cardImage.src = card.img
   cardDesc.textContent = card.desc

   // Описание кнопок
   cardRemoveBtn.textContent = 'Удалить'
   cardImportantBtn.textContent = 'Важное'

   cardRemoveBtn.onclick = function () {
      notesArr.splice(index, 1)
      render(notesArr)
   }

   cardImportantBtn.onclick = function () {
      if (!cardElement.classList.contains('card-important')) {
         cardImportantBtn.textContent = 'Не важное'
         cardElement.classList.add('card-important')
         card.done = true
      } else {
         cardImportantBtn.textContent = 'Важное'
         cardElement.classList.remove('card-important')
         card.done = false
      }

      console.log(notesArr)
   }

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

// Функция возврата списка ul
function getList() {
   let ul = document.createElement('ul')
   ul.classList.add('list')
   return ul
}

// Присваивание списку функцию возвращающую ul
let list = getList()

// Возврат функции добавления кнопки
let addBtn = getAddBtn('Добавить новую заметку')

// Создание нового объекта при клике
addBtn.onclick = function () {
   let titleValue = prompt('Введите название заметки')
   let imageValue = prompt('Введите путь к изображению')
   let descValue = prompt('Введите описание заметки')

   let newNoteObj = {
      title: titleValue,
      img: imageValue,
      desc: descValue,
      done: false,
   }

   // Добавление элементов в массив
   notesArr.push(newNoteObj)

   // Вызов функции перерисовки
   render(notesArr)
}

// Вызов Цикла функции перерисовки
function render(arrNotes) {
   list.innerHTML = ''
   for (let i = 0; i < arrNotes.length; i++) {
      let newCard = getCard(arrNotes[i], i)
      list.append(newCard)
   }
}

render(notesArr)

// Создание общей коробки
document.body.append(addBtn, list)
