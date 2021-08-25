function showPrimes(n) {
  let primeList = []
  for (let i = 2; i <= n; i++) {
    if (!isPrime(i)) continue;
    primeList.push(i)
  }
  alert(`For n = ${inputNumber} prime numbers are ${primeList}`)
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true
}

let inputNumber = Number(prompt("Enter a positive integer: "));
for (;;) {
  if (Number.isInteger(inputNumber) && inputNumber >= 2) {
    showPrimes(inputNumber)
    break;
  } else {
    inputNumber = Number(prompt("Enter a positive integer: "));
  }
}
