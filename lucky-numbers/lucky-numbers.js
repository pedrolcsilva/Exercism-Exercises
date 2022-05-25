// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let value1 = 0, value2 = 0
  for(let i = array1.length - 1; i >= 0; i--){
    value1+=array1[i] * Math.pow(10, array1.length - i - 1);
  }
  for(let i = array2.length - 1; i >= 0; i--){
    value2+=array2[i] * Math.pow(10, array2.length - i - 1);;
  }
  return value1 + value2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let i;
  let valueTest = "" + value + "";
  let invertedValue = "";
  for(i = valueTest.length - 1; i >= 0; i-- ){
    invertedValue+= valueTest[i];
  }
  return valueTest == invertedValue
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(typeof input == "undefined" || typeof input == "object" || input == '' || input == undefined || input == null){
    return 'Required field'
  }
  return Number(input)  ? '' : 'Must be a number besides 0'
}
