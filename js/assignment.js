"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

let nu;
    // Write the logic to decide if the variable "num" is even or odd
    // and set the element's value the string "Even" or "Odd" accordingly
function evenOrOdd() {
    const num = 3;
    let numBool;
    function Even(num) {
        return numBool % 2 == 0;
      }
      
    function Odd(num) {
        return numBool % 2 !== 0;
    }
        
    if (numBool) {
        document.getElementById("even-or-odd").innerHTML="Even";
      } else {
        document.getElementById("even-or-odd").innerHTML="Odd";
    }
    
}

function sumTheNumbers() {
    let sum = 0;
    let i = 0;
    // Write the logic to sum the numbers 1 through 10
    // using a for loop. Check the expected output
    // on the assignment page
    for (i = 0; i < 11; i++) {
        sum = sum + i;
    }
    document.getElementById("sum-the-numbers").innerHTML=sum;
}



function createNumberArray() {
 
    // Write the logic that loops 10 times and adds the value
    // to numberArray each iteration. Check the expected output
    // on the assignment page

    const numberArray = [];
    let presentString="";
    let commaString=",";
    for (let j=0; j < 10; j++) {
        numberArray[j] = j+1;
    }
    for (let k=0; k < 10; k++) {
        if (k > 8) {commaString=""};
    presentString = presentString + numberArray[k] + commaString;
    }
    document.getElementById("create-number-array").innerHTML=presentString;
}



 function render() {
    // Call the created functions
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();
}; 



submissionBtn.addEventListener("click", function () {
    
    
  
   render(); 
});
