function fib(n) {
  if (n < 0) {
    return 0;
  }
  if (n == 0) {
    return 0;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));
