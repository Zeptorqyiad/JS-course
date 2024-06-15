//  Получить возраст
function getAge(year) {
   let result = 2023 - year

   if (result >= 18) {
      return `${result} (совершеннолетний)`
   }

   return result
}

// Создать список
function getStudentListUl() {
   let ul = document.createElement('ul')
   return ul
}

// Создать элемент студента
function getStudentLi(index, name, year, height) {
   let li = document.createElement('li')
   li.style.listStyle = 'none'
   let textSpan = document.createElement('span')

   textSpan.textContent = `${index}) ${name}, год рождения: ${year},
	возраст: ${getAge(year)}, рост: ${height}`

   let removeBtn = document.createElement('button')
   removeBtn.textContent = 'Удалить'

   removeBtn.onclick = function () {
      li.remove()
   }

   let checkHeightBtn = document.createElement('button')
   checkHeightBtn.textContent = 'Проверить'

   checkHeightBtn.onclick = function () {
      if (year >= 2001 && height >= 175) {
         textSpan.textContent = `${textSpan.textContent} (отбор пройден)`
         checkHeightBtn.style.display = 'none'
      } else {
         textSpan.textContent = `${textSpan.textContent} (отбор НЕ пройден)`
         checkHeightBtn.style.display = 'none'
      }
   }

   li.append(textSpan, checkHeightBtn, removeBtn)
   return li
}

// Создать нового студента
function getAddStudentBlock() {
   let counter = 0
   let box = document.createElement('div')

   let nameInp = document.createElement('input')
   nameInp.placeholder = 'Имя'
   nameInp.type = 'text'

   let yearInp = document.createElement('input')
   yearInp.placeholder = 'Год рождения'
   yearInp.type = 'number'

   let heightInp = document.createElement('input')
   heightInp.placeholder = 'Рост'
   heightInp.type = 'number'

   let addBtn = document.createElement('button')
   addBtn.textContent = 'Добавить'
   addBtn.type = 'submit' // Проверить

   addBtn.onclick = function () {
      counter++
      let nameValue = nameInp.value
      let yearValue = Number(yearInp.value)
      let heightValue = Number(heightInp.value)

      let newStudent = getStudentLi(counter, nameValue, yearValue, heightValue)
      studentsListUl.append(newStudent)

      nameInp.value = ''
      yearInp.value = ''
      heightInp.value = ''
   }

   box.append(nameInp, yearInp, heightInp, addBtn)

   return box
}

let addStudentBlock = getAddStudentBlock()
let studentsListUl = getStudentListUl()

document.body.append(addStudentBlock, studentsListUl)
