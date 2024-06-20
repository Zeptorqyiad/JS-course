document.write('<h1>Доход водителей</h1>')

// Создание таблицы
document.write('<table>')

// Шапка таблицы
document.write(`<thead>
                  <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Поездок в месяц</th>
                    <th>Доход в месяц</th>
                    <th>Средняя стоимость поездки</th>
                  </tr>
                </thead>`)

// Тело таблицы
document.write('<tbody>')

let index = 0 // Порядковый номер
let totalDriversCountOrder = 0 // Сумма всех заказов водителей в месяц
let totalDriversIncome = 0 // Сумма дохода в месяц всех водителей
let totalDriversMiddleOrderValue = 0 // Сумма средней стоимости заказа всех водителей

// Водитель 1
index++
let userName1 = prompt(`Введите имя первого водителя`)
let userSurname1 = prompt(`Введите фамилию первого водителя`)
let roadCount1 = Number(
   prompt(`Введите количество поздок в месяц ${userName1}`)
)
let monthValue1 = Number(prompt(`Введите месячный доход ${userName1}`))

let sum1 = monthValue1 / roadCount1

totalDriversCountOrder = totalDriversCountOrder + roadCount1
totalDriversIncome = totalDriversIncome + monthValue1
totalDriversMiddleOrderValue = totalDriversMiddleOrderValue + sum1

document.write(`<tr>
						<td>${index}</td>
						<td>${userName1}</td>
						<td>${userSurname1}</td>
						<td>${roadCount1}</td>
						<td>${monthValue1}</td>
						<td>${sum1}</td>
					</tr>
				`)

// Водитель 2
index++
let userName2 = prompt(`Введите имя второго водителя`)
let userSurname2 = prompt(`Введите фамилию второго водителя`)
let roadCount2 = Number(
   prompt(`Введите количество поздок в месяц ${userName2}`)
)
let monthValue2 = Number(prompt(`Введите месячный доход ${userName2}`))

let sum2 = monthValue2 / roadCount2

totalDriversCountOrder = totalDriversCountOrder + roadCount2
totalDriversIncome = totalDriversIncome + monthValue2
totalDriversMiddleOrderValue = totalDriversMiddleOrderValue + sum2

document.write(`<tr>
						<td>${index}</td>
						<td>${userName2}</td>
						<td>${userSurname2}</td>
						<td>${roadCount2}</td>
						<td>${monthValue2}</td>
						<td>${sum2}</td>
					</tr>
				`)

// Водитель 3
index++
let userName3 = prompt(`Введите имя третьего водителя`)
let userSurname3 = prompt(`Введите фамилию третьего водителя`)
let roadCount3 = Number(
   prompt(`Введите количество поздок в месяц ${userName3}`)
)
let monthValue3 = Number(prompt(`Введите месячный доход ${userName3}`))

let sum3 = monthValue3 / roadCount3

totalDriversCountOrder = totalDriversCountOrder + roadCount3
totalDriversIncome = totalDriversIncome + monthValue3
totalDriversMiddleOrderValue = totalDriversMiddleOrderValue + sum3

document.write(`<tr>
						<td>${index}</td>
						<td>${userName3}</td>
						<td>${userSurname3}</td>
						<td>${roadCount3}</td>
						<td>${monthValue3}</td>
						<td>${sum3}</td>
					</tr>
				`)

// Футер таблицы
document.write(`<tfoot>
                  <tr>
                    <th colspan="3">Средние показатели всех водителей</th>
                    <th>${totalDriversCountOrder / index}</th>
                    <th>${totalDriversIncome / index}</th>
                    <th>${totalDriversMiddleOrderValue / index}</th>
                  </tr>
                </tfoot>`)

document.write('</tbody>')
document.write('</table>')
