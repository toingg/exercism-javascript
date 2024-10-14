// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(""));
  const num2 = Number(array2.join(""));
  const sum = num1 + num2;
  return sum;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const numStr = String(value);
  let j = numStr.length - 1;
  for (let i = 0; i < numStr.length / 2; i++) {
    if (numStr[i] !== numStr[j]) {
      return false;
    }
    j--;
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!Boolean(input)) {
    return "Required field";
  } else if (Number(input) === 0 || String(Number(input)) === "NaN") {
    return "Must be a number besides 0";
  }

  return "";
}
