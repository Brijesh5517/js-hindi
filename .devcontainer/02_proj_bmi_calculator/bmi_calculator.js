const selectForm=document.querySelector("form");
selectForm.addEventListener('submit',function(currentevent){
    currentevent.preventDefault();
    const varHeight= parseInt(document.querySelector("#Height").value);
    const varWeight= parseInt(document.querySelector("#weight").value);
    const varResult=document.querySelector("#result")
    if(isNaN(varHeight) || varHeight===''|| varHeight<1){
        varResult.textContent="Please provide a proper height"
    }
    else if(isNaN(varWeight) || varWeight===''|| varWeight<1){
        varResult.textContent="Please provide a proper weight"
    }
    else{
        const result=(varWeight/((varHeight*varHeight/10000).toFixed(2))).toFixed(2)
        varResult.textContent=`Your BMI is ${result}.`
    }
})
