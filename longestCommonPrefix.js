/**
 * @param {string[]} strs
 * @return {string}
 */

// ["flower","flow","flight"]

// ["cir","car"]
// ["abab", "aba", "abc"]

var longestCommonPrefix = function (strs = ["flower", "flow", "flight"]) {
  if (strs.length === 1) return strs[0];

  const sorted = strs.sort();
  const firstIndexValue = sorted[0];
  const lastIndexValue = sorted[sorted.length - 1];
  let indices = [];

  for (let i = 0; i < firstIndexValue.length; i++) {
    if (firstIndexValue[i] == lastIndexValue[i]) {
      indices.push(i);
    } else {
      break;
    }
  }

  const result = firstIndexValue.substring(indices[0], indices.length);
  return result;
};

const result = longestCommonPrefix();
console.log(result);
