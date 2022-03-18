var display = document.querySelector('#display');
var operatorPressed = false;
var operator = '';
var leftOperand = '';
var rightOperand = '';


function press(numberKey) {
    var keyPress = numberKey;
    var currentDisplay = display.innerText;

    if (currentDisplay == '0' || operatorPressed) {
        display.innerText = keyPress;
        operatorPressed = false;
    } else {
        display.innerText = currentDisplay + keyPress;
    }

}

function setOP(op) {
    operatorPressed = true;
    operator = op;
    leftOperand = display.innerText;
}

function equals() {
    rightOperand = display.innerText;

    console.log('leftOperand', leftOperand);
    console.log('rightoper', rightOperand);
    console.log("operator", operator);
    var total = eval(leftOperand + operator + rightOperand);
    display.innerText = total;

}

function allClear() {
    console.log(display.innerText);
    display.innerText = '0';
    leftOperand = '';
    rightOperand = '';
    operator = '';
}