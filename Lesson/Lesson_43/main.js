let usersArr = [
   // 0
   {
      name: 'Таня',
      year: 1998,
      city: 'Москва',
      student: true,
   },

   // 1
   {
      name: 'Вася',
      year: 1999,
      city: 'Москва',
      student: true,
   },

   // 2
   {
      name: 'Лена',
      year: 1994,
      city: 'Воронеж',
      student: false,
   },
]

for (let i = 0; i < usersArr.length; i++) {
   document.write(
      `<p>
			${i + 1}) 
			${usersArr[i].name}, 
			${usersArr[i].year},
			${usersArr[i].city},
			${usersArr[i].student}
		</p>`
   )
}
