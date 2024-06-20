// Функция, возвращающая новую кнопку
function getButton(text, className) {
   let button = document.createElement('button')
   button.textContent = text
   button.classList.add(className)
   return button
}

// Функция, возвращающая новый input
function getInput(placeholder, type, className) {
   let input = document.createElement('input')
   input.type = type
   input.placeholder = placeholder
   input.classList.add(className)
   return input
}

// Функция, возвращающая элемент списка ученика
function getNewStudent(name) {
   let studentItem = document.createElement('li')
   studentItem.classList.add('student-item')

   let nameSpan = document.createElement('span')
   nameSpan.classList.add('student-item__name')
   nameSpan.textContent = name

   let actionsBox = document.createElement('div')
   actionsBox.classList.add('student-item__actions')

   let editBtn = getButton('Изменить', 'student-item__btn')

   editBtn.onclick = function () {
      let newName = prompt('Введите новое имя', nameSpan.textContent)
      nameSpan.textContent = newName
   }

   let removeBtn = getButton('Удалить', 'student-item__btn')
   removeBtn.onclick = function () {
      studentItem.remove() // Удаление studentItem
   }

   actionsBox.append(editBtn, removeBtn) // Добавляем кнопки в actionsBox
   studentItem.append(nameSpan, actionsBox) // Добавляем элементы в studentItem

   return studentItem
}

// Блок для добавления ученика школы
let addBox = document.createElement('div')
addBox.classList.add('add-box')

// Текстовое поле для имени
let newStudentNameInp = getInput('Имя ученика', 'text', 'add-box__input') // Функция возвращает input

// Кнопки добавления в факультеты
let grifAddBtn = getButton('Добавить в Гриффиндор', 'add-box__btn') // Кнопка button
let slizAddBtn = getButton('Добавить в Слизерин', 'add-box__btn') // Кнопка button
let kogAddBtn = getButton('Добавить в Когтевран', 'add-box__btn') // Кнопка button
let pufAddBtn = getButton('Добавить в Пуффендуй', 'add-box__btn') // Кнопка button

addBox.append(newStudentNameInp, grifAddBtn, slizAddBtn, kogAddBtn, pufAddBtn)

// Добавляем обработчики событий клика кнопкам добавления
grifAddBtn.onclick = function () {
   let name = newStudentNameInp.value

   let newStudent = getNewStudent(name) // Функция возвращает li студента
   grifList.append(newStudent)

   newStudentNameInp.value = ''
}

slizAddBtn.onclick = function () {
   let name = newStudentNameInp.value

   let newStudent = getNewStudent(name) // Функция возвращает li студента
   slizList.append(newStudent)

   newStudentNameInp.value = ''
}

kogAddBtn.onclick = function () {
   let name = newStudentNameInp.value

   let newStudent = getNewStudent(name) // Функция возвращает li студента
   kogList.append(newStudent)

   newStudentNameInp.value = ''
}

pufAddBtn.onclick = function () {
   let name = newStudentNameInp.value

   let newStudent = getNewStudent(name) // Функция возвращает li студента
   pufList.append(newStudent)

   newStudentNameInp.value = ''
}

// ------------------------

// Блок факультетов
let facultyBox = document.createElement('div')
facultyBox.classList.add('faculty-box')

// Список учеников Гриффиндор
let grifList = document.createElement('ul')
grifList.classList.add('list', 'list_grif')

// Список учеников Слизерин
let slizList = document.createElement('ul')
slizList.classList.add('list', 'list_sliz')

// Список учеников Когтевран
let kogList = document.createElement('ul')
kogList.classList.add('list', 'list_kog')

// Список учеников Пуффендуй
let pufList = document.createElement('ul')
pufList.classList.add('list', 'list_puf')

facultyBox.append(grifList, slizList, kogList, pufList)

// Добавление элементов в body
document.body.append(addBox, facultyBox)
