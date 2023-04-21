const BASE_URL = 'https://apis.scrimba.com/jsonplaceholder'
let endPoint = '/posts'

fetch(BASE_URL+endPoint, {method: 'GET'})
.then(response => response.json())
.then(data => {
    const postsArr = data.slice(0, 5)
    console.log(postsArr)
})