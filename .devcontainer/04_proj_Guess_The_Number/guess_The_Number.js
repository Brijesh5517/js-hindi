let selectedForm=document.querySelector("form");
let gussedArray=[];
let max=100;
let min=1;
let Ans= Math.floor( Math.random()*(max-min+1))+min;
console.log(`gussed ans ${Ans}`)
selectedForm.addEventListener("submit",function(e){
    e.preventDefault();
    let gussedValue=document.querySelector(".guessField").value;
    console.log(`gussedValue ${gussedValue}`);
    let SelectedDiv=document.querySelector(".resultParas");
    console.log(` comp ${parseInt(gussedValue)===Ans}`);
    if( isNaN(gussedValue) || gussedValue>100 || gussedValue<1){
        
        let varWrongMessage=document.createElement("div");
        varWrongMessage.textContent="Please enter a value in range.";
        SelectedDiv.appendChild(varWrongMessage);
    }
    else if(parseInt(gussedValue)===Ans){
        let finalmessage=`You guessed the number correctly which is ${Ans}`;
        let varFinalMessagediv=document.createElement("div");
        varFinalMessagediv.textContent=finalmessage;
        SelectedDiv.appendChild(varFinalMessagediv);
    }
    else{
    gussedArray.push(parseInt(gussedValue));
    //console.log(gussedArray)
    let vargussedArray=gussedArray.join(",");
    //console.log(vargussedArray);
    document.querySelector(".guesses").textContent=vargussedArray;
    let varRemaning=document.querySelector(".lastResult");
    console.log(`${varRemaning} , ${varRemaning.textContent}`)
    let remaningGuess= parseInt( varRemaning.textContent)-1;
    console.log(remaningGuess)
    varRemaning.textContent=remaningGuess;
    gussedValue.value = "";  // Clears the text input
    //gussedValue.focus();
    }

})