//ฟีโบนัชชี
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
console.log(fibonacci(6)); // 8
