/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// function must be O(log n) and this can be achieved using divide and conqure rule.
var searchInsert = function (
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  target = 8
) {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

searchInsert();
