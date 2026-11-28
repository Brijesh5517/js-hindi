const user={
    name:"Brijesh",
    age:24,
    email:"Brijesh@google.com"
};
console.log(Object.getOwnPropertyDescriptor(user,"name"));
user.name="Brijesh LNU";
Object.defineProperty(user,"name",{writable:false});
user.name="Brijesh Kumar";
console.log(user);
console.log(Object.getOwnPropertyDescriptor(user,"name"));
