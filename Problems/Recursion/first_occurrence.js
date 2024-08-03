function firstOccurrence(arr, findMe, currIndex) {
  while (currIndex < arr.length) {
    if (arr[currIndex] == findMe) {
      return currIndex;
    }
    currIndex += 1;
  }
  return -1;
}

function recursiveFirstOcc(arr, findMe, currIndex) {
  if (arr.length === currIndex) {
    return -1;
  }
  if (arr[currIndex] == findMe) {
    return currIndex;
  }
  return recursiveFirstOcc(arr, findMe, currIndex + 1);
}
