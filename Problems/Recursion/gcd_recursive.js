function gcd_recursive(num1, num2) {
  if (num1 == num2) {
    return num1;
  }
  if (num1 > num2) {
    return gcd_recursive(num1 - num2, num2);
  } else {
    return gcd_recursive(num1, num2 - num1);
  }
}

console.log(gcd_recursive(42, 36));
