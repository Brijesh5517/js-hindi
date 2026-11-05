const tinderUser=new Object( )
tinderUser.id=1
tinderUser.email="something@brijesh.com"
console.log(tinderUser);
const anotherUser={
    name:"Brijesh",
    id:101
}

//const combinedObject=Object.assign(anotherUser,tinderUser)
// console.log(anotherUser)//{ name: 'Brijesh', id: 1, email: 'something@brijesh.com' }
// // console.log(anotherUser===combinedObject)//true
// const spreadObject={...anotherUser, ...tinderUser}
// console.log(spreadObject)//{ name: 'Brijesh', id: 1, email: 'something@brijesh.com' }

const comobj1=Object.assign({},tinderUser,anotherUser)
const comobj2=Object.assign({},anotherUser,tinderUser)
console.log(comobj1)
console.log(comobj2)