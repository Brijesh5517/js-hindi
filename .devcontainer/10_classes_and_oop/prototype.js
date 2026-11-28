const str="brijesh ";
const js="ja ";
 String.prototype.trueLength=function(){
    console.log(`True length is: ${this.trim().length}; normal length: `, this.length)
 }
 console.log(str.trueLength());
 console.log(js.trueLength())