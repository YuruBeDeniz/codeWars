/* Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
6kyu
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/typescript */

export function multiplicationTable (size: number): number[][] {
    let result: number[][] = [];
    for(let i = 1; i <= size; i++){
      let subArray: number[] = [];
      for(let j = 1; j <=size; j++){
        subArray.push(i*j)
      }
      result.push(subArray)
    }
    return result;      
  }
  
  multiplicationTable(1)//, [[1]])
  multiplicationTable(2)//, [[1, 2], [2, 4]])
  multiplicationTable(3)//, [[1, 2, 3], [2, 4, 6], [3, 6, 9]]