const isValid = (s) => {
  const leftBrackets = ["(", "{", "["];
  const rightBrackets = [")", "}", "]"];

  const leftBracketStack = [];

  if (s.length % 2 !== 0) return false;

  for (let i = 0; i < s.length; i++) {
    if (leftBrackets.includes(s[i])) leftBracketStack.push(s[i]);
    else {
      const leftBracket = leftBracketStack.pop();

      const leftBracketIndex = leftBrackets.indexOf(leftBracket);
      const rightBracketIndex = rightBrackets.indexOf(s[i]);

      console.log(leftBracketIndex, rightBracketIndex);

      if (leftBracketIndex !== rightBracketIndex) {
        return false;
      }
    }
  }

  return leftBracketStack.length === 0;
};

const result = isValid("()");

console.log(result);
