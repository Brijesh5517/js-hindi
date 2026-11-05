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

// const comobj1=Object.assign({},tinderUser,anotherUser)
// const comobj2=Object.assign({},anotherUser,tinderUser)
// console.log(comobj1)//{ id: 101, email: 'something@brijesh.com', name: 'Brijesh' }
// console.log(comobj2)//{ name: 'Brijesh', id: 1, email: 'something@brijesh.com' }
const course={
    name:"Brijesh",
    price:999,
    courseInstructor:"Brijesh"
}

const {courseInstructor: ins}=course
//console.log(courseInstructor) //Brijesh
console.log(ins) //Brijesh