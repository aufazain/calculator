let display
display = document.getElementById('display');

function injectValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function hitung(){
    try {
        display.value = eval(display.value);
    } catch(error){
        display.value = "invalid";
    }
}