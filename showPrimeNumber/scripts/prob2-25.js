let input;
let cond;
let numberList = [];
let min = 0;
let max = 0;
let avg = 0;
let total = 0;
let count = 0;

while (true) {
  input = prompt("Enter an integer is negative integer to quit: ");
  if (isNaN(input)) {
    console.log("Please enter only number");
  } else {
    cond = input >= 0 ? readInput() : displayStats(numberList);
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
  if (numberList.length > 0) {
    numberList.sort(function (a, b) {
      return a - b;
    });
    for (i = 0; i < numberList.length; i++) {
      total += Number(numberList[i]);
    }
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
