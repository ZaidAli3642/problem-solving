// Find the most repeated element in an array of integers. What is the
// time complexity of this method? (A variation of this exercise is finding
// the most repeated word in a sentence. The algorithm is the same. Here
// we use an array of numbers for simplicity.)
// Input: [1, 2, 2, 3, 3, 3, 4]
// Output: 3

const mostRepeatedInteger = (arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]) => {
  let frequency = {};
  let maxCount = 0;
  let mostRepeatedInteger;

  for (let value of arr) {
    frequency[value] = (frequency[value] || 0) + 1;

    if (frequency[value] > maxCount) {
      maxCount = frequency[value];
      mostRepeatedInteger = value;
    }
  }

  return mostRepeatedInteger;
};

const result = mostRepeatedInteger();
console.log(result);
