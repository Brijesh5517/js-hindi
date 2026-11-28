const str= new String("brijesh");
//const str= "brijesh";
str.age=23;
// console.log(str)
// console.log(str.age)

function multipleby5(num){
 return num*5
}
multipleby5.power="Brijesh";
// console.log(multipleby5)
// console.log(multipleby5.power)
// class User{
//     constructor(name, age){
//         this.age=age;
//         this.name=name;
//     }
//     greet(){
//         console.log(`Hellow ${this.name}`);
//     }
// }
// const user1=new User("br",35);
// console.log(user1.greet())

function createUser(name,score) {
    this.name=name;
    this.score=score;    
    return "brijesh";
}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`${this.name}, ${this.score}`);
}

const chai= new createUser("Chai",25);
const tea=new createUser("Tea",250);
console.log("chai ",chai.increment(),chai.printMe());
console.log("Tea ", tea.increment(),tea.printMe());

// function name(name){
//  console.log("name");
// };
// function name(name, age){
//  console.log("name overloading");
 
// };

// name("brijesh");
// name("brijesh",23);