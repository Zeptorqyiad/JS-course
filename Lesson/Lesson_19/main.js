// Эта простая программа с простой механикой работы. При запуске веб-страницы, вас сразу же встречают всплывающие окна prompt для ввода: названия игры, стоимости игры и количеством накопленных денег в кошельке.

// После ввода, программа должна показывать всплывающее окно alert с сообщением, говорящим о том, достаточно ли у вас средств для покупки игры или нет.

// Но в программе есть ошибки. Попробуйте исправить ее так, что бы все работало правильно.

let game = prompt('Введите название игры')
let price = Number(prompt('Введите стоимость игры'))
let wallet = Number(prompt('Сколько у вас денег на карте?'))

if (price > wallet) {
   alert(`Увы, игра "${game}" вам пока не по карману :(`)
} else {
   alert(`Поздравляю, у вас достаточно денег для покупки игры "${game}"`)
}
