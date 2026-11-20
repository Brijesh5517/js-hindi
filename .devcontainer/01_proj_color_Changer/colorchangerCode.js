const allbuttons=document.querySelectorAll(".button");
const bodySelected=document.querySelector("body");

allbuttons.forEach((currentbutton)=>{
    currentbutton.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target)
        if(e.target.id==="grey") bodySelected.style.backgroundColor="grey";
        else if(e.target.id==="blue") bodySelected.style.backgroundColor="blue";
        else if(e.target.id==="black") bodySelected.style.backgroundColor="black";
        else if(e.target.id==="yellow") bodySelected.style.backgroundColor="yellow";
    })
})