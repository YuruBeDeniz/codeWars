/* Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
7kyu
https://www.codewars.com/kata/5413759479ba273f8100003d/javascript */

reverse = function(array) {
    let reversed = new Array;
      for(let i = array.length-1; i >= 0; i--) {
          reversed.push(array[i]);
      }
      return reversed;
  }
  
  reverse([1,2,3])//, [3,2,1] )
  reverse([1,null,14,"two"])//, ["two",14,null,1]