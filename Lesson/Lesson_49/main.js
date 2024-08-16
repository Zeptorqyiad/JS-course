// Чтение и доработка готового кода поможет вам не только получить нужную практику, но и подсмотреть интересные приёмы.
// В этом небольшом веб - приложении представлен список студентов с возможностями добавления и изменения записей.
// Сейчас всё работает достаточно хорошо, но есть несколько задач, которые я предлагаю вам выполнить.

// 1. Внимательно изучите приложение и код
// 2. Замените цикл for со счетчиком на цикл for...of
// 3. Добавьте в приложение еще одно поле ввода c валидацией - "Факультет"
// 4. Добавьте проверку (валидацию) изменения всех данных. Если данные при редактировании не изменились, покажите сообщение: “Данные НЕ изменились”

// Список студентов
let studentsArr = [
   {
      name: 'Оля',
      age: 14,
   },
   {
      name: 'Вадим',
      age: 12,
   },
   {
      name: 'Лена',
      age: 15,
   },
]

// Переменная в которой хранится ссылка на объект студента для редактирования
let editStudent

// Функция, возвращающая новую кнопку
function getButton(text) {
   let buttonEl = document.createElement('button')
   buttonEl.textContent = text
   return buttonEl
}

// Функция, возвращающая новый input
function getInput(type, placeholder) {
   let inputEl = document.createElement('input')
   inputEl.type = type
   inputEl.placeholder = placeholder
   return inputEl
}

// Заголовок
let titleEl = document.createElement('h1')
titleEl.textContent = 'Список студентов'

// Создание текстовых полей и кнопок
let nameInpEl = getInput('text', 'Имя')
let ageInpEl = getInput('number', 'Возраст')
let facultyInpEl = getInput('text', 'Факультет')
let addBtnEl = getButton('Добавить')
let saveBtnEl = getButton('Сохранить')
let cancelBtnEl = getButton('Отменить')

// Скрытие кнопок редактирования
saveBtnEl.classList.add('hidden')
cancelBtnEl.classList.add('hidden')

// Функция, возвращающая нового студента
function getStudent(student) {
   let itemEl = document.createElement('li')
   itemEl.textContent = `${student.name}, ${student.age} лет, факультет: `

   let changeBtnEl = getButton('Изменить')

   changeBtnEl.onclick = function () {
      editStudent = student // Сохранение (передача) ссылки объекта для редактирования

      addBtnEl.classList.add('hidden') // Скрытие кнопки добавления

      // Отображение кнопок редактирования
      saveBtnEl.classList.remove('hidden')
      cancelBtnEl.classList.remove('hidden')

      // Установка значений для текстовых полей
      nameInpEl.value = student.name
      ageInpEl.value = student.age
   }

   itemEl.append(changeBtnEl)
   return itemEl
}

// Создание списка
let listEl = document.createElement('ul')

// Функция отрисовки списка
function renderList() {
   listEl.innerHTML = ''

   for (let item of studentsArr) {
      listEl.append(getStudent(item))
   }
}

// Добавление студента в список
addBtnEl.onclick = function () {
   let name = nameInpEl.value
   let age = Number(ageInpEl.value)

   // Проверка данных
   if (name === '' || age <= 0) {
      alert('Имя или возраст не введены!')
      return
   }

   let newStudent = {
      name: name,
      age: age,
   }

   studentsArr.push(newStudent)

   renderList(studentsArr) // Перерисовка списка

   nameInpEl.value = ''
   ageInpEl.value = ''
}

// Сохранение студента
saveBtnEl.onclick = function () {
   let name = nameInpEl.value
   let age = Number(ageInpEl.value)

   // Проверка данных
   if (name === '' || age <= 0) {
      alert('Имя или возраст не введены!')
      return
   }

   // Изменение значений в редактируемом объекте
   editStudent.name = name
   editStudent.age = age

   // Скрытие кнопок редактирования
   saveBtnEl.classList.add('hidden')
   cancelBtnEl.classList.add('hidden')

   addBtnEl.classList.remove('hidden') // Отображение кнопки добавления

   nameInpEl.value = ''
   ageInpEl.value = ''

   renderList(studentsArr) // Перерисовка списка
}

// Отмена редактирования
cancelBtnEl.onclick = function () {
   // Скрытие кнопок редактирования
   saveBtnEl.classList.add('hidden')
   cancelBtnEl.classList.add('hidden')

   addBtnEl.classList.remove('hidden') // Показывает кнопку добавления

   nameInpEl.value = ''
   ageInpEl.value = ''
}

renderList(studentsArr) // Отрисовка при запуске

document.body.append(
   titleEl,
   nameInpEl,
   ageInpEl,
   addBtnEl,
   saveBtnEl,
   cancelBtnEl,
   listEl
)
