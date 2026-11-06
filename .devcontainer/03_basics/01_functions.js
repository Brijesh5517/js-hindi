function addNumbers(num1, num2){
    return num1+num2
}
// console.log(addNumbers(2,3))//5
// console.log(addNumbers())//NaN

function greet(name){
    if(!name) return
    return `Hello ${name}`
}
console.log(greet("Brijesh")) //Hello Brijesh
console.log(greet()) // undefined