// function printNums() {
//     console.log(1);
//     setTimeout(function() {console.log(2); }, 1000);
//     setTimeout(function() {console.log(3); }, 0);
//     console.log(4);
// }
// printNums();

function printSum() {
    debugger
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
  }
  
  function calculateSum(num1, num2) {
    let result = Number(num1) + Number(num2)
    return result
  }
  
  function init() {
    document.getElementById('printSum').addEventListener('click', printSum);
  }
  
  window.addEventListener('DOMContentLoaded', init);
