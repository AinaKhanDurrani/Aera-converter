let sqftInput = document.getElementById("sqft");
let yardInput = document.getElementById("yard");
let marlaInput = document.getElementById("marla");


function ConvertTosqft() {
    if (yardInput.value !== "") {
        let sqftvalue = parseFloat(yardInput.value) * 9;
        sqftInput.value=sqftvalue.toFixed(7);

    } else if (marlaInput.value !== "") {
       let sqftvalue = parseFloat(marlaInput.value) * 272.3;
       sqftInput.value=sqftvalue.toFixed(7);
    };
}

function ConvertToMarla() {
    if (sqftInputInput.value !== "") {
       let marlvalue = parseFloat(sqftInput.value) / 272.3;
       marlaInput.value=marlvalue.toFixed(7);

    } else if (yardInput.value !== "") {
        let marlvalue = parseFloat(sqftInput.value) / 30.25;
        marlaInput.value=marlvalue.toFixed(7);
    };
}

function ConvertToYard() {
    if (sqftInput.value !== "") {
        let yardvalue = parseFloat(sqftInput.value) / 9;
        yardInput.value=yardvalue.toFixed(7);

    } else if (marlaInput.value !== "") {
        let yardvalue = parseFloat(marlaInput.value) * 30.25;
        yardInput.value=yardvalue.toFixed(7);
    };
}


function clearIfEmpty(currentFieldId, otherFirstFieldId, otherSecondFieldId) {
    var currentField = document.getElementById(currentFieldId);
    var otherFirstField = document.getElementById(otherFirstFieldId);
    var otherSecondField = document.getElementById(otherSecondFieldId);

    if (currentField.value === "") {
        otherFirstField.value = "";
        otherSecondField.value = "";
    }
}