function clearDisplay(){
    document.getElementById('display').value = " ";
}
function appeendToDisplay(value){
    const display = document.getElementById('display');
    display.value+=value;
}
function calculate(){
    let result = eval(display.value);
    display.value=result;
}
