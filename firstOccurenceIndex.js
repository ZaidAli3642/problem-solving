/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack = "sadbutsad", needle = "sad") {
  let i = 0;
  let j;
  for (j = 0; j < haystack.length; j++) {
    if (haystack[j] === needle[i]) {
      if (i === needle.length - 1) return j - i;
      i++;
    } else {
      if (i > 0) {
        j -= 2;
      }
      i = 0;
    }
  }

  return -1;
};

console.log(strStr());
