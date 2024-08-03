function isVowel(character) {
  let lowerChar = character.toLowerCase();
  let vowels = "aeiou";

  if (vowels.indexOf(lowerChar) != -1) {
    return true;
  } else {
    return false;
  }
}

function countVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("Ishan"));

// function recursiveCountVowels(string, stringLength) {
//   recursiveCountVowels(string, string.length - 1);
// }
