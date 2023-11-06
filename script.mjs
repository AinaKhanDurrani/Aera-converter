let inputValue = document.getElementById("input");
let outputValue = document.getElementById("output");
let inputOption = document.getElementById("input_option");
let outputOption = document.getElementById("output_option");

function convert() {

    const inputValueNumber = parseInt(inputValue.value);

    if (inputOption.value === outputOption.value) {
        outputValue.value = inputValueNumber ;
    } else if (inputOption.value === "Square Feet" && outputOption.value === "Square Yards") {
        convertSqftToYard(inputValueNumber);
    } else if (inputOption.value === "Square Feet" && outputOption.value === "Marla") {
        convertSqftToMarla(inputValueNumber);
    } else if (inputOption.value === "Square Yards" && outputOption.value === "Square Feet") {
        convertSqydToFoot(inputValueNumber);
    } else if (inputOption.value === "Square Yards" && outputOption.value === "Marla") {
        convertSqydToMarla(inputValueNumber);
    } else if (inputOption.value === "Marla" && outputOption.value === "Square Feet") {
        convertMarlaToFoot(inputValueNumber);
    } else if (inputOption.value === "Marla" && outputOption.value === "Square Yards") {
        convertMarlaToYard(inputValueNumber);
    }
}

function convertSqftToYard(value) {
    outputValue.value = (value / 9).toFixed(5) ;
}

function convertSqftToMarla(value) {
    outputValue.value = (value / 272.3).toFixed(5) ;
}

function convertSqydToFoot(value) {
    outputValue.value = (value * 9).toFixed(5);
}

function convertSqydToMarla(value) {
    outputValue.value = (value / 30.25).toFixed(5);
}

function convertMarlaToFoot(value) {
    outputValue.value = (value * 272.3).toFixed(5) ;
}

function convertMarlaToYard(value) {
    outputValue.value = (value * 30.25).toFixed(5) ;
}

function clearIfEmpty(firstvalue, secondvalue) {
    var firstvalue = document.getElementById(firstvalue);
    var secondvalue = document.getElementById(secondvalue);

    if (firstvalue.value === "") {
        secondvalue.value = "";
    }
}