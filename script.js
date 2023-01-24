'use strict';

// query selectors / variables
const num = document.querySelectorAll('.num');
const display = document.querySelector('.numDisplay');
const clear = document.querySelector('.clear');
const operator = document.querySelectorAll('.operator');
const total = document.querySelector('.equals');

let num1;
let num2;
let operand;
let totalSum;
let resetDisplay = false;

const operate = function (operator, num1, num2) {
  if (operator === '+') return +num1 + num2;
  if (operator === '-') return num1 - num2;
  if (operator === 'x') return num1 * num2;
  if (operator === '÷' && (num1 === 0 || num2 === 0))
    alert('WHAT HAVE YOU DONE!!');
  if (operator === '÷') return parseInt(num1) / parseInt(num2);
};

// adds event listeners to each number button and stores them in a variable
num.forEach(num =>
  num.addEventListener('click', function () {
    if (resetDisplay === true) display.textContent = '';
    display.textContent += +num.textContent;
    num2 = +display.textContent;
    resetDisplay = false;
    return num2;
  })
);

// clears display and all variables holding numbers or operands
clear.addEventListener('click', function () {
  display.textContent = '';
  num1 = num2 = operand = totalSum = '';
});

//  stores the pressed operand in a variable
operator.forEach(operator =>
  operator.addEventListener('click', function () {
    if (num2 && (totalSum || num1)) {
      console.log(
        'operand',
        operand,
        'totalsum',
        totalSum,
        'num1',
        num1,
        'num2',
        num2
      );
      let sum = operate(operand, totalSum ? totalSum : num1, num2);
      display.textContent = '';
      display.textContent += sum;
      totalSum = display.textContent;
      operand = operator.textContent;
      resetDisplay = true;
    }
    // operator.classList.add('operator--active');
    else {
      display.textContent = '';
      num1 = num2;
      //   num2 = '';
      operand = operator.textContent;
      resetDisplay = false;
    }
    // console.log(num1);
  })
);

total.addEventListener('click', function () {
  let sum = operate(operand, num1, num2);
  display.textContent = '';
  display.textContent += +sum;
  num1 = sum;
  num2 = operand = totalSum = '';
  resetDisplay = true;
});
