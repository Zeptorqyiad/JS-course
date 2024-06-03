let index = 0
let currentYear = 2024

let middleAge = 0
let middleHeight = 0

document.write('<h1>Список студентов</h1>')

function student(studentName = '', studentYear = 0, height = 0, faculty = '') {
   let age = currentYear - studentYear
   middleAge = middleAge + age
   middleHeight = middleHeight + height
   index++
   document.write(`
		<p>
			${index}) 
			<strong>${studentName}</strong>, 
			возраст: <strong>${age}</strong>, 
			рост: <strong>${height}</strong>,
			факультет: <strong>${faculty}</strong>
		</p>
	`)
}

student('Max', 2005, 179, 'Historical')
student('Olya', 1976, 158, 'Phicics')
student('Olya', 2001, 192, 'Historical')
student('Olya', 1998, 175, 'Phicics')

document.write('<hr>')
document.write(`<p>Средний возраст: <strong>${middleAge / index}</strong></p>`)
document.write(`<p>Средний рост: <strong>${middleHeight / index}</strong></p>`)
