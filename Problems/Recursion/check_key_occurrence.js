// Iterative approach
function countkey(array, key) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      count++;
    }
  }
  return count;
}

//Recursive approach
function recursiveCountKey(array, key, index = 0) {
  if (index >= array.length) {
    return 0;
  }

  if (array[index] === key) {
    return 1 + recursiveCountKey(array, key, index + 1);
  } else {
    return recursiveCountKey(array, key, index + 1);
  }
}
