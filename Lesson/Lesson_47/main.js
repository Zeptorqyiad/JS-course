// В этом коде существуют два объекта автомобилей с одинаковыми значениями модели и серийными номерами (SN).
// Но при их сравнении в консоль выводится сообщение о том, что авто разные.Исправьте код в условии так, что бы в консоли был правильный результат:
// "Это два одинаковых автомобиля!".

let car1 = {
   model: 'Tesla',
   SN: 12345,
}

let car2 = {
   model: 'Tesla',
   SN: 12345,
}

if (car1.model === car2.model && car1.SN === car2.SN) {
   console.log('Это два одинаковых автомобиля!')
} else {
   console.log('Это разные автомобили!')
}
