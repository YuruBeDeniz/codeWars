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

/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript */

  function findShort(s){
    const sorted = s.split(' ').map(a => a.length).sort()
    return Math.min(...sorted)   
  }
  
  findShort("bitcoin take over the world maybe who knows perhaps") // 3

/* 
The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.

For example, if n = 20, the resulting sequence will be:

[ 20, 10, 5, 16, 8, 4, 2, 1 ]
Write a program that will output the length of the Collatz Conjecture for any given n.
In the example above, the output would be 8.
https://www.codewars.com/kata/54fb963d3fe32351f2000102/solutions/javascript */

  function collatz(n) {
    let arr = [n]
    while ( n>1 ){
      if(n % 2 === 0){
      n=n/2
    } else if(n % 2 === 1){
      n=(n*3)+1
    }
      arr.push(n)
    }
    return arr.length
  }

  collatz(20) //8
//[ 20, 10, 5, 16, 8, 4, 2, 1 ]


/* Given a string made up of letters a, b, and/or c, 
switch the position of letters a and b (change a to b and vice versa). 
Leave any incidence of c untouched. 
https://www.codewars.com/kata/57f759bb664021a30300007d/javascript */

function switcheroo(x){
  let switchedArr = []
  x.split('')
  for(let i = 0; i< x.length; i++){
    if(x[i] === 'c'){
      switchedArr.push('c')
    } else if(x[i]==='a'){
      switchedArr.push('b')
    } else if(x[i] === 'b'){
      switchedArr.push('a')
    }
  }
	return switchedArr.join('')
}

switcheroo('aaabcccbaaa') //'bbbacccabbb'
switcheroo('ccccc') // 'ccccc'

/* 
Given a Divisor and a Bound , Find the largest integer N , Such That ,
Conditions :
N is divisible by divisor
N is less than or equal to bound
N is greater than 0.
https://www.codewars.com/kata/5aba780a6a176b029800041c/javascript
 */

function maxMultiple(divisor, bound){
  return bound - (bound % divisor) 
}

/* 
Pirates have notorious difficulty with enunciating. 
They tend to blur all the letters together and scream at people.
At long last, we need a way to unscramble what these pirates are saying.
Write a function that will accept a jumble of letters as well as a dictionary, 
and output a list of words that the pirate might have meant.

For example:
grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. 
Return an empty array if there are no matches. 
https://www.codewars.com/kata/52b305bec65ea40fe90007a7/javascript 
so, i had to compare 2 values for that, i sorted both values so that 
i could compare them but i used filter method to return the value without change*/

function grabscrab(anagram, dictionary) {
  anagram=anagram.split('').sort().join('')
  return dictionary.filter(a=>a.split('').sort().join('')===anagram)
  }
  
grabscrab("ainstuomn", ["mountains", "hills", "mesa"]) //["mountains"]
grabscrab("oolp", ["donkey", "pool", "horse", "loop"]) //["pool", "loop"]

/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
// If you add an else, the loop never iterates, it's just unconditionally return in the very first iteration.
// With an else return you will stop the loop (and function) always on the first iteration.
https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript */

function smallEnough(a, limit){
  return a.every(el => el <= limit)
}

function smallEnough(a, limit){
  for(let i=0; i<a.length; i++){
    if(a[i]>limit){
      return false
    }
  }
    return true
  }
  
  smallEnough([66, 101], 200) //true
  smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) //false

  /* https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
  Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000 */

function plusMinus(arr) {
  let positives = 0
	let negatives = 0
	let zeros = 0
	for(let i = 0; i<arr.length; i++){
    if(arr[i] > 0){
      positives += 1
    } else if(arr[i] === 0){
      negatives += 1
    } else if(arr[i] < 0){
      zeros += 1    }
  }
  console.log((positives/arr.length).toFixed(6))  
  console.log((zeros/arr.length).toFixed(6))
  console.log((negatives/arr.length).toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1]) // 0.500000  0.333333 0.166667