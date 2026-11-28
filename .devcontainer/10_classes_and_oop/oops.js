// const user={
//     name:"Brijesh",
//     age:23,
//     married: false,
//     getUserDetails: function(){
//         console.log(`${this.name}, ${this.age}`);
//         console.log(this);
//     },
//     getUserDetails_Arrow:    ()=>{
//         console.log(`${this.name}, ${this.age}`);
//         console.log(this);
//     }
// }
// console.log(user.getUserDetails())
// console.log(user.getUserDetails_Arrow());

// const user1 = {
//     name: "Brijesh",
//     age: 30,

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// };
// console.log(user1.greet())

function user(name,age){
    this.name=name;
    this.age=age;
    this.greet= function (){
        console.log(`Hello ${this.name}`)
    }
    return this
};
const user1= new   user("Brijesh",28);
//console.log(user1);

const user2= new  user("Ravi",23);
console.log(user1);
