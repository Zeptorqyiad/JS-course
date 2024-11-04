const a = [3, 4, 5]
const b = ['c', 'd', 'e']

//Merge

const c = [...a, ...b]
// console.log(c)

// Clone

const d = [...b]
// console.log(d)

// string -> array

const e = [...'hello']
// console.log(e)

// set -> array

const f = [...new Set([1, 1, 2, 3, 4, 2])]
// console.log(f)

function test() {
   // console.log(...arguments)
}

test(3, 4, 5, 6, 7)

// node list
// querySelectorAll()
let p = document.querySelectorAll('p')
// console.dir(p)
console.log([...p])
