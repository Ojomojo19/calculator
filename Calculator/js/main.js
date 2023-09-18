function cout(value){
    let lcdInput = document.getElementById("calcInput");
    
    // lcdInput.value = value;
    lcdInput.value += value;


    // console.log(value)
}

function calculate(){
let lcdInput = document.getElementById("calcInput");
    lcdInput.value = eval(lcdInput.value) 
}

function clearIn(){
    let lcdInput = document.getElementById("calcInput");
    lcdInput.value = lcdInput.defaultValue;
}

function deleteSome(){
    let lcdInput = document.getElementById("calcInput");
    let inputValue = lcdInput.value;

    if(inputValue.length > 1){
        let cropped = inputValue.substring(0, inputValue.length - 1);
        lcdInput.value = cropped;
    }else{
        lcdInput.value = lcdInput.defaultValue;
    }
    
}   
    