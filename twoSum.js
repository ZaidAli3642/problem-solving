const twoSum = (input = [2, 7, 11, 15], target = 33) => {
  let prev = 0,
    sum = 0;

  for (let i = 1; i < input.length; i++) {
    sum = input[i] + sum;
    if (sum + input[prev] === target) {
      console.log([prev, i]);
      return;
    } else if (sum + input[prev] > target || i > input.length - 1) {
      prev++;
      i = prev;
      sum = 0;
    }
  }
};

twoSum();
