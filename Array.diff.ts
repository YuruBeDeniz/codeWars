/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
If a value is present in b, all of its occurrences must be removed from the other:

array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)
6kyu
https://www.codewars.com/kata/523f5d21c841566fde000009/typescript */

export function arrayDiff(a: number[], b: number[]): number[] {
    let difference = a.filter(x => !b.includes(x))
    return difference
  }
  
  
  arrayDiff([], [4, 5])//).to.eql([], 'a was [], b was [4,5]');
  arrayDiff([3, 4], [3])//).to.eql([4], 'a was [3, 4], b was [3]');
  arrayDiff([1, 8, 2], [])//).to.eql([1, 8, 2], 'a was [1, 8, 2], b was []');
  arrayDiff([1, 2, 3], [1, 2])//).to.eql([3], 'a was [1, 2, 3], b was [1, 2]'