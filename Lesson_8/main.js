function getAge(year) {
   return 2023 - year
}

function numberPrompt(text) {
   let year = prompt(text)
   let numberYear = Number(year)
   return numberYear
}

let year = numberPrompt('Введите год рождения')
let age = getAge(year)

document.write('<h1>Расчет возраста</h1>')

document.write(`
	<p>
      Возраст: <strong>${age}</strong>
   </p>
`)
