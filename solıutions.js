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