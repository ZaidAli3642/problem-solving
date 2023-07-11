// Given an array of integers, count the number of unique pairs of
// integers that have difference k.
// Input: [1, 7, 5, 9, 2, 12, 3] K=2
// Output: 4
// We have four pairs with difference 2: (1, 3), (3, 5), (5, 7), (7, 9). Note
// that we only want the number of these pairs, not the pairs themselves.

const mostFrequestPair = (input = [1, 7, 5, 9, 2, 12, 3], k = 2) => {
  const uniqueSet = new Set(input);
  let count = 0;
  for (let value of input) {
    if (uniqueSet.has(value + k)) {
      count++;
    }
  }

  return count;
};

const result = mostFrequestPair();
console.log(result);
