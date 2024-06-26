/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {
  // OPTION 1
  // if(a === undefined) {
  // 	throw new Error ('Функция "square" не может быть вызвана без аргумента')
  // }
  // OPTION 2
  if (arguments.length === 0) {
    throw new Error('Функция "square" не может быть вызвана без аргумента');
  }
  console.log(a * a);
}

square(10);
// 100

try{
	square()
}catch{
	console.log("123");
}
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

// console.log("123");
