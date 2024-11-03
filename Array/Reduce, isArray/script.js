let a = [
   { id: 55, city: 'Perm' },
   { id: 75, city: 'Moscow' },
   { id: 175, city: 'Tver' },
]

let b = a.reduce((accum, item) => {
   accum.push(item.id)
   return accum
}, [])

console.log('===================')
console.log(b)

b = 'new Set([1, 2])'

console.log(Array.isArray(b))
