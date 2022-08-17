//Meeting
/* John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.*/

function meeting(s) {
    let uppercased = s
                       .toUpperCase()
                       .split(';')
                       .map(e => e.split(':')
                                   .reverse()
                                   .join(', '))
                       .sort()
                       .map(e => '(' + e + ')')
                       .join('')
    
    return uppercased
 }

//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

 function highAndLow(numbers){
    const sortedArray = numbers.split(' ').sort((a,b) => b-a)
    return sortedArray[0] + ' ' + sortedArray[sortedArray.length-1]
  }

  function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript */
  function order(words){
    return words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(' ')
  }

/* You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript */

  function getLengthOfMissingArray(arr) {
    let sortedByLength = (arr || []).map(a => a ? a.length : 0).sort((a,b) => a-b);
    
      if(sortedByLength.includes(0)){
        return 0
      }
    
    for(let i = 0; i < sortedByLength.length -1; i++){
      if(sortedByLength[i] + 1 !== sortedByLength[i+1]){
        return sortedByLength[i] + 1
      }
    }
      return 0
    }