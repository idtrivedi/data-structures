function firstOccurrence(arr, findMe, currIndex) {
  while (currIndex < arr.length) {
    if (arr[currIndex] == findMe) {
      return currIndex;
    }
    currIndex += 1;
  }
  return -1;
}
