const currentuse={
 name:"Brijesh",
 id:99,
 welcomeMessgae: function(){
    console.log(`Welocome ${this.name}.`)
    
 }
}
// currentuse.welcomeMessgae()//Welocome Brijesh.
// console.log(this) //{} 
const addTwo=(num1,num2)=>{
    return num1+num2
}
// console.log(addTwo(5,3))//8
const addnum=(num1, num)=> num1+num
// console.log(addnum(5,3)) //8
const addition=(num1,num)=> (num1+num)
const returnObject=()=>({username:"Brijesh"})
const returnObject1=()=>{username:"Brijesh"}
console.log(returnObject()) //{ username: 'Brijesh' }
console.log(returnObject1()) //undefined