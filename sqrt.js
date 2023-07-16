/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}
const result = mySqrt(8);
console.log(result);
