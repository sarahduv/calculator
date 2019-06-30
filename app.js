'use strict';

const numberButtons = document.getElementsByClassName('number');
const operatorButtons = document.getElementsByClassName('operator');
const calculatorScreen = document.getElementById('calculatorScreen');
const evaluateButton = document.getElementById('equalSign');
const allClearButton = document.getElementById('allClear');
const decimalButton = document.getElementById('decimal');
const KIND_OPERATOR = 'operator';
const KIND_OPERAND = 'operand';
const KIND_NOTHING = '';
const KIND_DECIMAL = 'decimal';

let lastInputKind = KIND_NOTHING;

for (const numberButton of numberButtons){
  numberButton.onclick = function (event){
    addToScreen(event.target.value, KIND_OPERAND);
  }
}

// this is the same as above
// for (let i=0; i<numberButtons.length; i++){
//   const numberButton = numberButtons[i];
//   numberButton.onclick = function (){
//     console.log('some number clicked');
//   }
// }

for (const operatorButton of operatorButtons){
  operatorButton.onclick = function (Event){
    addToScreen(event.target.value, KIND_OPERATOR);
  }
}

function addToScreen(character, kind){
  if (lastInputKind === KIND_NOTHING && kind === KIND_OPERATOR){
    return;
  } else if (lastInputKind === KIND_OPERATOR && kind === KIND_OPERATOR){
    return;
  } if (lastInputKind === KIND_DECIMAL && kind === KIND_DECIMAL){
    return;
  }
  calculatorScreen.value += character;
  lastInputKind = kind;
}


evaluateButton.onclick = function(){
  evaluate();
}

function evaluate(){
  // const toEvaluate = calculatorScreen.value;
  // const result = window.eval(toEvaluate);
  // calculatorScreen.value = result;
  calculatorScreen.value = window.eval(calculatorScreen.value);
  lastInputKind = KIND_OPERAND;
}

allClearButton.onclick = function(){
  clearScreen();
}

function clearScreen(){
  calculatorScreen.value = KIND_NOTHING;
  lastInputKind = KIND_NOTHING;
}

decimalButton.onclick = function(){
  addToScreen('.', KIND_DECIMAL);
}







