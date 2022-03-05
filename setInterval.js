console.log('first ')
// setInterval(()=>{console.log('tik tik tik')},1000)

console.log('second')
let second=0;
const timeId=setInterval(()=>{
    console.log(++second) //X++ porer line theke + ,++x inline theke +
    if(second>10){
        clearInterval(timeId)
    }
},1000)

//js syncronous  asyncronous hocche setTimeout setInterval fetch 