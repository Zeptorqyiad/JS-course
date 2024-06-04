let currentYear = 2024

function getStrong(text) {
   return `<strong>${text}</strong>`
}

function calculateAge(currentYear, birth) {
   return currentYear - birth
}

function student(studentName = '', birth, studentYear, index) {
   index++
   document.write(`
	<li>
	${index}) ${getStrong(studentName)}, год рождения: ${getStrong(
      birth
   )}, возраст: ${getStrong(studentYear)}
	</li>
	`)
   return index
}

let index = 0
document.write('<h1>Список студентов</h1>')
document.write('<ul>')

index = student('Наташа', 2011, calculateAge(currentYear, 2011), index)
index = student('Петр', 2015, calculateAge(currentYear, 2015), index)
index = student('Миша', 2014, calculateAge(currentYear, 2014), index)
index = student('Рита', 2010, calculateAge(currentYear, 2010), index)
index = student('Елена', 2015, calculateAge(currentYear, 2015), index)

document.write('</ul>')
