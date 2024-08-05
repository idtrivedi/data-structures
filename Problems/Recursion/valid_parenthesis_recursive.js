function valid_parenthesis(array, startIndex = 0, count = 0) {
  if (startIndex == array.length) {
    return count == 0;
  }

  if (count < 0) {
    return false;
  }

  if (array[startIndex] == "(") {
    valid_parenthesis(array, startIndex + 1, count + 1);
  } else if (array[startIndex] == ")") {
    valid_parenthesis(array, startIndex + 1, count - 1);
  }
}
