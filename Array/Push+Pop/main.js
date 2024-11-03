//push

// let a = [99, 88, 55, 22]

// // pop
// a.pop()

// console.log(a.pop())
// console.log(a)

// const b = [3]

// console.log(b)

// console.log(b.pop())
// console.log(b)
// console.log(b.pop())

let car = []

let input = document.querySelector('#goods')

document.querySelector('.add').onclick = () => {
   let inputValue = Number(input.value)
   if (!car.includes(inputValue)) {
      car.push(inputValue)
      input.value = ''
      console.log(`Товар ${Number(inputValue)} был добавлен в массив`)
   }
   console.log(car)
}
document.querySelector('.pop').onclick = () => {
   let inputValue = Number(input.value)
   if (car.includes(inputValue)) {
      let goods = Number(car.pop())
      console.log(`Товар ${Number(goods)} был удален`)
      input.value = ''
   } else {
      console.log(`Товар ${Number(goods)} не был найден в массиве`)
   }
   console.log(car)
}
