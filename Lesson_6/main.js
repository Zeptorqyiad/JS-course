document.write('<h1>Список учеников</h1>')
document.write('<ul>')
index = 0
currentYear = 2024

function myFn(userName, year) {
   index++
   let value = currentYear - year
   document.write(
      `<li>${index}) <strong>${userName}</strong>, год рождения: <strong>${year}</strong>, возраст: <strong>${value}</strong></li>`
   )
}

myFn('Маша', 2010)
myFn('Рита', 2009)
myFn('Вася', 2007)

document.write('</ul>')
