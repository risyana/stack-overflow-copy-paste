export default divide

/**
 * @module Divide
 * @Description This method will perform Divide operation, with certain number of digit after decimal
 *
 * @param {Number} div1 - the number that is divided, divident
 * @param {Number} div2 - the number to be divided with, divisor
 * @param {Number} NumOfDigit  - the number of digit after decimal
 * @return {Number} - Result of Division
 */
function divide(div1, div2, NumOfDigit) {
  return (div1 / div2).toFixed(NumOfDigit)
}
