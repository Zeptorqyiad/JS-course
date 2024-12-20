let count = 0

document.getElementById('btn').onclick = () => {
   count++
   localStorage.setItem('key1', count)
}
