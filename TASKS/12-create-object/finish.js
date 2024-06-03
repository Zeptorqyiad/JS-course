/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myObject = {
	myName: 'Max',
	surname: 'Unanian',
	favoriteNumber: 14
}

const personInfo = `My name is ${myObject.myName} ${myObject.surname} and my favorite number is ${myObject.favoriteNumber}`

console.log(personInfo)