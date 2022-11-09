/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
5kyu
https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript */

function moveZeros(arr) {
    newArr = arr.filter(el => el !== 0)
    zeros = [];
    for(let i = 0; i< arr.length; i++){
      if(arr[i] === 0){
        zeros.push(arr[i])
      }
    }
  return newArr.concat(zeros)
  }
  
  moveZeros([1,2,0,1,0,1,0,3,0,1])//, [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])