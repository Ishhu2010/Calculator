let display=document.getElementById("main");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch(e){
        display.value="error";
    }
}