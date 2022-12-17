/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
7kyu
https://www.codewars.com/kata/57f609022f4d534f05000024/javascript*/

function stray(numbers) {
    return numbers.find((e) => numbers.indexOf(e) === numbers.lastIndexOf(e))
  }
  
  stray([1, 1, 2])//, 2);
  stray([1, 2, 1])//, 2);
  stray([17, 17, 3, 17, 17, 17, 17])//3