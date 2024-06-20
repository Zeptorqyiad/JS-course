function getFIO(surname, name, lastname) {
   let result = `${surname} ${name} ${lastname}`
   return result
}

let fio = getFIO('Таврова', 'Наталья', 'Петровна')
document.write(`Здравствуйте, ${fio}`)
