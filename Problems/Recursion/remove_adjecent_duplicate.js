function remove_adjecent_duplicate(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (i === string[i].length - 1 || string[i] !== string[i + 1]) {
      result += string[i];
    }
  }
  return result;
}

console.log(remove_adjecent_duplicate("Hello"));

function remove_adjecent_duplicate_rec(string) {
  if (string.length <= 1) {
    return string;
  }
  if (string[0] === string[1]) {
    return remove_adjecent_duplicate_rec(string.substring(1));
  }
  return remove_adjecent_duplicate_rec(
    string[0] + remove_adjecent_duplicate_rec(string.substring(1))
  );
}
console.log(remove_adjecent_duplicate("Hello"));
