function seconds(value) {
   return value * 1000
}

function createNotification(text) {
   let notificationEl = document.createElement('div')
   notificationEl.textContent = text
   notificationEl.classList.add('notification')

   setTimeout(function () {
      notificationEl.remove()
   }, seconds(5))

   document.body.append(notificationEl)
}

function addNotification(text, time) {
   let notificationWrapEl = document.createElement('div')
   let timeEl = document.createElement('strong')

   notificationWrapEl.textContent = text
   timeEl.textContent = ` ${time} сек`

   notificationWrapEl.classList.add('notification-wrap')

   notificationWrapEl.append(timeEl)
   document.body.append(notificationWrapEl)

   let timerId = setInterval(function () {
      time--
      timeEl.textContent = ` ${time} сек`

      if (time === 0) {
         createNotification(text)
         notificationWrapEl.classList.add('success')
         clearInterval(timerId)
      }
   }, seconds(2))
}

let addNotificationBtnEl = document.createElement('button')
addNotificationBtnEl.textContent = 'Добавить напоминание'
addNotificationBtnEl.classList.add('notification-btn')

addNotificationBtnEl.onclick = function () {
   let textNotification = prompt('Введите текст напоминания')
   let timeNotification = Number(prompt('Введите время в секундах'))

   addNotification(textNotification, timeNotification)
}

document.body.append(addNotificationBtnEl)
