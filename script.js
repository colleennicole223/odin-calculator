
let firstNum = '';
let secondNum = ''; 
let operator = null;

console.log(add(1, 2)+" expected 3");
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
        if(btn.className === "btnOperator"){
            operator = btn.textContent;
        }else if(btn.className === "btnEqual"){
            display.textContent = operate(parseInt(firstNum),operator,parseInt(secondNum));
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

