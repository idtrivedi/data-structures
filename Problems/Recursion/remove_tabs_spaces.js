function remove_tabs_spaces(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char !== " " && char !== "\t") {
      result += char;
    }
  }
  return result;
}
console.log(remove_tabs_spaces("Ishan is here"));

// Recursive approach
function remove_tabs_space_recursive(string) {
  if (string.length == 0) {
    return "";
  }
  const firstChar = string[0];
  const restOfString = string.slice(1);
  if (firstChar === " " || firstChar === "\t") {
    return remove_tabs_space_recursive(restOfString);
  }

  return firstChar + remove_tabs_space_recursive();
}
console.log(remove_tabs_spaces("Ishan   is  here too"));
