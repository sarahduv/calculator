'use strict';

const numberButtons = document.getElementsByClassName('number');
const operatorButtons = document.getElementsByClassName('operator');
const calculatorScreen = document.getElementById('calculatorScreen');

for (const numberButton of numberButtons){
  numberButton.onclick = function (event){

    addToScreen(event.target.value);
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
    addToScreen(event.target.value);
  }
}

function addToScreen(character){
  if (calculatorScreen.value === '0'){
    calculatorScreen.value = '';
  }
  calculatorScreen.value += character;
}




