let varScore=33;

console.log(typeof(varScore)) // number

let varRuns="33a";
console.log(typeof varRuns) // string

let varRunsInNumber=Number(varRuns);
console.log(varRunsInNumber)// number but value will be Nan => Not a number
console.log(typeof varRunsInNumber);

let varwickets=-1;
let convertWickets=Boolean(varwickets);

console.log(convertWickets)
console.log(typeof convertWickets)