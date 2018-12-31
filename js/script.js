//fetching DOM items
var inputNumber = document.querySelector("#numbers");
var display = document.querySelector("#display");
var operations = document.querySelector("#operations");
var clear = document.querySelector("#button_clr");
var equal = document.querySelector("#button_eql");
var sqrt = document.querySelector("#button_sqrt");
var reset = document.querySelector("#button_reset");
var square = document.querySelector("#button_square");
var percent = document.querySelector("#button_percent");

//Declaring global variables
var displayNumber = "";
var numberOne = null;
var opertionSymbol = null;

//Adding Event Listeners to the buttons
inputNumber.addEventListener('click', numberPress);
operations.addEventListener('click', operationsPress);
clear.addEventListener('click', inputClear);
equal.addEventListener('click', operationEqual);
sqrt.addEventListener('click', operationSQRT);
reset.addEventListener('click', resetAll);
square.addEventListener('click', operationSquare);
percent.addEventListener('click', operationPercent);

function numberPress(event){
    if(event.target.type === "button"){
        display.value += event.target.value;
        //display.value = displayNumber;
    }
}

function operationsPress(event){
    if(numberOne == null){
        numberOne = parseFloat(display.value);
        inputClear();
        displayNumber = "";
        opertionSymbol = event.target.value;
        //console.log("first: ", numberOne);
    } else {
        operation(opertionSymbol);
        if(isNaN(numberOne)){
            alert("This is not a valid operation");
            resetAll();
        }
        else{
            display.value = numberOne;
            displayNumber = "";
            opertionSymbol = event.target.value;
            //console.log("repeat: ", numberOne);
        }
    }
}

function operationSQRT(){
    if(numberOne === null && display.value === ''){
        alert("Please input a number first!");
        resetAll();
    }
    else if(numberOne === null && display.value !== ''){
        numberOne = Math.sqrt(parseFloat(display.value));
        display.value = numberOne;
        numberOne = null;
    }
    else if(numberOne !== null && display.value === ''){
        numberOne = Math.sqrt(numberOne);
        display.value = numberOne;
        numberOne = null;
    }
    else{
        numberOne = Math.sqrt(parseFloat(display.value));
        display.value = numberOne;
        numberOne = null;
    }
}

function operationSquare(){
    if(numberOne === null && display.value === ''){
        alert("Please input a number first!");
        resetAll();
    }
    else if(numberOne === null && display.value !== ''){
        numberOne = Math.pow(parseFloat(display.value),2);
        display.value = numberOne;
        numberOne = null;
    }
    else if(numberOne !== null && display.value === ''){
        numberOne = Math.pow(numberOne,2);
        display.value = numberOne;
        numberOne = null;
    }
    else{
        numberOne = Math.pow(parseFloat(display.value),2);
        display.value = numberOne;
        numberOne = null;
    }
}

function operationPercent(){
    display.value = parseFloat(display.value) / 100;
}

//Function when the equal sign is pressed
function operationEqual() {
    if(numberOne == null){
        alert(`To press "Equal" you need to enter at least two numbers first.`);
    }
    else{
        operation(opertionSymbol);
        display.value = numberOne;
        //console.log("Equal: ", numberOne);
        numberOne = null;
        displayNumber = "";
        operationSymbol = "";
    }
}

function operation(type){
    switch(type){
        case '+':
        numberOne += parseFloat(display.value);
        break;

        case '-':
        numberOne -= parseFloat(display.value);
        break;

        case 'x':
        numberOne *= parseFloat(display.value);
        break;

        case '/':
        numberOne /= parseFloat(display.value);
        break;

        case '^':
        operationPower();
        break;

        default:
        numberOne = numberOne;
        break;
    }
}

function operationPower(){
    numberOne = Math.pow(numberOne, parseFloat(display.value));
}

//Clearing the input display field
function inputClear(){
    display.value = "";
}

function resetAll(){
    location.reload();
}