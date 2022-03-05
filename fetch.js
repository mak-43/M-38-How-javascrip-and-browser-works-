console.log('11111')
console.log(22222)
// setTimeout(()=>console.log('aaaaa'),3000)///setTimeout asyncronously kaj kore
fetch('https://jsonplaceholder.typicode.com/todos/1')//asyncronous
  .then(response => response.json())
  .then(json => console.log(json))
console.log(33333)
console.log(444444)

for (let i =0 ;i<=100;i++){
    console.log(i)
}