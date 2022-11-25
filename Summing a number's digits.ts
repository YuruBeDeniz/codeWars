/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
7kyu
https://www.codewars.com/kata/52f3149496de55aded000410/typescript */

export function parse(data: string): number[] {
    return String(Math.abs(n)).split('').reduce((accumulator, value) => Number(accumulator) + Number(value), 0);
}

export function parse(data: string): number[] {
   let sum = 0;
   String(Math.abs(n)).split('').map(e => sum += Number(e));
   return sum;
}
  
  console.log(sumDigits(10))//, 1);
  console.log(sumDigits(99))//, 18);
  console.log(sumDigits(-32))//, 5