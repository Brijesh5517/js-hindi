//const lang=["Pthon", "Java","c++"]
// lang.forEach(function (item){
// console.log(item)
// })

// lang.forEach((val)=>{
//     console.log(val)
// })

// function printMe(item){
//     console.log(item)
// }
// lang.forEach(printMe)

// const nums=[1,2,3,4,5,6,7,8,9,10];
// // const newnum=nums.filter((item)=> item>5)
// // console.log(newnum)//[ 6, 7, 8, 9, 10 ]
// const newnum=nums.filter((num)=>{
//     return num>5
// })
// console.log(newnum) //[ 6, 7, 8, 9, 10 ]

const num=[1,2,3,4,5]
const newnum=num.map((item)=> item+2)
console.log(newnum)//[ 3, 4, 5, 6, 7 ]