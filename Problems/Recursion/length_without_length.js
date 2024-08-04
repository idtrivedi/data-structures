function get_length(inputString) {
  if (inputString === "") {
    return 0;
  }
  return 1 + get_length(inputString.substring(1));
}
console.log(get_length("Ishan Trivedi"));
