function setUserName(username){
    console.log("inside set user name function");
    this.username=username;
}
function createUser(email,username,password){
    this.email=email;
    this.password=password;
    setUserName.call(this,username);
}
const chai=new createUser("Brijesh","JS","dlfjnhs");
console.log(chai, typeof chai)