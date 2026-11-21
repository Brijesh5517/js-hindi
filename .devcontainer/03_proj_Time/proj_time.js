let selectdiv=document.querySelector("#clock");
// let gettime=new Date();
// console.log(gettime)
// selectdiv.textContent=`${gettime.toDateString()}`
setInterval(function(){
let gettime=new Date();
// console.log(gettime)
//selectdiv.textContent=`${gettime.getHours()} : ${gettime.getSeconds()}`
selectdiv.textContent=gettime.toLocaleTimeString()
},1000)