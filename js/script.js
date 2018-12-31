//fetching DOM items
var inputNumber = document.querySelector("#numbers");
var display = document.querySelector("#display");
var operations = document.querySelector("#operations");
var clear = document.querySelector("#button_clr");
var equal = document.querySelector("#button_eql");

//Declaring global variables
var displayNumber = "";
var numberOne = null;
var opertionSymbol = null;

//Adding Event Listeners to the buttons
inputNumber.addEventListener('click', numberPress);
operations.addEventListener('click', operationsPress);
clear.addEventListener('click', inputClear);
equal.addEventListener('click', operationEqual);

function numberPress(event){
    displayNumber += event.target.value;
    display.value = displayNumber;
}

function operationsPress(event){
    if(numberOne == null){
        numberOne = parseInt(display.value);
        inputClear();
        displayNumber = "";
        opertionSymbol = event.target.value;
        console.log("first: ", numberOne);
    } else {
        operation(opertionSymbol);
        display.value = numberOne;
        displayNumber = "";
        opertionSymbol = event.target.value;
        console.log("repeat: ", numberOne);
    }
}

function operation(type){
    switch(type){
        case '+':
        numberOne += parseInt(display.value);
        break;

        case '-':
        numberOne -= parseInt(display.value);
        break;

        case 'x':
        numberOne *= parseInt(display.value);
        break;

        case '/':
        numberOne /= parseInt(display.value);
        break;

        default:
        numberOne = numberOne;
        break;
    }
}

function inputClear(){
    display.value = "";
}

function operationEqual() {
    if(numberOne == null){
        alert(`To press "Equal" you need to enter at least two numbers first.`);
    }
    else{
        operation(opertionSymbol);
        display.value = numberOne;
        console.log("Equal: ", numberOne);
        numberOne = null;
        displayNumber = "";
        operationSymbol = "";
    }
}