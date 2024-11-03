// const a = [3, 4, 5, 6, 8, 0, 143, 45]

// let b = a.map((item, index) => {
//    return item
// })

// console.log(b)

//filter
// let c = a.filter((item, index) => {
//    if (item % 2 === 0) {
//       return true
//    }
// })

// console.log(c)

// const temp = [0, 4, 4, 6, 8, 10, 6, 4, 3, -1, -2, -2]

// let tF = temp.map((item) => {
//    return 32 + item * 1.8
// })

// console.log(tF)

// let a = [33, 44, 55]
// a[10] = 90

// let b = a.map((item, index, array) => {
//    if (index == 2) {
//       array[index + 1] = 66
//    }
//    return item
// })
// console.log(b)
// console.log(a)

const z = [
   { name: ' Ivan', order: 12, sum: '123,5' },
   { name: ' Sergey    ', order: 12, sum: '123.5' },
   { name: 'matilda   ', order: 12, sum: '123, 5' },
   { name: 'Ivanov Petr    ', order: 12, sum: '123,50' },
]

const zBack = z.map((item) => {
   const firstChar = item.name.trim().charAt(0).toUpperCase()
   item.name = firstChar + item.name.trim().toLocaleLowerCase().slice(1)
   return item
})

console.log(zBack)
