/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let wordStarted = false;
  let word = "";
  if (s.length === 1) return s.length;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== "" && s[i] !== " ") {
      wordStarted = true;
      word += s[i];
      if (i === 0) return word.length;
    } else if (wordStarted === true) {
      return word.length;
    }
  }
};

const result = lengthOfLastWord("a ");
console.log(result);
