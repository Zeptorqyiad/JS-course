// Элементы интерфейса для выбора цвета часто встречаются на сайтах интернет-магазинов. И в этом задании уже реализован простой список кнопок для выбора нужного цвета.
// Сейчас можно выбрать несколько цветов, и это проблема.
// Исправьте код так, что бы при клике по кнопкам активировался (выделялся) только один цвет.
// И еще, использование цикла со счетчиком в данном примере кажется избыточным, попробуйте заменить его на цикл for...of.

// Список цветов
let colorsArr = [
   {
      title: 'Красный',
      class: 'red',
   },
   {
      title: 'Оранжевый',
      class: 'orange',
   },
   {
      title: 'Синий',
      class: 'blue',
   },
   {
      title: 'Зелёный',
      class: 'green',
   },
   {
      title: 'Фиолетовый',
      class: 'violet',
   },
]
// Переменная для хранения ссылки на выбранную кнопку
let activeButtonEl

// Функция, возвращающая новую кнопку цвета
function getColorButton(color) {
   let buttonEl = document.createElement('button')
   buttonEl.textContent = color.title
   buttonEl.classList.add('btn', color.class) // Добавление двух классов

   buttonEl.onclick = function () {
      // Проверка наличия ссылки в переменной activeButtonEl
      if (activeButtonEl) {
         activeButtonEl.classList.remove('active')
      }

      buttonEl.classList.add('active')
      activeButtonEl = buttonEl
   }

   return buttonEl
}

// Заголовок
let titleEl = document.createElement('h1')
titleEl.textContent = 'Выбор цвета'

document.body.append(titleEl)

// Отрисовка кнопок выбора цвета
for (let color of colorsArr) {
   document.body.append(getColorButton(color))
}
