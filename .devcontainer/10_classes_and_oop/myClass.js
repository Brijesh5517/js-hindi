class User {
    constructor(name) {
        this.name=name;
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
const br=new User("Brijesh");
console.log(br,br.greet(), typeof br, br.prototype)