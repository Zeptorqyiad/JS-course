// localStorage.setItem('data', 5)
// console.log(localStorage.getItem('data'))

// const a = [3, 4, 5]
// localStorage.setItem('key1', JSON.stringify(a))
// let b = localStorage.getItem('key1')
// b = JSON.parse(b)

// console.log(b)
// console.log(b[1])
// console.log(typeof b)

window.addEventListener('storage', function (e) {
   console.log('change')
})

const c = {
   hello: 5,
   key: 2,
   4: 'hi',
}
localStorage.setItem('key2', JSON.stringify(c))
let d = localStorage.getItem('key2')
d = JSON.parse(d)

console.log(d)
console.log(typeof d)
