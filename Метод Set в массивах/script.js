let a = new Set()
a.add(1)
a.add(2)
a.add('Hello')
a.add(1)
a.add('1')
// a.clear()
// a.delete('Hello') // удаляет (value)
console.log(a)
console.log(a[0]) // undefined
console.log(a.length) // undefined
console.log(a.size) // кол-во элементов size
console.log(a.has(1)) // true or false

// for (let i = 0; i< a.size){a[i]} // Нельзя
// for (let i in a) { console.log(i) } // Нельзя

// for (const item of a) {
//    console.log(item)
// }

let arr = [1, 2, 3, 1, 4, 'hello', 5, 1, 3]

let b = new Set(arr) // Создает новый набор уникальных значений
console.log(b)
console.log(b.size)
// for (const element of b) {
// 	console.log(element)
// }

let bArr = Array.from(b)
console.log(bArr)