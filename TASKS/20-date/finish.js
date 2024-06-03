/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

const currentDate = new Date()

console.log(currentDate)

const currentDateInMs = currentDate.getTime()

console.log(currentDateInMs)