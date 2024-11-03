const transactions = [
   '9261961asda',
   '12873198ahs',
   '12361asd',
   '169aiusdg17',
   '218738ajksdga69',
   'a98789yasd1',
]

const str = 'abcdefgh'

// const test = [44, 55, 66, 77, 88, 2, 3, 4]

// if (str.includes('f1gh')) {
//    console.log('Yes')
// } else {
//    console.log('No')
// }

const users = [
   { name: 'ivanov', age: 44 },
   { name: 'petrov', age: 14 },
   { name: 'pitrov', age: 37 },
   { name: 'alexeev', age: 43 },
]

let newUsers = users.filter((item) => {
   return item.name.includes('pe')
})

console.log(newUsers)
