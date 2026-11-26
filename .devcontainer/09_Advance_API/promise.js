// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async completed");
//         resolve();
//         console.log("Resolved call completed");
//     }, 10000);
// })
// promiseOne.then(()=>{
//     console.log("Then is executed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async task 2")
//     }, 1000);
//     resolve();
// }).then(function(){
//     console.log("Async task 2 resolved")
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async task 3");
//         resolve({ID: 101,name:"Brijesh",email:"brijeshkumar201498@gmail.com"});
//     },1000)

// })
// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//             resolve({status:"success",name:"Brijesh"});
//         }
//         else{
//             reject({status:"Failed", reason:"Something went wrong"})
//         }
//     },1000)
// });
// promiseFour.then(function(output){
//     console.log("Then statement");
//     console.log(output);
// })
// promiseFour.catch(function(output){
//     console.log("Catch");
//     console.log(output)
// })

const promiseFive=new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({status:"success",name:"Brijesh"});
        }
        else{
            reject({status:"Failed", reason:"Something went wrong"})
        }
    },1000)
});

async function resolvePromiseFive() {
    try {
        const outpout= await promiseFive;
    console.log(outpout)
        
    } catch (error) {
        console.log(error)
    }
}
resolvePromiseFive()