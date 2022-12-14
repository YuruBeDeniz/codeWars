/* Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
5kyu
https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/solutions/javascript */

function firstNonRepeatingLetter(s) {
    let lowerCased = s.toLowerCase();
    for (let i= 0; i < lowerCased.length; i++)
      if(lowerCased.indexOf(lowerCased[i]) === lowerCased.lastIndexOf(lowerCased[i]))
        return s[i];
    return '';
  }
  
  firstNonRepeatingLetter('a')//, 'a');
  firstNonRepeatingLetter('stress')//, 't');
  firstNonRepeatingLetter('moonmen')//, 'e');
  firstNonRepeatingLetter('sTreSS') //T

//how to get the stock data of Tesla in javascript?

