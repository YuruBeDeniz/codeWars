/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/typescript
8kyu */

export function past(h: number, m: number, s: number): number {
    return (h * 3600000) + (m * 60000) + (s * 1000)
  }
  
  past(0, 1, 1)//, 61000);
  past(1, 1, 1)//, 3661000);
  past(0, 0, 0)//, 0);
  past(1, 0, 1)//, 3601000);
  past(1, 0, 0)//, 3600000);