/**
 * Direction:
 * Swap these numbers without using temporary variable
 *
 * Expected Result:
 * {
 *  a: 4,
 *  b: 2
 * }
 */
let numbers = {
  a: 2,
  b: 4
 };

function result(numbers) {
  a = numbers.a
  b = numbers.b
  
 a = a - b // 2 - 4 = -2
 b = b + a // 4 + -2 = 2
 a = b - a // 2 - -2 = 4
  
  let swap = {
   a: a,
   b: b
  }
 
  return swap
}
 
console.log(result(numbers));
 