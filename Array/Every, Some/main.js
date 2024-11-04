const a = [5, 2, 1, 1, 4, 5, 6, 7, 8]
const c = [
   { name: 'ivan', age: 12 },
   { name: 'inna', age: 22 },
   { name: 'serge', age: 23 },
   { name: 'antony', age: 33 },
]
let e = []
//every

// let b = c.every((item) => {
//    if (item.age >= 16) {
//       return true
//    }
// })

// console.log(b)

let b = e.every((item) => {
   return true
})

console.log(b)
