// let a=[1,2,3]
// let b=[4,5,6]
// a.push(b)
// console.log(a) // [ 1, 2, 3, [ 4, 5, 6 ] ]
// let c=a.concat(b)
// console.log(c) //[ 1, 2, 3, 4, 5, 6 ]

// spread
// let spreadarrays=[...a,...b]
// console.log(spreadarrays) //[ 1, 2, 3, 4, 5, 6 ]

// let nestedArrays=[1,2,3,4,[5,6,7],8,[9,10,[11]]]
// let flatArray=nestedArrays.flat(Infinity)
// console.log(flatArray) //[
// //    1, 2, 3, 4,  5,
// //    6, 7, 8, 9, 10,
// //   11
// // ]

// console.log(Array.isArray("brijesh"))// false
// console.log(Array.from("Brijesh")) //[
//   'B', 'r', 'i',
//   'j', 'e', 's',
//   'h'
// ]

// let a=1
// let b=2
// let c=3
// console.log(Array.of(a,b,c))// [ 1, 2, 3 ]

console.log(new Array(3))