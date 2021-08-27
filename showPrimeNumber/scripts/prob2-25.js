let input;
let condition;
let numberList = [];
let min = 0;
let max = 0;
let avg = 0;
let total = 0;
let count = 0;

while (true) {
  input = prompt("Enter an integer is negative integer to quit: ");
  if (isNaN(input)) {
    // alert("Please enter only Number.");
    input = prompt("Enter an integer is negative integer to quit: ");
  } else {
    condition = input >= 0 ? readInput() : displayStats(numberList);
  }
  if (count == 1) {
    break;
  }
}
function readInput() {
  if (input >= 0) {
    numberList.push(input);
  }
}
function displayStats(numberList) {
  if (numberList.length > 1) {
    numberList.sort(function (a, b) {
      return a - b;
    });
    console.log(numberList);
    for (i = 0; i < numberList.length; i++) {
      total += Number(numberList[i]);
    }
    console.log(total, i);
    avg = total / numberList.length;
    max = Math.max(...numberList);
    min = Math.min(...numberList);
  }
  alert(
    "For the list " +
      numberList +
      " ,the average is " +
      avg +
      ", the minimum is " +
      min +
      ", and the maximum is " +
      max
  );
  count++;
}
