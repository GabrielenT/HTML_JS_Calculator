
var bufferValue = 0;
var symbolBuffer = 0;
var buffer = 0;
var mathValue = 0;
function clearValues() {
    mathValue = 0;
    bufferValue = 0;
    symbolBuffer = 0;
    buffer = 0;
    result.innerHTML = mathValue;
}
function removeNumber() {
    if (mathValue.length == 1) {
        mathValue = 0;
    }
    else {
        mathValue = mathValue.substring(0, mathValue.length - 1);
    }
}
function handleNumber(value) {
    if (mathValue == 0) {
        mathValue = value;
        result.innerHTML = mathValue;
    }
    else {
        mathValue = mathValue + value;
        result.innerHTML = mathValue;
    }
}

function addition() {
    if (bufferValue != 0) {
        if (symbolBuffer != 0) {
            executeBuffer();
        }
    }
    else {
        buffer = 1;

        bufferValue = mathValue;
        mathValue = 0;
    }
    symbolBuffer = 1;
}
function reduction() {
    if (bufferValue != 0) {
        if (symbolBuffer != 0) {
            executeBuffer();
        }
    }
    else {
        buffer = 1;

        bufferValue = mathValue;
        mathValue = 0;
    }
    symbolBuffer = 2;
}
function multiplication() {
    if (bufferValue != 0) {
        if (symbolBuffer != 0) {
            executeBuffer();
        }
    }
    else {
        buffer = 1;
        bufferValue = mathValue;
        mathValue = 0;
    }
    symbolBuffer = 3;

}
function splitting() {
    if (bufferValue != 0) {
        if (symbolBuffer != 0) {
            executeBuffer();
        }
    }
    else {
        buffer = 1;
        bufferValue = mathValue;
        mathValue = 0;
    }
    symbolBuffer = 4;
}
function executeBuffer() {
    switch (symbolBuffer) {
        case 1: {
            mathValue = parseInt(bufferValue) + parseInt(mathValue);
        } break;
        case 2: {
            mathValue = parseInt(bufferValue) - parseInt(mathValue);
        } break;
        case 3: {
            mathValue = parseInt(bufferValue) * parseInt(mathValue);
        } break;
        case 4: {
            mathValue = parseInt(bufferValue) / parseInt(mathValue);
        } break;
        case 5: {
            clearValues()
        } return;
    }
    result.innerHTML = mathValue;
    bufferValue = mathValue;
    mathValue = 0;
    symbolBuffer = 0;
    buffer = 0;
}