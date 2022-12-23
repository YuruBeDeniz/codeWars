/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
8kyu
https://www.codewars.com/kata/5168bb5dfe9a00b126000018/typescript */

export function solution(str: string): string {
    return str.split("").reverse().join("");
  }