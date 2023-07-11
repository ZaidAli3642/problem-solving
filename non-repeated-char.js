// a green apple

// First non repeated character

const nonRepeatedCharacter = (str = "a green apple") => {
  const obj = {};

  let map = new Map();

  for (let ch of str) {
    let count = map.has(ch) ? map.get(ch) : 0;
    map.set(ch, count + 1);
  }

  for (let ch of str) {
    if (map.get(ch) === 1) return ch;
  }
};

const result = nonRepeatedCharacter();
console.log(result);
