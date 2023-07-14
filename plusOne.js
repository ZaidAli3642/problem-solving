/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (
  digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
) {
  let result = [];
  for (let i = digits.length - 1; i >= 0; i++) {
    digits[i] += 1;

    if (digits[i] < 10) {
      return digits;
    }

    digits[i] = 0;
  }

  return [1, ...digits];
};

const res = plusOne();
console.log(res);
