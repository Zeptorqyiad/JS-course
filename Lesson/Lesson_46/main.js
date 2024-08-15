// В предложенном коде существует объект student с данными о студенте. Есть функция getStudentCopy(),
// задачей которой является создание полной копии объекта студента.Но в ней есть проблема, которая не позволяет выполнить задачу правильно.
// Исправьте код функции так, что бы она возвращала полную копию объекта студента.

let student = {
   name: 'Валя',
   age: 17,
   address: {
      city: 'Новосибирск',
      street: 'Советская',
      building: 55,
   },
}

console.log('student', student)

function getStudentCopy(student) {
   return {
      name: student.name,
      age: student.age,
      address: student.address,
   }
}

let studentCopy = getStudentCopy(student)
console.log('studentCopy', studentCopy)
