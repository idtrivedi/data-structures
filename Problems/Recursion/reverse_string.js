function reverseString(string) {
  let reverse = "";
  let length = string.length - 1;

  while (length > 0) {
    reverse = reverse + string[length];
    length = length - 1;
  }
  return reverse;
}

// console.log(reverseString("Ishan"));

function reverse(string) {
  console.log(`Current String: + ${string}`);

  if (string == "") {
    return string;
  }
  let reversePart = reverse(string.substring(0, string.length - 1));
  let result = string[string.length - 1] + reversePart;

  return result;
}

console.log(reverse("Ishan"));
