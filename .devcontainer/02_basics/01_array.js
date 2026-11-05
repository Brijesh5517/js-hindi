let myarray=[1,2,4,"fjdhf"]
let newarray=new Array(55,77,4)

//console.log(myarray,newarray)
//console.log(newarray) //[ 55, 77, 4 ]
//newarray.push(101,2,56,8,9,9,0,0)

//console.log(newarray) 
// [
//   55, 77, 4, 101, 2,
//   56,  8, 9,   9, 0,
//    0
// ]
//newarray.pop()
//console.log(newarray)
// [
//   55, 77, 4, 101, 2,
//   56,  8, 9,   9, 0
// ]

//console.log(newarray)
// newarray.unshift(999)
// console.log(newarray) //[ 999, 55, 77, 4 ]
// newarray.unshift(88,77)
// console.log(newarray)//[ 88, 77, 999, 55, 77, 4 ]
// newarray.shift()
// console.log(newarray) [ 77, 999, 55, 77, 4 ]
let myArrayString=newarray.join('@')
//console.log(myArrayString)

let arr=[1,2,3,4]
//let rem=arr.slice(1,3)
// console.log("arr ",arr) //[ 1, 2, 3, 4 ]
// console.log("rem ",rem) // [ 2, 3 ]
 let splicerem=arr.splice(1,2,9)
 console.log("arr ",arr)
 console.log("srem ", splicerem)