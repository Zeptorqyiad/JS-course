const URL = 'https://jsonplaceholder.typicode.com'
const APIKEY = 'asdjl1h2o31hadsa'

fetch('https://jsonplaceholder.typicode.com/posts/1')
   .then((response) => {
      return response.json()
   })
   .then((data) => {
      console.log(data)
   })

// async
;(async function () {
   const response = await fetch(URL + '/posts/1')
   const data = await response.json()
   console.log(data)
})()

// GET Method
;(async function () {
   const response = await fetch(URL + '/comments?postId=1', {
      method: 'GET',
   })
   const data = await response.json()
   console.log(data)
})()

// POST Method
;(async function () {
   const response = await fetch(URL + '/posts', {
      method: 'POST',
   })
   const data = await response.json()
   console.log(data)
})()

// POST API Method
;(async function () {
   const requestHeaders = new Headers()
   requestHeaders.append('apikey', APIKEY)

   const formData = new FormData()
   formData.append('min', 1000)
   formData.append('max', 1200)

   const response = await fetch(URL + '/posts', {
      method: 'POST',
      headers: requestHeaders,
      body: formData,
   })
   const data = await response.json()
   console.log(data)
})()
