function sum_of_n(num) {
  if (num == 1) {
    return 1;
  }
  return num + sum_of_n(num - 1);
}

console.log(sum_of_n(6));
