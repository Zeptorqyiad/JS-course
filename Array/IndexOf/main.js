// indexOf
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.table(array)

function getIndexOf(arr, num, from = 0) {
   for (let i = from; i < arr.length; i++) {
      if (arr[i] === num) {
         return i
      }
   }
   return -1
}

console.log(getIndexOf(array, 6))
