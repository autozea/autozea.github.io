let input;
let cond;
let list = [];
let avg = 0;
let max = 0;
let min = 0;
let total = 0;
let count = 0;

while (true) {
  input = prompt("Please enter the number");
  cond = input >= 0 ? readInput() : displayStats(list);
  if (count == 1) {
    console.log(count);
    break;
  }
}
function readInput() {
  if (input > 0) {
    list.push(input);
  }
}
function displayStats(list) {
  if (list.length > 1) {
    list.sort(function (a, b) {
      return a - b;
    });
    console.log(list);
    for (i = 0; i < list.length; i++) {
      total += Number(list[i]);
    }
    console.log(total, i);
    avg = total / list.length;
    max = Math.max(...list);
    min = Math.min(...list);
  }
  alert(
    "For the list " +
      list +
      " ,the average is " +
      avg +
      ", the minimum is " +
      min +
      ", and the maximum is " +
      max
  );
  count++;
}
