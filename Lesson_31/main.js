let usersName = []
let usersYear = []

function getInput(placeholder, type) {
   let input = document.createElement('input')
   input.placeholder = placeholder
   input.type = type

   return input
}

function getAddBtn(text) {
   let btn = document.createElement('button')
   btn.textContent = text
   return btn
}

function getBox() {
   let div = document.createElement('div')
   return div
}

function getTable() {
   let table = document.createElement('table')
   let thead = document.createElement('thead')
   let tr = document.createElement('tr')
   let tbody = document.createElement('tbody')

   let nameTd = document.createElement('td')
   nameTd.textContent = 'Имя пользователя'

   let yearTd = document.createElement('td')
   yearTd.textContent = 'Год пользователя'

   let ageTd = document.createElement('td')
   ageTd.textContent = 'Возраст'

   let removeTd = document.createElement('td')
   removeTd.textContent = 'Удалить'

   tr.append(nameTd, yearTd, ageTd, removeTd)
   thead.append(tr)
   table.append(thead)
   table.append(tbody)
   document.body.append(table)

   return tbody
}

function getUserTr(userName, userYear) {
   let age = getAge(userYear)

   let tr = document.createElement('tr')
   let nameTd = document.createElement('td')
   let yearTd = document.createElement('td')
   let ageTd = document.createElement('td')
   let removeTd = document.createElement('td')

   let removeBtn = document.createElement('button')
   removeBtn.textContent = 'Удалить'

   nameTd.textContent = userName
   yearTd.textContent = userYear
   ageTd.textContent = age
   removeTd.append(removeBtn)

   tr.append(nameTd, yearTd, ageTd, removeTd)

   return tr
}

function getAge(year) {
   return 2024 - year
}

let box = getBox()
let addBtn = getAddBtn('Добавить пользователя')
let userNameInp = getInput('Имя', 'text')
let userYearInp = getInput('Год рождения', 'number')

box.append(userNameInp, userYearInp, addBtn)
document.body.append(box)

let userTable = getTable()

addBtn.onclick = function () {
   let nameValue = userNameInp.value
   let yearValue = Number(userYearInp.value)

   usersName.push(nameValue)
   usersYear.push(yearValue)

   userNameInp.textContent = ''
   userYearInp.textContent = ''
}

function render(nameArr, yearArr) {
   for (let i = 0; i < nameArr.length; i++) {
      let newUserTr = getUserTr(nameArr[i], yearArr[i])
      userTable.append(newUserTr)
   }
}
