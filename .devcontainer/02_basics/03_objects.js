const mysym=  Symbol("123")
const juser={
    name:"Brijesh",
    age :26,
    [mysym]:Symbol("456"),
    location:"Delhi",
    email:"brijesh@nrijesh.com",
    isloggedIn:false,
    "full name": "Brijesh Brijesh"
}

// console.log(juser.age)
// console.log(juser["full name"])

 juser.email="Brijesh@microsoft.com"
 juser[mysym]=Symbol("9999")
 juser.mobileno=880233666332

 juser.grreting=function(){
    console.log(`Hello ${this["full name"]}  welcome to javascrpt world `)
 }
 juser.grreting()
// console.log(juser.grreting())