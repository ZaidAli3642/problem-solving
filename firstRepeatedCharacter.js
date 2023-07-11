// green apple

const firstRepeatedCharacter = (str = "green apple") => {
  let set = new Set();

  for (let ch of str) {
    if (set.has(ch)) return ch;

    set.add(ch);
  }
};
const result = firstRepeatedCharacter();

console.log(result);
