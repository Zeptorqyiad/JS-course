// const a = [3, 1, 3, -5, -3, -4, 5, -2, 67, 2, 9, 6, 7, 0]

// // console.table(a)

// let b = a.filter((item, index) => {
//    // console.log(index)
//    return index
// })

// console.log(b)

const clients = [
   { iin: 'asd131sdgz', user: 'Ivanov', debt: 4 },
   { iin: 'ashgdkja2', user: 'Petrov', debt: 0 },
   { iin: 'asda21123', user: 'Sidorov', debt: 0 },
   { iin: 'asd123asd', user: 'OOO MMM', debt: 14 },
   { iin: 'asd1234hdsg', user: 'IT', debt: 71400 },
   { iin: 'asda213xcbv', user: 'Spiritbank', debt: 2654 },
]

let debts = clients
   .filter((item) => item.debt >= 10)
   .sort((a, b) => b.debt - a.debt)

console.log(debts)
