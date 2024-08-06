
let firstNum = '';
let secondNum = ''; 
let operator = null;

console.log(add(1, 2)+" expected 3");
console.log(add(1, 0.5)+" expected 1.5");
console.log(subtract(1, 2)+" expected -1");
console.log(multiply(1, 2)+" expected 2");
console.log(divide(1, 2)+" expected 0.5");

console.log(operate(1, "+", 2)+" expected 3");
console.log(operate(1, "-", 2)+" expected -1");
console.log(operate(1, "x", 2)+" expected 2");
console.log(operate(1, "/", 2)+" expected 0.5");

const btns = document.querySelectorAll('button');
const display = document.querySelector('#displayContent')

btns.forEach(btn => {
    btn.addEventListener(('click'), () => {
        if(operator == '/' && secondNum == '0'){
            display.textContent = '..nope';
            firstNum = '';
            secondNum = ''; 
            operator = null;
        }else if(btn.className === "btnOperator" && secondNum != ''){
            console.log("Inputed a new operator")
            display.textContent = operate(parseFloat(firstNum),operator,parseFloat(secondNum)).toFixed(3);
            firstNum = display.textContent;
            secondNum = '';
            operator = btn.textContent;
        }else if(btn.className === "btnOperator"){
            operator = btn.textContent;
        }else if(btn.className === "btnEqual"){
            display.textContent = operate(parseFloat(firstNum),operator,parseFloat(secondNum)).toFixed(3);
            firstNum = display.textContent;
            secondNum = '';
            operator = null;
        }else if(btn.className === "btnClear"){
            display.textContent = '';
            firstNum = '';
            secondNum = ''; 
            operator = null;
        }else if(btn.className === "btnPosNeg"){
            console.log("pos neg")
            if(secondNum == ''){
                firstNum = (parseFloat(firstNum)*(-1)).toFixed(3);
                display.textContent = firstNum;
            }else{
                secondNum = (parseFloat(secondNum)*(-1)).toFixed(3);
                display.textContent = secondNum;
            }
        }else if(btn.className === "btnBack"){
            
            if(secondNum == ''){
                console.log("backspace f n"+firstNum.slice(0, (firstNum.length-1)))
                firstNum = firstNum.slice(0, (firstNum.length-1));
                display.textContent = firstNum;
            }else{
                console.log("backspace s n"+ secondNum.slice(0, (secondNum.length-1)))
                secondNum = secondNum.slice(0, secondNum.length-1);
                display.textContent = secondNum;
            }
        }else if(operator === null){
            firstNum += btn.textContent;
            display.textContent = firstNum;
        }else{
            secondNum += btn.textContent;
            display.textContent = secondNum;
        }
    })
});

function operate(firstNum, opertator, secondNum){
    switch(opertator){
        case "x":
            return multiply(firstNum, secondNum);
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
    }
}

function add(a, b){
    return a+b;
} 

function subtract(a, b){
    return a-b;
} 

function multiply(a, b){
    return a*b;
} 

function divide(a, b){
    return a/b;
} 

