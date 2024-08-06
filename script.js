
let firstNum = '';
let secondNum = ''; 
let operator = null;

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
            if(secondNum == ''){
                firstNum = (parseFloat(firstNum)*(-1)).toFixed(3);
                display.textContent = firstNum;
            }else{
                secondNum = (parseFloat(secondNum)*(-1)).toFixed(3);
                display.textContent = secondNum;
            }
        }else if(btn.className === "btnBack"){
            if(secondNum == ''){
                firstNum = firstNum.slice(0, (firstNum.length-1));
                display.textContent = firstNum;
            }else{
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
        case "%":
            return remainder(firstNum, secondNum);
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

function remainder(a, b){
    return a%b;
} 
