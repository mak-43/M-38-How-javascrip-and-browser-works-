// setTimeout() shob sesh kore pore kaj korbe , 2000 ms pore delay korbe  
function doSomething(){
    console.log('I am coding Js')
}
console.log('First : i am the first one')
console.log('Second : i am the second person')
// setTimeout(doSomething,2000)
setTimeout(function(){
    console.log('I am using vs code')
},5000)
setTimeout(()=>{
    console.log('Exploring MDN articles')
},4000)
console.log('Third : i am the 3  person')
console.log('Fourth : i am the 4  person')