var c=44
if (true){
    let a=10
    b=2
    // console.log("a: ",a)// 10
    // console.log("b: ",b)//2
}

// console.log(a)// error
// console.log(b)//error
// console.log(c) //44

// function one()
// {
//     const username="Brijesh"
//     function two(){
//         let website="github"
//         console.log(username)
//     }
//     two()
//     console.log(website)

// }
// one()

function addTwo(num){
    return num+5
}

const finalans=function addNumbers(num){
    return num+2
}
console.log(addTwo(5))//5
//console.log(addNumbers(5)) //error
console.log(finalans(5))