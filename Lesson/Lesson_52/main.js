let str = '......В этой строке много лишних точек...'

function trimStart(str, symbol) {
   for (let i = 0; i < str.length; i++) {
      if (str[i] !== symbol) {
         return str.substring(i)
      }
   }

   return ''
}

console.log('Удаление символов в начале:')
console.log(trimStart(str, '.'))

function trimEnd(str, symbol) {
   for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] !== symbol) {
         return str.substring(0, i + 1)
      }
   }
}

console.log('Удаление символов в конце:')
console.log(trimEnd(str, '.'))

function trim(str, symbol) {
   return trimStart(trimEnd(str, symbol), symbol)
}

console.log('Удаление символов в начале и в конце:')
console.log(trim(str, '.'))
