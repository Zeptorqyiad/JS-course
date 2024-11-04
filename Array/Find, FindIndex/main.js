const a = [
   { name: 'ivan', age: 14 },
   { name: 'ivar', age: 54 },
   { name: 'den', age: 46 },
   { name: 'oleg', age: 14 },
   { name: 'severn', age: 44 },
]
const c = [22, 33, 44, 55, 66, 77]
const d = 'hello'
//find

let b = c.findIndex((item) => {
   if (item > 480) {
      return true
   }
})

let f = d.lastIndexOf('l')

console.log(f)
