let myArrya=["one","two","three"]
// for (let index = 0; index < myArrya.length; index) {
//     const element = myArrya[index];
//     console.log(element)
    
// }

// for(const i of myArrya){
//     console.log(i)
// }

const myMap =new Map()
myMap.set('id1',1)
myMap.set("id2",2)
myMap.set("id3",3)

for(const [key ,value] of myMap)
{
    console.log(key, value)
}
