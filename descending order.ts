/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
7kyu
https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript  */

export function descendingOrder(n: number): number {
    return parseInt((n+'').split('').sort().reverse().join(''))
}

export function descendingOrderr(n: number): number {
    return +(n.toString().split('').sort().reverse().join(''))
   }