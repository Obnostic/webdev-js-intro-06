"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");


    // Write the logic to decide if the variable "num" is even or odd
    // and set the element's value the string "Even" or "Odd" accordingly
function evenOrOdd() {
    const num = 3;
    function Even(numb) {
        return numb % 2 === 0;
      }
      
      function Odd(numb) {
        return numb % 2 !== 0;
      }
        
      if (even(num)) {
        console.log(num + " is even.");
      } else {
        console.log(num + " is odd.");
      }


}

function sumTheNumbers() {
    let sum = 0;
    // Write the logic to sum the numbers 1 through 10
    // using a for loop. Check the expected output
    // on the assignment page
    for (let i=0; i === 10; i++) {
        sum = sum + i;
    }
    console.log(sum);
}



function createNumberArray() {
 
    // Write the logic that loops 10 times and adds the value
    // to numberArray each iteration. Check the expected output
    // on the assignment page

    const numberArray = [];
    for (let j=0; j < 9; j++) {
        numberArray[j] = j+1;
    }
    console.log(numberArray);
}



function render() {
    // Call the created functions
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();
}

submissionBtn.addEventListener("click", function () {
    render();
});
